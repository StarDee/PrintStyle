import { Component, Input, Output, EventEmitter } from '@angular/core';
import {RowStyle} from "./domain/RowStyle";

@Component({
  selector: "exe-Other",
  template: `
    <div style="background-color: burlywood;width: 20%;float: left" >
    <h1 (click)="output.next(type)">column {{type.rowName}}</h1>
    </div>
  `,
})
export class ColumnComponent {
  @Input() type: RowStyle ;
  @Output() output = new EventEmitter();

}
