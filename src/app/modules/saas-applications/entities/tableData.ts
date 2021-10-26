import {IAccountUsageDataDto} from "../interfaces/IAccountUsageDataDto";
import {IUsageDetailDto} from "../interfaces/IUsageDetailDto";
import {ITableDataDTO} from "../interfaces/ITableDataDTO";

export class TableData {
  public accountUsageDataDto: IAccountUsageDataDto;
  public usageDetailDto: IUsageDetailDto;

  constructor() {

  }

  public static fromServer(data: ITableDataDTO): TableData {
    let instance: TableData = null;

    if (data) {
      instance = new TableData();
      instance.accountUsageDataDto = data.accountUsageDataDto;
      instance.usageDetailDto = data.usageDetailDto;
    }

    return instance;
  }
}
