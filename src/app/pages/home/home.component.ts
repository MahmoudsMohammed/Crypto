import { Component } from "@angular/core";
import { header } from "../../core/components/header/header.component";
import { BannerComponent } from "./banner/banner.component";
import { CurrenciesTableComponent } from "./currencies-table/currencies-table.component";


@Component({
  selector:'app-home',
  templateUrl:'./home.component.html',
  styleUrl:'./home.component.scss',
  imports:[header,BannerComponent,CurrenciesTableComponent],
  standalone:true,
})
export class home{}