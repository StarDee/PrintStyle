import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {BillMenuComponent} from "./billMenu/bill-menu.component"
import {BillDetailComponent} from "./billDetail/bill-detail.component"
import {NormalRowComponent} from "./billDetail/NormalRowComponent";
import {BlankRowComponent} from "./billDetail/BlankRowComponent";
import {ColumnComponent} from "./billDetail/ColumnComponent";


@NgModule({
  imports: [BrowserModule],
  declarations: [AppComponent, NormalRowComponent, BlankRowComponent, ColumnComponent, BillDetailComponent,BillMenuComponent],
  bootstrap: [AppComponent],
  entryComponents: [NormalRowComponent, BlankRowComponent, ColumnComponent],
})
export class AppModule {
}
