import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

const baseUrl: string = 'http://localhost:3000';

@Injectable({
  providedIn: 'root'
})
export class DataAccessService {

  constructor(private http: HttpClient) { }

  public getAllContent(page: number, limit: number, underutilizedLicenses: boolean, abandonedLicenses: boolean): any {
    let param: string = '';
    if (underutilizedLicenses && !abandonedLicenses) {
      param = '&usageDetailDto.utilization_gte=0&usageDetailDto.utilization_lte=0.35';
    }

    if (!underutilizedLicenses && abandonedLicenses) {
      param = '&usageDetailDto.utilization_gte=0&usageDetailDto.utilization_lte=0';
    }

    return this.http.get(`${baseUrl}/content?_page=${page}&_limit=${limit}${param}`, {observe: 'response'});
  }

  public pagingInfo(): Observable<any> {
    return this.http.get(`${baseUrl}/paging-info`)
  }

}
