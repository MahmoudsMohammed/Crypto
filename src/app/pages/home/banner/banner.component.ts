import { AfterViewInit, Component, OnInit } from '@angular/core';
import Swiper from 'swiper';
import { apiService } from '../../../share/services/api.services';
import { currency } from '../../../share/models/currency.interface';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-banner',
  standalone: true,
  imports: [NgFor],
  templateUrl: './banner.component.html',
  styleUrl: './banner.component.scss'
})
export class BannerComponent implements AfterViewInit,OnInit {
  constructor(private apiServ:apiService){};
  trendCurrencies:currency[]=[];

  ngOnInit(): void {
    this.apiServ.getTrendingCurrencies("Eur").then(res=>res.json()).then(res=>console.log(res))
  }

  ngAfterViewInit(): void {
    const swipe = new Swiper('.swiper', {
      speed: 1500,
      autoplay: {
        delay: 2500,
        disableOnInteraction: false,
      },
      loop: true,
    });
    
  }
}
