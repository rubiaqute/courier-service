import { Component, HostListener, OnInit } from '@angular/core';
import { ColDef, GridApi, GridReadyEvent, RowClickedEvent, RowSelectedEvent } from 'ag-grid-community';
import { IRequire, requires } from './requires-base';

@Component({
  selector: 'app-require-base',
  templateUrl: './require-base.component.html',
  styleUrls: ['./require-base.component.scss'],
})
export class RequireBaseComponent implements OnInit {
  @HostListener('window:resize', ['$event'])
  onResize() {
    this.gridApi.sizeColumnsToFit();
  }
  isFormOpen: boolean = false;
  isRequireOpen:boolean = false;
  selectedRow:number=0;
  private gridApi!: GridApi;
  requiresBase = requires;
  columnDefs: ColDef[] = [
    { headerName: '№ ', field: 'id', width:70, resizable: true},
    { headerName: 'Дата', field: 'date', width:130,resizable: true, sortable: true },
    {
      headerName: 'Отправитель',
      field: 'sender',
      sortable: true,
      filter: true,
      resizable: true,
      wrapText: true,
      autoHeight: true,


    },
    {
      headerName: 'Адрес отправителя',
      field: 'senderAddresse',
      filter: true,
      resizable: true,
      autoHeight: true,

    },
    {
      headerName: 'Телефон',
      field: 'senderPhone',
      filter: true,
      resizable: true,
    },
    {
      headerName: 'Получатель',
      field: 'receiver',
      sortable: true,
      filter: true,
      resizable: true,
      wrapText: true,
      autoHeight: true,

    },
    {
      headerName: 'Адрес получателя',
      field: 'receiverAddresse',
      filter: true,
      resizable: true,
      autoHeight: true,


    },
    {
      headerName: 'Статус',
      field: 'status',
      sortable: true,
      filter: true,
      resizable: true,
    },
  ];
  rowData: IRequire[] = [];

  onGridReady(params: GridReadyEvent) {
    this.gridApi = params.api;
    this.gridApi.sizeColumnsToFit();
  }
  ngOnInit(): void {
    this.requiresBase = requires;
    this.updateTable();

  }
  addRequire(newReq: IRequire) {
    this.requiresBase.push(newReq);
    this.updateTable();
    this.isFormOpen = !this.isFormOpen
  }
  updateTable() {
    this.rowData =[];
    this.requiresBase.forEach((el, index) => {
      const row: IRequire = {
        id: index + 1,
        date: el.date,
        sender: el.sender,
        senderPhone: el.senderPhone,
        senderAddresse: el.senderAddresse,
        receiver: el.receiver,
        receiverAddresse: el.receiverAddresse,
        status: el.status,
      };
      this.rowData.push(row);
    });
  }
  onRowClicked(event:RowClickedEvent){
    this.selectedRow = event.node.data.id - 1
    this.isRequireOpen = true;
  }
}
