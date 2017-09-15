import {
  Component, ViewChild, ViewContainerRef, ComponentFactory,
  ComponentRef, ComponentFactoryResolver, OnDestroy
} from '@angular/core';
import {BlankRowComponent} from "./BlankRowComponent";
import {NormalRowComponent} from "./NormalRowComponent";
import {RowStyle} from "./domain/RowStyle";
import {StyleDto} from "./domain/StyleDto";
import {forEach} from "@angular/router/src/utils/collection";


@Component({
  selector: 'bill-detail',
  template: `
    <button (click)="createComponent('blank')">建空行</button>
    <button (click)="createComponent('normal')">建普通行</button>
    <button (click)="reCover()">恢复数据</button>
    <ng-template #rowContainer></ng-template>
  `
})
export class BillDetailComponent implements OnDestroy {
  componentRef: any;
  rowTemplate: {[key: string]: any} = {};
  RowComponents:Array<Component>=[];
  index:number=0;
  @ViewChild("rowContainer", { read: ViewContainerRef }) container: ViewContainerRef;

  constructor(private resolver: ComponentFactoryResolver) {
    this.rowTemplate["blank"] = BlankRowComponent;
    this.rowTemplate["normal"] = NormalRowComponent;
  }
  styles: StyleDto;

  createComponent(type: string,) {
    //this.container.clear();
    const factory: any =
      this.resolver.resolveComponentFactory(this.rowTemplate[type]);
    this.componentRef = this.container.createComponent(factory);
    this.RowComponents.push(this.componentRef.instance);
    var style=new RowStyle();
    style.rowId= this.index;
    style.rowName="无数据";
    this.index++;
    this.componentRef.instance.type = style;
    this.componentRef.instance.instanceId=this.index;
    this.componentRef.instance.output.subscribe((msg: string) => console.log(msg));
  }

  createalComponent(type: string,style:RowStyle) {

    const factory: any =
      this.resolver.resolveComponentFactory(this.rowTemplate[type]);
    this.componentRef = this.container.createComponent(factory);
    this.RowComponents.push(this.componentRef.instance);
    this.index++;
    this.componentRef.instance.type = style;
    this.componentRef.instance.output.subscribe((msg: string) => console.log(msg));
  }

  reCover()
  {
    this.container.clear();
    this.styles=new StyleDto();
    this.styles.Rows.forEach(o=>{
      this.createalComponent(o.RowType,o);
    })
  }

  ngOnDestroy() {
    this.componentRef.destroy()
  }


}
