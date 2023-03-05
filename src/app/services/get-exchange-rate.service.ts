import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GetExchangeRateService {

  constructor(private http: HttpClient) { }
  private exchangeRatesUrl = `https://api.nbp.pl/api/exchangerates/tables/A/?format=json`;
  getExchangeRates(): Observable<any> {
    return this.http.get<any>(this.exchangeRatesUrl)
  }
}
