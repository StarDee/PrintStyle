import {
  Component, Input, Output, EventEmitter, ComponentFactoryResolver, ViewChild, ViewContainerRef
} from '@angular/core';
import {RowStyle} from "../domain/RowStyle";
import {ColumnStyle} from "../domain/ColumnStyle";
import {ColumnComponent} from "./ColumnComponent";

@Component({
  selector: "exe-alert",
  template: `
    <div style="background-color: aquamarine">
      <h1 (click)="output.next(type)">Alert {{type.rowName}}</h1>
      <button (click)="createComponent('normal')">加列</button>
      <ng-template #colContainer></ng-template>
    </div>
  `,
})
export class NormalRowComponent {
  @Input() type: RowStyle;
  @Output() output = new EventEmitter();
  @ViewChild("colContainer", {read: ViewContainerRef}) container: ViewContainerRef;

  componentRef: any;
  ColComponents: Array<Component> = [];

  constructor(private resolver: ComponentFactoryResolver) {

  }

  createComponent(type: string) {
    // this.container.clear();
    const factory: any =
      this.resolver.resolveComponentFactory(ColumnComponent);
    this.componentRef = this.container.createComponent(factory);
    this.ColComponents.push(this.componentRef.instance);
    let style = new ColumnStyle();

    this.componentRef.instance.type = style;
    this.componentRef.instance.output.subscribe((msg: string) => console.log(msg));
  }

}


