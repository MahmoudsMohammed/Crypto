import { Component } from "@angular/core";
import { header } from "../../core/components/header/header.component";

@Component({
  selector:'app-home',
  templateUrl:'./home.component.html',
  styleUrl:'./home.component.scss',
  imports:[header],
  standalone:true,
})
export class home{}