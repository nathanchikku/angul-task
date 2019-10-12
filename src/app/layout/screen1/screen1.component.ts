import { Component, ViewChild } from '@angular/core';
 
import { MatDialog, MatTable } from '@angular/material';
// import {MatTableDataSource} from '@angular/material/table';
import { DialogBoxComponent } from '../dialog-box/dialog-box.component';
 
export interface UsersData {
 
  name: string;
  start: string;
  end: string;
  id: number;
}
 
const ELEMENT_DATA: UsersData[] = [
  {id: 1, name: 'Event-Name', start:'09/03/2019', end:'09/04/2019'},
  {id: 2, name: 'Event-Name', start:'09/03/2019', end:'09/04/2019'},
  {id: 3, name: 'Event-Name', start:'09/03/2019', end:'09/04/2019'},
  {id: 4, name: 'Event-Name', start:'09/03/2019', end:'09/04/2019'}
];
@Component({
  selector: 'app-screen1',
  templateUrl: './screen1.component.html',
  styleUrls: ['./screen1.component.scss']
})
export class Screen1Component {
  displayedColumns: string[] = ['id', 'name', 'start','end' ,'action'];
  dataSource = ELEMENT_DATA;
  
 
  @ViewChild(MatTable,{static:true}) table: MatTable<any>;
 
  constructor(public dialog: MatDialog) {}
 
  openDialog(action,obj) {
    obj.action = action;
    const dialogRef = this.dialog.open(DialogBoxComponent, {
      width: '750px',
      data:obj
    });
 
    dialogRef.afterClosed().subscribe(result => {
      if(result.event == 'Create'){
        this.addRowData(result.data);
      }else if(result.event == 'Delete'){
        this.deleteRowData(result.data);
      }
    });
  }
 
  addRowData(row_obj){
    var d = new Date();
    this.dataSource.push({
      id:d.getTime(),
      name:row_obj.name,
      start:row_obj.start,
      end:row_obj.end
    });
    this.table.renderRows();``
    
  }
 
  deleteRowData(row_obj){
    this.dataSource = this.dataSource.filter((value,key)=>{
      return value.id != row_obj.id;
    });
  }
  

 
}
