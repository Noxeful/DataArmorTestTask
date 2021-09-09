import {
  AfterViewInit,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  OnInit,
  ViewChild,
  ViewEncapsulation
} from '@angular/core';
import {DataAccessService} from "../../services/data-access.service";
import {startWith, tap} from "rxjs/operators";
import {HttpResponse} from "@angular/common/http";
import {MatSort} from "@angular/material/sort";
import {MatPaginator, PageEvent} from "@angular/material/paginator";
import {TableData} from "../../entities/tableData";
import {MatTableDataSource} from "@angular/material/table";
import {PagingInfo} from "../../entities/pagingInfo";
import {MatCheckboxChange} from "@angular/material/checkbox";

@Component({
  selector: 'app-users-table',
  templateUrl: './users-table.component.html',
  styleUrls: ['./users-table.component.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UsersTableComponent implements OnInit, AfterViewInit {

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  public columndefs : string[] = [
    'accountUsageDataDto.email',
    'usageDetailDto.utilization',
    'usageDetailDto.lastTime',
    'usageDetailDto.userBillingPeriods',
    'usageDetailDto.userLicenses'
  ];

  public linksFromHeaders: Object;

  public dataSource: MatTableDataSource<TableData>;
  public pagingInfo: PagingInfo;

  public underutilizedLicenses: boolean = false;
  public abandonedLicenses: boolean = false;

  constructor(private cdRef: ChangeDetectorRef, private dataAccess: DataAccessService) { }

  ngOnInit(): void {

  }

  ngAfterViewInit() {
    this.paginator.page.pipe(
      startWith(null),
      tap((event: PageEvent) => {
        if (event != null) {
          let page = event.pageIndex + 1;
          let size = event.pageSize;
          this.loadData(page, size);
        } else {
          this.loadData(1, 10);
        }
      })
    )
      .subscribe();
  }

  public loadPagingInfo(): void {
    this.dataAccess.pagingInfo()
      .subscribe((data) => {
        this.pagingInfo = data;
        this.cdRef.markForCheck();
      }, error => console.log(error));
  }

  public loadData(page: number, pageLimit: number): void {
    this.dataAccess.getAllContent(page, pageLimit, this.underutilizedLicenses, this.abandonedLicenses)
      .pipe(
        tap((res: HttpResponse<any>) => {
          res.headers['Link']  = this.parseLinkHeader(res.headers.get('Link'));
        })
      )
      .subscribe((data: HttpResponse<any>) => {
        this.linksFromHeaders = data.headers['Link'];
        this.dataSource = new MatTableDataSource(data.body);
        this.loadPagingInfo();
        this.setTableSettings();
        this.cdRef.markForCheck();
      }
      , (error: any) => console.log(error));
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

  public applyFilter(event: Event): void {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  public nestedFilterCheck(search, data, key): void {
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
    this.loadData(1, 10);
    this.paginator.pageIndex = 0;
  }

  public abandonedLicensesHandler(event: MatCheckboxChange): void {
    this.abandonedLicenses = event.checked;
    this.loadData(1, 10);
    this.paginator.pageIndex = 0;

  }

}
