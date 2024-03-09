import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class apiService {
  constructor(private http: HttpClient) {}

  getCurrencies(currency: string) {
    return fetch(
      `../../../assets/api/all.${currency.toLocaleLowerCase()}.json`
    );
  }

  getTrendingCurrencies() {
    return fetch(`../../../assets/api/trend.currencies.json`);
  }

  // currency details
  getCurrencyById(coinId: string) {
    return this.http.get<any>(
      `https://api.coingecko.com/api/v3/coins/${coinId}`
    );
  }

  // currency data for graph
  getGrpahicalCurrencyData(coinId: string, currency: string, days: number) {
    return this.http.get<any>(
      `https://api.coingecko.com/api/v3/coins/${coinId}/market_chart?vs_currency=${currency}&days=${days}`
    );
  }
}
