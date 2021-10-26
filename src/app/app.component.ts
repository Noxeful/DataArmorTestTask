import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent implements OnInit{
  title = 'DataArmorTestTask';

  public workspaces: string[] = ['Demo Workspace', 'Demo-2 Workspace', 'Demo-3 Workspace']
  public selectedWorkSpace: string = 'Demo Workspace';
  public mail: string = 'MaliK@binadox.com';
  public openSaasMenu: boolean = false;
  public openTemp: boolean = false;

  constructor(private router: Router) {
  }

  public ngOnInit() {

  }

  public navigateTo(address: string): void {
    this.router.navigate([address]);
  }

}
