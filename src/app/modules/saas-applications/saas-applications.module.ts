import {NgModule} from "@angular/core";
import {RouterModule} from "@angular/router";
import {CommonModule} from "@angular/common";

import {SaasApplicationsGeneralComponent} from "./components/saas-applications-general/saas-applications-general.component";
import {SaasApplicationsRoutingModule} from "./saas-applications-routing.module";
import {SaasConnectionsContentComponent} from "./components/saas-connections/saas-connections-content/saas-connections-content.component";
import {SaasConnectionsListComponent} from "./components/saas-connections/saas-connections-list/saas-connections-list.component";
import {SaasUserTableComponent} from "./components/saas-connections/saas-user-table/saas-user-table.component";
import {SaasConnectionsHeaderComponent} from "./components/saas-connections/saas-connections-header/saas-connections-header.component";
import { AppSharedModule, MaterialSharedModule } from '../../shared-modules';
@NgModule({
  declarations: [
    SaasApplicationsGeneralComponent,
    SaasConnectionsContentComponent,
    SaasConnectionsListComponent,
    SaasUserTableComponent,
    SaasConnectionsHeaderComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    AppSharedModule,
    MaterialSharedModule,
    SaasApplicationsRoutingModule,
  ],
  exports: [
    SaasApplicationsGeneralComponent,
    SaasConnectionsContentComponent,
    SaasConnectionsListComponent,
    SaasUserTableComponent,
    SaasConnectionsHeaderComponent
  ]
})

export class SaasApplicationsModule {}
