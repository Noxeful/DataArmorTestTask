import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContentComponent } from './components/content/content.component';
import { TabNavComponent } from './components/tab-nav/tab-nav.component';
import { UsersTableComponent } from './components/users-table/users-table.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSliderModule } from '@angular/material/slider';
import {MatTableModule} from "@angular/material/table";
import { HttpClientModule } from '@angular/common/http';
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatPaginatorModule} from "@angular/material/paginator";
import { MatInputModule } from '@angular/material/input';
import {MatSortModule} from "@angular/material/sort";
import {MatCheckboxModule} from "@angular/material/checkbox";
import {MatSidenavModule} from "@angular/material/sidenav";

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import {MatTabsModule} from "@angular/material/tabs";
import { HomeComponent } from './components/home/home.component';
import { SaasListComponent } from './components/saas-list/saas-list.component';
import { PlaceholderComponent } from './components/placeholder/placeholder.component';
import { HeaderComponent } from './components/header/header.component';
import {MatSelectModule} from "@angular/material/select";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { SupportComponent } from './components/support/support.component';
import {_MatMenuDirectivesModule, MatMenuModule} from "@angular/material/menu";
import {MatExpansionModule} from "@angular/material/expansion";
import {MatListModule} from "@angular/material/list";



@NgModule({
  declarations: [
    AppComponent,
    ContentComponent,
    TabNavComponent,
    UsersTableComponent,
    HomeComponent,
    SaasListComponent,
    PlaceholderComponent,
    HeaderComponent,
    SupportComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSliderModule,
    MatTableModule,
    HttpClientModule,
    MatFormFieldModule,
    MatPaginatorModule,
    MatInputModule,
    MatSortModule,
    MatCheckboxModule,
    MatSidenavModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatDividerModule,
    MatTabsModule,
    MatSelectModule,
    FormsModule,
    MatSnackBarModule,
    _MatMenuDirectivesModule,
    MatMenuModule,
    MatExpansionModule,
    MatListModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
