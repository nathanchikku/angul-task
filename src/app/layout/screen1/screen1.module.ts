import { NgModule } from '@angular/core';

import { CommonModule } from '@angular/common';
import { Screen1Component } from '../screen1/screen1.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule } from '@angular/forms';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatSelectModule} from '@angular/material/select';




import { MatTableModule, 
  MatDialogModule, 
  MatFormFieldModule,
  MatInputModule,
  MatButtonModule, } from '@angular/material';
import { MatGridListModule } from '@angular/material/grid-list';
import { Screen1RoutingModule } from './screen1-routing.module';
import { DialogBoxComponent } from '../dialog-box/dialog-box.component';

@NgModule({
  declarations: [Screen1Component,DialogBoxComponent],
  imports: [
    CommonModule,
    Screen1RoutingModule,
    FormsModule,
    MatGridListModule,
        MatTableModule,
        MatButtonModule,
        MatDialogModule, 
        MatFormFieldModule,
        MatDatepickerModule,
        MatInputModule,
        MatSelectModule,
        FlexLayoutModule.withConfig({addFlexToParent: false})
    ],
    entryComponents: [
      DialogBoxComponent
    ],
  })
  export class Screen1Module {}
  
