import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material';

export interface EventElement {
    position:number;
    name: string;
    booked: string;
    tid: string;
    status: string;
    date: string;
}

const ELEMENT_DATA: EventElement[] = [
    { position: 1, name: 'example1', booked: 'nidhin', tid:'12', status:'success', date: '09/03/2019' },
    { position: 2, name: 'example2', booked: 'nidhin', tid:'12', status:'failed', date: '09/03/2019' },
    { position: 3, name: 'example3', booked: 'nidhin', tid:'12', status:'success', date: '09/03/2019' },
    { position: 4, name: 'example4', booked: 'nidhin', tid:'12', status:'success', date: '09/03/2019' },
    { position: 5, name: 'example5', booked: 'nidhin', tid:'12', status:'failed', date: '09/03/2019' },
    { position: 6, name: 'example6', booked: 'nidhin', tid:'12', status:'success', date: '09/03/2019' },
    { position: 7, name: 'example7', booked: 'nidhin', tid:'12', status:'failed', date: '09/03/2019' },
    { position: 8, name: 'example8', booked: 'nidhin', tid:'12', status:'success', date: '09/03/2019' }
];

@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
    displayedColumns = ['position', 'name', 'booked', 'date', 'tid', 'status'];
    dataSource = new MatTableDataSource(ELEMENT_DATA);
    places: Array<any> = [];

    applyFilter(filterValue: string) {
        filterValue = filterValue.trim(); 
        filterValue = filterValue.toLowerCase(); 
        this.dataSource.filter = filterValue;
    }

    constructor() {
       
    }

    ngOnInit() {}
}
