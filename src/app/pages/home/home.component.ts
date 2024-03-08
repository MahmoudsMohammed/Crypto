import { Component } from "@angular/core";
import { BannerComponent } from "./banner/banner.component";
import { CurrenciesTableComponent } from "./currencies-table/currencies-table.component";


@Component({
  selector:'app-home',
  templateUrl:'./home.component.html',
  styleUrl:'./home.component.scss',
  imports:[BannerComponent,CurrenciesTableComponent],
  standalone:true,
})
export class home{}