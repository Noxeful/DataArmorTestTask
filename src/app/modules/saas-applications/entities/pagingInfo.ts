export class PagingInfo {
  public totalElements: number;
  public totalPages: number;
  public last: boolean;
  public numberOfElements: number;
  public sort: string;
  public first: boolean;
  public size: number;
  public number: number;

  constructor(totalElements: number, totalPages: number, last: boolean, numberOfElements: number, sort: string, first: boolean, size: number, number: number) {
    this.totalElements = totalElements;
    this.totalPages = totalPages;
    this.last = last;
    this.numberOfElements = numberOfElements;
    this.sort = sort;
    this.first = first;
    this.size = size;
    this.number = number;
  }
}
