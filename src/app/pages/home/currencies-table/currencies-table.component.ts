import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatTableModule, MatTable, MatTableDataSource } from '@angular/material/table';
import { MatPaginatorModule, MatPaginator } from '@angular/material/paginator';
import { MatSortModule, MatSort } from '@angular/material/sort';
import {CurrenciesTableItem } from './currencies-table-datasource';
import {MatFormFieldModule} from '@angular/material/form-field';
import { currency } from '../../../share/models/currency.interface';
import { apiService } from '../../../share/services/api.services';
import {MatInputModule} from '@angular/material/input';
import { CommonModule } from '@angular/common';


export interface UserData {
  id: string;
  name: string;
  progress: string;
  fruit: string;
}

@Component({
  selector: 'app-currencies-table',
  templateUrl: './currencies-table.component.html',
  styleUrl: './currencies-table.component.scss',
  standalone: true,
  imports: [MatTableModule, MatPaginatorModule, MatSortModule,MatFormFieldModule,MatInputModule,CommonModule]
})
export class CurrenciesTableComponent {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatTable) table: MatTable<CurrenciesTableItem>;
  dataSource: MatTableDataSource<currency>;
  displayedColumns = ['symbol', 'current_price','price_change_percentage_24h',"market_cap"];

  constructor(private apiServ:apiService){
    this.apiServ.getCurrencies('eur').then(res=>res.json()).then(res=>{
      this.dataSource = new MatTableDataSource(res);
      this.dataSource.sort = this.sort;
      this.dataSource.paginator = this.paginator;
    })
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
}
