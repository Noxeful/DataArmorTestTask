import {Component, Inject, ChangeDetectionStrategy} from "@angular/core";

import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material/dialog";

interface SupportOption {
  value: string;
  viewValue: string;
}

@Component({
  selector: "app-support-modal",
  templateUrl: './support-modal.component.html',
  styleUrls: ['./support-modal.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SupportModalComponent {

  public typeOfTicket: string;
  public ticket: string;

  public options: SupportOption[] = [
    {value: 'bugReport-0', viewValue: 'Bug Report'},
    {value: 'genericQuestion-1', viewValue: 'Generic Question'},
    {value: 'requestDemo-2', viewValue: 'Request Demo'}
  ];

  constructor(private _mdr: MatDialogRef<SupportModalComponent>, @Inject(MAT_DIALOG_DATA) data: string) {

  }
  public closeDialog(): void {
    this._mdr.close(false)
  }

  public onSend(): void {
    const modalResult = {
      typeOfTicket: this.typeOfTicket,
      ticketMessage: this.ticket
    }
    console.log(modalResult);
  }
}
