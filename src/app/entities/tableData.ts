import {AccountUsageDataDto} from "./accountUsageDataDto";
import {UsageDetailDto} from "./usageDetailDto";

export class TableData {
  public accountUsageDataDto: AccountUsageDataDto;
  public usageDetailDto: UsageDetailDto;

  constructor(accountUsageDataDto: AccountUsageDataDto, usageDetailDto: UsageDetailDto) {
    this.accountUsageDataDto = accountUsageDataDto;
    this.usageDetailDto = usageDetailDto;
  }
}
