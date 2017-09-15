import {
  Component, ViewChild, ViewContainerRef, ComponentFactory,
  ComponentRef, ComponentFactoryResolver, OnDestroy
} from '@angular/core';
@Component({
  selector: 'bill-menu',
  template: `
    <div>
      
      <div class="bbl-list-title">单据列表</div>
      
      <div>
          <li class="btn-primary bbl-list-btn">结账单</li>
          <li class="btn-primary bbl-list-btn">交班单</li>
      </div>
    </div>
  `
})

export class BillMenuComponent {

}
