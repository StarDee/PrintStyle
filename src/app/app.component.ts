import {
  Component, ViewChild, ViewContainerRef, ComponentFactory,
  ComponentRef, ComponentFactoryResolver, AfterViewInit
} from '@angular/core';
import {BillDetailComponent } from "./billDetail/bill-detail.component"
import {forEach} from "@angular/router/src/utils/collection";


@Component({
  selector: 'my-app',
  template: `
    <div>
      <bill-detail></bill-detail>
    </div>
    <div>
      <bill-menu></bill-menu>
    </div>
  `
})
export class AppComponent implements AfterViewInit {
  ngAfterViewInit():void{

  }
}
