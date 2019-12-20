import {Observable} from "rxjs";

export class TableDataInterface {
  data$: Observable<any[]>;
  cols: {field: string, header: string, width: string, useStyle?: boolean}[];
}
