import { Injectable } from '@angular/core';
import {HttpClient, HttpResponse} from "@angular/common/http";
import {Observable} from "rxjs";

import {ITableDataDTO} from "../interfaces/ITableDataDTO";

const baseUrl: string = 'http://localhost:3000';

@Injectable({
  providedIn: 'root'
})
export class DataAccessService {

  constructor(private http: HttpClient) { }

  public getAllContent(page: number, limit: number, underutilizedLicenses: boolean, abandonedLicenses: boolean, query: string): Observable<HttpResponse<ITableDataDTO[]>> {
    let param: string = '';
    let queryParam: string = '';
    if (underutilizedLicenses && !abandonedLicenses) {
      param = '&usageDetailDto.utilization_gte=0&usageDetailDto.utilization_lte=0.35';
    }

    if (!underutilizedLicenses && abandonedLicenses) {
      param = '&usageDetailDto.utilization_gte=0&usageDetailDto.utilization_lte=0';
    }

    if (query !== '') {
      queryParam = `&q=${query}`
    }

    return this.http.get<ITableDataDTO[]>(`${baseUrl}/content?_page=${page}&_limit=${limit}${param}${queryParam}`, {observe: 'response'});
  }

  public getAllFilter(query: string, underutilizedLicenses: boolean, abandonedLicenses: boolean): Observable<HttpResponse<ITableDataDTO[]>> {
    let param: string = '';
    if (underutilizedLicenses && !abandonedLicenses) {
      param = '&usageDetailDto.utilization_gte=0&usageDetailDto.utilization_lte=0.35';
    }

    if (!underutilizedLicenses && abandonedLicenses) {
      param = '&usageDetailDto.utilization_gte=0&usageDetailDto.utilization_lte=0';
    }

    return this.http.get<ITableDataDTO[]>(`${baseUrl}/content?q=${query}${param}`, {observe: 'response'});
  }

  public pagingInfo(): Observable<any> {
    return this.http.get(`${baseUrl}/paging-info`)
  }

}
