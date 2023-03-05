import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { GetExchangeRateService } from 'src/app/services/get-exchange-rate.service';


@Component({
  selector: 'app-exchangerate-table',
  templateUrl: './exchangerate-table.component.html',
  styleUrls: ['./exchangerate-table.component.css']
})

export class ExchangerateTableComponent implements OnInit {
  myData: any;
  myData$: any;
  isAscending:boolean = false;

  constructor(public serviceData: GetExchangeRateService) {};

  ngOnInit() {
    this.getExchangeRates();
  }

  getExchangeRates() {
    this.serviceData.getExchangeRates().subscribe(data => data.forEach((element:any) => {
      this.myData = element.rates
    } ));
  }

  clickSort() {
    this.myData.sort((a: any, b: any) => {
      return a.code < b.code ? 1 : -1
    })
  }

  clickFilter() {
    console.log('filter')
  }
}
