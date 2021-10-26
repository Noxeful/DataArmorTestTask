import {ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-placeholder',
  templateUrl: './placeholder.component.html',
  styleUrls: ['./placeholder.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PlaceholderComponent implements OnInit {
  public url: string = '';

  constructor(private cdRef: ChangeDetectorRef, private router: Router,) { }

  ngOnInit(): void {
    this.url = this.router.url;
    this.cdRef.markForCheck();
  }

}
