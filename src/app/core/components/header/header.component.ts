import { Component } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSelectModule } from '@angular/material/select';
import { communicateService } from '../../../share/services/communicate.services';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
  imports: [MatToolbarModule, MatSelectModule, RouterLink],
  standalone: true,
})
export class header {
  constructor(private communicateServ: communicateService) {}

  currencies = [
    { value: 'USD', viewValue: 'American Dollar' },
    { value: 'EUR', viewValue: 'European Euro' },
  ];

  onCahnges(e: string) {
    this.communicateServ.selected.next(e);
  }
}
