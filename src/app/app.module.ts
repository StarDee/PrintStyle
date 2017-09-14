import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {NormalRowComponent} from "./NormalRowComponent";
import {BlankRowComponent} from "./BlankRowComponent";
import {ColumnComponent} from "./ColumnComponent";


@NgModule({
  imports: [BrowserModule],
  declarations: [AppComponent, NormalRowComponent, BlankRowComponent, ColumnComponent],
  bootstrap: [AppComponent],
  entryComponents: [NormalRowComponent, BlankRowComponent, ColumnComponent],
})
export class AppModule {
}
