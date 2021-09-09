import {ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit, ViewEncapsulation} from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-saas-list',
  templateUrl: './saas-list.component.html',
  styleUrls: ['./saas-list.component.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SaasListComponent implements OnInit {

  constructor(private router: Router, private cdRef: ChangeDetectorRef) { }

  ngOnInit(): void {
  }

  public navigateTo(address: string): void {
    this.router.navigate([address]);
  }

}
