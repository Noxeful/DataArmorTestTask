import {ChangeDetectionStrategy, ChangeDetectorRef, Component, Input, OnInit, ViewEncapsulation} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import { Location } from '@angular/common'

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeaderComponent implements OnInit {
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
