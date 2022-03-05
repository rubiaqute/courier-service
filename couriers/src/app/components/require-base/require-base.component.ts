import { Component} from '@angular/core';
import { ColDef, GridApi, GridReadyEvent } from 'ag-grid-community';

@Component({
  selector: 'app-require-base',
  templateUrl: './require-base.component.html',
  styleUrls: ['./require-base.component.scss']
})
export class RequireBaseComponent {
  private gridApi!: GridApi;
  columnDefs: ColDef[] = [
    { headerName: '№ ', field: 'id', width:80},
    { headerName: 'Дата' , field:'date'},
    { headerName: 'Отправитель', field:'sender', sortable:true, filter:true},
    { headerName: 'Получатель', field:'receiver', sortable:true, filter:true},
    { headerName: 'Статус', field: 'status', sortable:true, filter:true},

];

onGridReady(params: GridReadyEvent) {
  this.gridApi = params.api;
  this.gridApi.sizeColumnsToFit()

}
rowData = [
  {id: 1, date: '02.02.2022', sender: "ООО Рога и Копыта", receiver:"ООО Хвосты и Уши", status:"Выполняется"}
    // { make: 'Toyota', model: 'Celica', price: 35000 },
    // { make: 'Ford', model: 'Mondeo', price: 32000 },
    // { make: 'Porsche', model: 'Boxter', price: 72000 }
];

}
