import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";

import {SaasApplicationsGeneralComponent} from "./components/saas-applications-general/saas-applications-general.component";
import {SaasConnectionsListComponent} from "./components/saas-connections/saas-connections-list/saas-connections-list.component";
import {SaasConnectionsContentComponent} from "./components/saas-connections/saas-connections-content/saas-connections-content.component";
import { PlaceholderComponent } from '../../shared-modules'

const routes: Routes = [
  {
    path: '',
    component: SaasApplicationsGeneralComponent,
    children: [
      {
        path: 'utilization',
        component: PlaceholderComponent,
      },
      {
        path: 'renewals_calendar',
        component: PlaceholderComponent,
      },
      {
        path: 'saas_connections',
        component: SaasConnectionsListComponent,
      },
      {
        path: 'saas_connections/:name',
        component: SaasConnectionsContentComponent,
      },
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})

export class SaasApplicationsRoutingModule{}
