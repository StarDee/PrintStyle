import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {BillMenuComponent} from "./billMenu/bill-menu.component"
import {BillDetailComponent} from "./billDetail/bill-detail.component"
import {NormalRowComponent} from "./billDetail/add-row/NormalRowComponent";
import {BlankRowComponent} from "./billDetail/add-row/BlankRowComponent";
import {ColumnComponent} from "./billDetail/add-row/ColumnComponent";


@NgModule({
  imports: [BrowserModule],
  declarations: [AppComponent, NormalRowComponent, BlankRowComponent, ColumnComponent, BillDetailComponent,BillMenuComponent],
  bootstrap: [AppComponent],
  entryComponents: [NormalRowComponent, BlankRowComponent, ColumnComponent],
})
export class AppModule {
}
