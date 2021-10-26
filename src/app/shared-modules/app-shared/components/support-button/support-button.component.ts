import {ChangeDetectionStrategy, ChangeDetectorRef, Component, OnDestroy, OnInit} from '@angular/core';
import {Location} from "@angular/common";
import {Subscription} from "rxjs";

import {MatDialog, MatDialogRef} from "@angular/material/dialog";
import {SupportModalComponent} from "../support-modal/support-modal.component";

@Component({
  selector: 'app-support-button',
  templateUrl: './support-button.component.html',
  styleUrls: ['./support-button.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SupportButtonComponent implements OnInit, OnDestroy {

  public matDialogRef: MatDialogRef<SupportModalComponent>;
  public dialogSubscription: Subscription;

  constructor(private cdRef: ChangeDetectorRef, private location: Location, private matDialog: MatDialog) { }

  ngOnInit(): void {

  }

  ngOnDestroy() {
    this.dialogSubscription.unsubscribe();
  }

  public OpenModal(): void {
    this.matDialogRef = this.matDialog.open(SupportModalComponent, {
      disableClose: true
    });

    this.dialogSubscription = this.matDialogRef.afterClosed().subscribe(res => {
      console.log('modal window closed');
    }, (error: any) => console.log(error));
  }

}
