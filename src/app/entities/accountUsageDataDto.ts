export class AccountUsageDataDto {
  public accId: number;
  public name: string;
  public email: string;

  constructor(accId: number, name: string, email: string) {
    this.accId = accId;
    this.name = name;
    this.email = email;
  }

}
