import {CommonModule} from "@angular/common";
import {NgModule} from "@angular/core";
import {FormsModule} from "@angular/forms";

import {PlaceholderComponent} from "./components/placeholder/placeholder.component";
import {TabNavComponent} from "./components/tab-nav/tab-nav.component";
import {MaterialSharedModule} from "../material-shared/material-shared.module";
import {SupportButtonComponent} from "./components/support-button/support-button.component";
import {SupportModalComponent} from "./components/support-modal/support-modal.component";


@NgModule({
  declarations: [
    PlaceholderComponent,
    TabNavComponent,
    SupportButtonComponent,
    SupportModalComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    MaterialSharedModule,
  ],
  exports: [
    PlaceholderComponent,
    TabNavComponent,
    SupportButtonComponent,
    SupportModalComponent,
  ],
})

export class AppSharedModule {

}
