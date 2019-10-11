import { Component, ViewChild } from '@angular/core';
 
import { MatDialog, MatTable } from '@angular/material';
import {MatTableDataSource} from '@angular/material/table';
import { DialogBoxComponent } from '../dialog-box/dialog-box.component';
 
export interface UsersData {
  name: string;
  doc: string;
  id: number;
}
 
const ELEMENT_DATA: UsersData[] = [
  {id: 1, name: 'Sub-Activity-Name', doc: 'yes'},
  {id: 2, name: 'Sub-Activity-Name', doc: 'yes'},
  {id: 3, name: 'Sub-Activity-Name', doc: 'yes'},
  {id: 4, name: 'Sub-Activity-Name', doc: 'yes'}
];
@Component({
  selector: 'app-screen1',
  templateUrl: './screen1.component.html',
  styleUrls: ['./screen1.component.scss']
})
export class Screen1Component {
  displayedColumns: string[] = ['id', 'name', 'doc', 'action'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);
  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
 
  @ViewChild(MatTable,{static:true}) table: MatTable<any>;
 
  constructor(public dialog: MatDialog) {}
 
  openDialog(action,obj) {
    obj.action = action;
    const dialogRef = this.dialog.open(DialogBoxComponent, {
      width: '750px',
      data:obj
    });
 
    dialogRef.afterClosed().subscribe(result => {
      if(result.event == 'Add'){
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
      doc:row_obj.doc
    });
    this.table.renderRows();``
    
  }
 
  deleteRowData(row_obj){
    this.dataSource = this.dataSource.filter((value,key)=>{
      return value.id != row_obj.id;
    });
  }
  

 
}
