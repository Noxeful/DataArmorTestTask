import {ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-saas-connections-list',
  templateUrl: './saas-connections-list.component.html',
  styleUrls: ['./saas-connections-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SaasConnectionsListComponent implements OnInit {

  constructor(private router: Router, private cdRef: ChangeDetectorRef) { }

  ngOnInit(): void {
  }

  public navigateTo(address: string): void {
    this.router.navigate([address]);
  }

}
