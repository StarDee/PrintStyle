import {Component, Input, Output, EventEmitter} from '@angular/core';
import {RowStyle} from "../domain/RowStyle";

@Component({
  selector: "exe-Other",
  template: `
    <div class="bbl-blank-row">
      {{type.rowName}}
      <div class="bbl-height-btn btn-info btn-lg" (click)="output.next(type)">
        <span class="glyphicon glyphicon-resize-vertical"></span>
      </div>
      <div class="bbl-del-row">
        <span class="glyphicon glyphicon-remove-sign"></span>
      </div>
    </div>
    
  `,
})
export class BlankRowComponent {
  @Input() type: RowStyle;
  @Input() instanceId: number = 0;
  @Output() output = new EventEmitter();

}
