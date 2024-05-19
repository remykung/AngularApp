import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProductComponent } from './product/product.component';


@NgModule({
  imports: [
    BrowserModule, FormsModule,
  ],
  declarations: [
    AppComponent, DashboardComponent, ProductComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}