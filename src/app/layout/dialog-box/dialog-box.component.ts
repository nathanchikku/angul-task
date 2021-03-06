import { Component, Inject, Optional } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';


export interface UsersData {
  name: string;
  start: string;
  end: string;
  desc: string;
  stime:string;
  etime:string;
  venue:string;
  rate:number;
  id: number;
}
 
 
@Component({
  selector: 'app-dialog-box',
  templateUrl: './dialog-box.component.html',
  styleUrls: ['./dialog-box.component.scss']
 
})
export class DialogBoxComponent {
 
  action:any;
  local_data:any;
 
  constructor(
    public dialogRef: MatDialogRef<DialogBoxComponent>,
    
    @Optional() @Inject(MAT_DIALOG_DATA) public data: UsersData) {
    console.log(data);
    this.local_data = {...data};
    this.action = this.local_data.action;
   
  }
 
  doAction(){
    this.dialogRef.close({event:this.action,data:this.local_data});
  }
 
  closeDialog(){
    this.dialogRef.close({event:'Cancel'});
  }
  
}