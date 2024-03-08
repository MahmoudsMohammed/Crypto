import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";

@Injectable({providedIn:'root'})
export class apiService{
  selected = new BehaviorSubject<string>('EUR');
  
  getCurrencies(currency:string){
    return fetch(`../../../assets/api/all.${currency.toLocaleLowerCase()}.json`);
  }

  getTrendingCurrencies(){
    return fetch(`../../../assets/api/trend.currencies.json`);
  }
}