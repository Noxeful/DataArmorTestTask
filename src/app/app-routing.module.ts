import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./components/home/home.component";
import {ContentComponent} from "./components/content/content.component";
import {SaasListComponent} from "./components/saas-list/saas-list.component";
import {SupportComponent} from "./components/support/support.component";
import {PlaceholderComponent} from "./components/placeholder/placeholder.component";

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'saas_applications/utilization',
    component: PlaceholderComponent,
  },
  {
    path: 'saas_applications/renewals_calendar',
    component: PlaceholderComponent,
  },
  {
    path: 'saas_applications/saas_connections',
    component: SaasListComponent,
  },
  {
    path: 'saas_applications/saas_connections/:name',
    component: ContentComponent,
  },
  {
    path: 'support',
    component: SupportComponent,
  },
  { path: '**', redirectTo: 'page-not-found' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
