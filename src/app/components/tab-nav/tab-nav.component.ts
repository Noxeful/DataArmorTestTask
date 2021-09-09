import {
  ChangeDetectionStrategy, ChangeDetectorRef,
  Component,
  EventEmitter,
  Input, OnChanges,
  OnInit,
  Output, SimpleChanges,
  ViewEncapsulation
} from '@angular/core';
import {MatTabChangeEvent} from "@angular/material/tabs";

@Component({
  selector: 'app-tab-nav',
  templateUrl: './tab-nav.component.html',
  styleUrls: ['./tab-nav.component.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TabNavComponent implements OnInit{
  @Input() public tabNames: string[] = ['First', 'Second', 'Third'];
  @Input() public activeTab: string = '';

  @Output() public onActiveTab: EventEmitter<string> = new EventEmitter<string>();


  constructor(private cdRef: ChangeDetectorRef) { }

  ngOnInit(): void {
    this.onActiveTab.emit(this.tabNames[0]);
  }

  public setActiveTab(tabEvent: MatTabChangeEvent): void {
    this.onActiveTab.emit(tabEvent.tab.textLabel);
    this.cdRef.markForCheck();
  }

}
