import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { currency } from "../models/currency.interface";

@Injectable({providedIn:'root'})
export class apiService{
  constructor(private http:HttpClient){}
  getCurrencies(currency:string){
    return fetch(`../../../assets/api/all.${currency.toLocaleLowerCase()}.json`);
  }

  getTrendingCurrencies(currency:string){
    return fetch(`../../../assets/api/trend.${currency.toLocaleLowerCase()}.json`);
  }
}