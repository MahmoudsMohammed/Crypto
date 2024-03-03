import { Component } from "@angular/core";
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatSelectModule} from '@angular/material/select';

@Component({
  selector:'app-header',
  templateUrl:'./header.component.html',
  styleUrl:'./header.component.scss',
  imports:[MatToolbarModule,MatSelectModule],
  standalone:true,
})
export class header{
  selectedValue: string;

  currencies = [
    {value: 'SAR', viewValue: 'Saudi Arabia Riyal'},
    {value: 'USD', viewValue: 'American Dollar'},
    {value: 'EUR', viewValue: 'European Euro'},
  ];
}