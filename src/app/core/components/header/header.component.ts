import { Component} from "@angular/core";
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatSelectModule} from '@angular/material/select';
import { apiService } from "../../../share/services/api.services";

@Component({
  selector:'app-header',
  templateUrl:'./header.component.html',
  styleUrl:'./header.component.scss',
  imports:[MatToolbarModule,MatSelectModule],
  standalone:true,
})
export class header{
  constructor(private apiServ:apiService){};

  currencies = [
    {value: 'USD', viewValue: 'American Dollar'},
    {value: 'EUR', viewValue: 'European Euro'},
  ];

  onCahnges(e:string){
    this.apiServ.selected.next(e);
  }
}