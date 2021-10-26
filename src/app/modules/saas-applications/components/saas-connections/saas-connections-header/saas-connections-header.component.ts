import {ChangeDetectionStrategy, ChangeDetectorRef, Component, Input, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import { Location } from '@angular/common'

@Component({
  selector: 'app-saas-connections-header',
  templateUrl: './saas-connections-header.component.html',
  styleUrls: ['./saas-connections-header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SaasConnectionsHeaderComponent implements OnInit {
  @Input() public headerFromParams: string;

  public prevLinkName: string;


  constructor(private cdRef: ChangeDetectorRef, private router: Router, private location: Location) { }

  ngOnInit(): void {
    this.prevLinkName = this.router.url.split('/')[2].replace('_', ' ');

  }

  public navigateBack(): void {
    this.location.back();
  }

}
