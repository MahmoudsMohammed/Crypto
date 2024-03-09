import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { apiService } from '../../share/services/api.services';
import { CurrencyPipe } from '@angular/common';
import { communicateService } from '../../share/services/communicate.services';
import { ChartConfiguration, ChartType } from 'chart.js';
import { BaseChartDirective } from 'ng2-charts';
import { Chart, registerables } from 'chart.js';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss'],
  standalone: true,
  imports: [CurrencyPipe, BaseChartDirective],
})
export class DetailsComponent implements OnInit {
  data;
  coinId: string;
  selectedCurrency: string;
  daysRange: number = 1;
  lineChartData: ChartConfiguration['data'] = {
    datasets: [
      {
        data: [],
        label: `Price Trends`,
        backgroundColor: 'rgba(148,159,177,0.2)',
        borderColor: '#46518F',
        pointBackgroundColor: '#46518F',
        pointBorderColor: '#46518F',
        pointHoverBackgroundColor: '#46518F',
        pointHoverBorderColor: '#46518F',
      },
    ],
    labels: [],
  };
  lineChartOptions: ChartConfiguration['options'] = {
    elements: {
      point: {
        radius: 1,
      },
    },

    plugins: {
      legend: { display: true },
    },
  };
  lineChartType: ChartType = 'line';
  @ViewChild(BaseChartDirective) myLineChart!: BaseChartDirective;

  constructor(
    private activeRouter: ActivatedRoute,
    private apiServ: apiService,
    private communicateSer: communicateService
  ) {
    Chart.register(...registerables);
  }

  ngOnInit() {
    this.coinId = this.activeRouter.snapshot.params['id'];
    // get currency details data
    this.apiServ.getCurrencyById(this.coinId).subscribe((res) => {
      this.data = res;
    });
    // get the using currency
    this.communicateSer.selected.subscribe((res) => {
      this.selectedCurrency = res;
    });
    this.getGraphData(this.daysRange);
  }

  getGraphData(days) {
    setTimeout(() => {
      this.myLineChart.update();
    }, 200);
    this.daysRange = days;
    this.apiServ
      .getGrpahicalCurrencyData(
        this.coinId,
        this.selectedCurrency,
        this.daysRange
      )
      .subscribe((res) => {
        this.lineChartData.datasets[0].data = res.prices.map((e) => e[1]);
        this.lineChartData.labels = res.prices.map((e) => {
          let date = new Date(e[0]);
          let time =
            date.getHours() > 12
              ? `${date.getHours() - 12} : ${date.getMinutes()} PM`
              : `${date.getHours()} : ${date.getMinutes()} AM`;
          return this.daysRange ? time : date.toLocaleDateString();
        });
      });
  }
}
