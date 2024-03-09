import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { apiService } from '../../share/services/api.services';
import { CurrencyPipe } from '@angular/common';
import { communicateService } from '../../share/services/communicate.services';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss'],
  standalone: true,
  imports: [CurrencyPipe],
})
export class DetailsComponent implements OnInit {
  data;
  selectedCurrency: string;
  constructor(
    private activeRouter: ActivatedRoute,
    private apiServ: apiService,
    private communicateSer: communicateService
  ) {}

  ngOnInit() {
    // get currency details data
    this.apiServ
      .getCurrencyById(this.activeRouter.snapshot.params['id'])
      .subscribe((res) => {
        this.data = res;
      });
    // get the using currency
    this.communicateSer.selected.subscribe((res) => {
      this.selectedCurrency = res;
    });
  }
}
