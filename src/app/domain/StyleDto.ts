import {RowStyle} from "./RowStyle";

export class StyleDto {
  Rows: Array<RowStyle> = [];

  public constructor() {
    let row = new RowStyle();
    row.RowType = "normal";
    row.rowName = "普通行数据";
    this.Rows.push(row);

    let row1 = new RowStyle();
    row1.RowType = "blank";
    row.rowName = "空行";
    this.Rows.push(row1);
  }
}
