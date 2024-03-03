import { Injectable } from "@angular/core";

@Injectable({providedIn:'root'})
export class apiService{
  getCurrencies(currency:string){
    return fetch(`../../../assets/api/all.${currency.toLocaleLowerCase()}.json`);
  }

  getTrendingCurrencies(currency:string){
    return fetch(`../../../assets/api/trend.${currency.toLocaleLowerCase()}.json`);
  }
}