import {
  Component,
  CUSTOM_ELEMENTS_SCHEMA,
  inject,
  OnInit,
} from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrl: './loader.component.scss',
  standalone: true,
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class loaderComponent implements OnInit {
  constructor(private route: Router) {}

  ngOnInit(): void {
    setTimeout(() => {
      this.route.navigate(['layout', 'home']);
    }, 3000);
  }
}
