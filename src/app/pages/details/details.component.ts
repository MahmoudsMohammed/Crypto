import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { apiService } from '../../share/services/api.services';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss'],
  standalone: true,
})
export class DetailsComponent implements OnInit {
  constructor(
    private activeRouter: ActivatedRoute,
    private apiServ: apiService
  ) {}

  ngOnInit() {
    // this.apiServ
    //   .getCurrencyById(this.activeRouter.snapshot.params['id'])
    //   .subscribe((res) => {
    //     console.log(res);
    //   });
  }
}
