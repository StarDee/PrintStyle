import {
  Component, ViewChild, ViewContainerRef, ComponentFactory,
  ComponentRef, ComponentFactoryResolver, OnDestroy
} from '@angular/core';
@Component({
  selector: 'bill-menu',
  template: `
    <div style="width: 20%;height:100%;border: 2px solid #333">
      <div style="border: solid 1px #333;height: 80px">
        <button>静态字符</button>
      </div>
      <div></div>
    </div>
  `
})

export class BillMenuComponent {

}
