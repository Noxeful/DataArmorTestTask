import {
  AfterViewInit,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component, OnDestroy,
  OnInit,
  ViewChild
} from '@angular/core';
import {HttpResponse} from "@angular/common/http";
import {startWith, tap} from "rxjs/operators";

import {MatSort} from "@angular/material/sort";
import {MatPaginator, PageEvent} from "@angular/material/paginator";
import {MatTableDataSource} from "@angular/material/table";
import {MatCheckboxChange} from "@angular/material/checkbox";

import {DataAccessService} from '../../../services/data-access.service';
import {TableData} from "../../../entities/tableData";
import {PagingInfo} from "../../../entities/pagingInfo";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-saas-user-table',
  templateUrl: './saas-user-table.component.html',
  styleUrls: ['./saas-user-table.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SaasUserTableComponent implements OnInit, AfterViewInit, OnDestroy {

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  public paginatorSubscription: Subscription;
  public pagingInfoSubscription: Subscription;
  public dataSubscription: Subscription;
  public dataLengthSubscription: Subscription;

  public columndefs : string[] = [
    'accountUsageDataDto.email',
    'usageDetailDto.utilization',
    'usageDetailDto.lastTime',
    'usageDetailDto.userBillingPeriods',
    'usageDetailDto.userLicenses'
  ];

  public linksFromHeaders: Object;

  public dataSource: MatTableDataSource<TableData[]> = new MatTableDataSource([]);
  public pagingInfo: PagingInfo;

  public underutilizedLicenses: boolean = false;
  public abandonedLicenses: boolean = false;
  public queryFilter: string = '';
  public tableSize: number;

  constructor(private cdRef: ChangeDetectorRef, private dataAccess: DataAccessService) { }

  ngOnInit(): void {
    this.loadPagingInfo();

  }

  ngAfterViewInit() {
    this.paginatorSubscription = this.paginator.page.pipe(
      startWith(null),
      tap((event: PageEvent) => {
        if (event != null) {
          let page = event.pageIndex + 1;
          this.loadData(page, this.paginator.pageSize);
        } else {
          this.loadData(1, this.paginator.pageSize);
        }
      })
    )
      .subscribe();
  }

  ngOnDestroy() {
    this.paginatorSubscription.unsubscribe();
    this.pagingInfoSubscription.unsubscribe();
    this.dataSubscription.unsubscribe();
    this.dataLengthSubscription.unsubscribe();
  }

  public loadPagingInfo(): void {
    this.pagingInfoSubscription = this.dataAccess.pagingInfo()
      .subscribe((data) => {
        this.pagingInfo = data;
        this.cdRef.markForCheck();
      }, error => console.log(error));

  }

  public loadData(page: number, pageLimit: number): void {
    this.dataSubscription = this.dataAccess.getAllContent(page, pageLimit, this.underutilizedLicenses, this.abandonedLicenses, this.queryFilter)
      .pipe(
        tap((res: HttpResponse<any>) => {
          res.headers['Link']  = this.parseLinkHeader(res.headers.get('Link'));
        })
      )
      .subscribe((data: HttpResponse<any>) => {
        this.linksFromHeaders = data.headers['Link'];
        let tableData = data.body.map((item) => {
          return TableData.fromServer(item);
        }, (error: any) => console.log(error));
        // я знаю что это ОЧЕНЬ костыльное решение, но для того что бы работала серверная пагинация и серверный фильтр
        // лучшего решения в текущих условиях/знаниях я не нашел
        // я думаю, что правильным решением данной задачи было бы реализовать все методы на серверной стороне
        // для различных запросов и различных условий.
        // при старой реализация функционала в фильтре я пытался фильтровать на клиенте, но с серверной пагинацией,
        // с чем местный пагинатор и dataSource.paginator отказывались корректно работать
        // и всегда вылезали различные баги.
        // метод делает второй аналогичный запрос, но без пейджей и лимитов со всеми нужными параметрами
        // что бы длину полученной коллекции установить в length таблицы
        this.dataLengthSubscription = this.dataAccess.getAllFilter(this.queryFilter, this.underutilizedLicenses, this.abandonedLicenses)
        .subscribe((data: HttpResponse<any>) => {
          this.tableSize = data.body.length;
        }, (error: any) => console.log(error));

        this.dataSource.data = tableData;
        this.loadPagingInfo();
        this.setTableSettings();
        this.cdRef.markForCheck();
      }
      , (error: any) => console.log(error));
  }

  public applyFilter(event: Event): void {
    const filterValue = (event.target as HTMLInputElement).value.trim().toLowerCase();
    this.queryFilter = filterValue;
    this.paginator.firstPage();
    this.loadData(1, this.paginator.pageSize);
    this.cdRef.markForCheck();
  }

  public nestedFilterCheck(search, data, key) {
    if (typeof data[key] === 'object') {
      for (const k in data[key]) {
        if (data[key][k] !== null) {
          search = this.nestedFilterCheck(search, data[key], k);
        }
      }
    } else {
      search += data[key];
    }
    return search;
  }

  public parseLinkHeader(header: string) {
    if (header.length == 0) {
      return ;
    }
    let parts = header.split(',');
    let links = {};
    parts.forEach( (p: string) => {
      let section = p.split(';');
      let url = section[0].replace(/<(.*)>/, '$1').trim();
      let name = section[1].replace(/rel="(.*)"/, '$1').trim();
      links[name] = url;
    });

    return links;
  }

  public setTableSettings() {
    this.dataSource.sort = this.sort;
    this.dataSource.sortingDataAccessor = (item, property) => {
      if (property.includes('.')) return property.split('.').reduce((o,i)=>o[i], item)
      return item[property];
    };
    this.dataSource.filterPredicate = (data, filter: string)  => {
      const accumulator = (currentTerm, key) => {
        return this.nestedFilterCheck(currentTerm, data, key);
      };
      const dataStr = Object.keys(data).reduce(accumulator, '').toLowerCase();
      const transformedFilter = filter.trim().toLowerCase();
      return dataStr.indexOf(transformedFilter) !== -1;
    };
  }

  public underutilizedLicensesHandler(event: MatCheckboxChange): void {
    this.underutilizedLicenses = event.checked;
    this.loadData(1, this.paginator.pageSize);
    this.paginator.firstPage();
  }

  public abandonedLicensesHandler(event: MatCheckboxChange): void {
    this.abandonedLicenses = event.checked;
    this.loadData(1, this.paginator.pageSize);
    this.paginator.firstPage();

  }

}
