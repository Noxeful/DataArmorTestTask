export class UsageDetailDto {
  public utilization: number;
  public lastTime: Date;
  public userLicenses: string;
  public userBillingPeriods: string;

  constructor(utilization: number, lastTime: Date, userLicenses: string, userBillingPeriods: string) {
    this.utilization = utilization;
    this.lastTime = lastTime;
    this.userLicenses = userLicenses;
    this.userBillingPeriods = userBillingPeriods;
  }

}
