import {ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-saas-connections-content',
  templateUrl: './saas-connections-content.component.html',
  styleUrls: ['./saas-connections-content.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SaasConnectionsContentComponent implements OnInit {
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
    }, (error: any) => console.log(error));
  }

  public onActiveTab(tabName: string): void {
    this.activeTab = tabName;
    this.cdRef.markForCheck();
  }

}
