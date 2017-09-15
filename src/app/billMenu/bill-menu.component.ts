import {
  Component, ViewChild, ViewContainerRef, ComponentFactory,
  ComponentRef, ComponentFactoryResolver, OnDestroy
} from '@angular/core';
@Component({
  selector: 'bill-menu',
  template: `
    <button (click)="createComponent('blank')">建空行</button>
    <button (click)="createComponent('normal')">建普通行</button>
    <button (click)="reCover()">恢复数据</button>
    <ng-template #rowContainer></ng-template>
  `
})

export class BillMenuComponent {

}
