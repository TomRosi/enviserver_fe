import {Observable} from "rxjs";

export class DetailInterface {
  data$: Observable<any[]>;
  cols: {field: string, header: string, width: string, useStyle?: boolean}[];
}
