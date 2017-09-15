import {
  Component, ViewChild, ViewContainerRef, ComponentFactory,
  ComponentRef, ComponentFactoryResolver, AfterViewInit
} from '@angular/core';
import {BillDetailComponent } from "./billDetail/bill-detail.component"
import {forEach} from "@angular/router/src/utils/collection";


@Component({
  selector: 'my-app',
  template: `
    <div class="bbl-wrap">
    <div class="bbl-right-col">
      <bill-menu></bill-menu>
    </div>
    <div class="bbl-left-col">
      <bill-detail></bill-detail>
    </div>
    </div>
  `
})
export class AppComponent implements AfterViewInit {
  ngAfterViewInit():void{

  }
}
