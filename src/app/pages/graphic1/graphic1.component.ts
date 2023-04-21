import { Component } from '@angular/core';

@Component({
  selector: 'app-graphic1',
  templateUrl: './graphic1.component.html',
  styles: [],
})
export class Graphic1Component {
  public labels1 = ["VENTA 1", "VENTA 2", "VENTA 3"]
  public labels2 = ["REPORTES 1", "REPORTES 2", "REPORTES 3"]
  public labels3 = ["GASTOS 1", "GASTOS 2", "GASTOS 3"]
  public labels4 = ["PRODUCTOS 1", "PRODUCTOS 2", "PRODUCTOS 3"]
  public data1 = [10, 15, 20];
  public data2 = [3, 4, 8];
  public data3 = [25, 15, 4];
  public data4 = [19, 17, 22];
}
