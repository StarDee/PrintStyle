import {Component, Input, Output, EventEmitter} from '@angular/core';
import {RowStyle} from "./domain/RowStyle";

@Component({
  selector: "exe-Other",
  template: `
    <div style="background-color: beige">
      <h1 (click)="output.next(type)">Other {{type.rowName}}</h1>
    </div>
  `,
})
export class BlankRowComponent {
  @Input() type: RowStyle;
  @Input() instanceId: number = 0;
  @Output() output = new EventEmitter();

}
