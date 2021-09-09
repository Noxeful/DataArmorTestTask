import {ChangeDetectionStrategy, ChangeDetectorRef, Component, Input, OnInit, ViewEncapsulation} from '@angular/core';
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ContentComponent implements OnInit {
  public tabNames: string[] = ['First', 'Second', 'Third'];

  public param: string = '';
  public activeTab: string = '';

  constructor(private activatedRoute: ActivatedRoute, private cdRef: ChangeDetectorRef) { }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe(params => {
      let param = params.get('name').replace(':','');
      this.param = param;
      if (param === 'adobe_creative_cloud') {
        this.tabNames = ['Overview', 'Users', 'Billing', 'Features'];
      }
      this.cdRef.markForCheck();
    });
  }

  public onActiveTab(tabName: string): void {
    this.activeTab = tabName;
    this.cdRef.markForCheck();
  }

}
