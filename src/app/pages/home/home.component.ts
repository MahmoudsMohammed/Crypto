import { Component } from "@angular/core";
import { header } from "../../core/components/header/header.component";
import { BannerComponent } from "./banner/banner.component";
import { TableComponent } from "./table/table.component";

@Component({
  selector:'app-home',
  templateUrl:'./home.component.html',
  styleUrl:'./home.component.scss',
  imports:[header,BannerComponent,TableComponent],
  standalone:true,
})
export class home{}