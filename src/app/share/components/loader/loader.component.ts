import { Component , CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";

@Component({
  selector:'app-loader',
  templateUrl:'./loader.component.html',
  styleUrl:'./loader.component.scss',
  standalone:true,
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class loaderComponent{}