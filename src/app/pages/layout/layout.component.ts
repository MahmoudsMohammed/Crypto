import { Component, OnInit } from '@angular/core';
import { header } from '../../core/components/header/header.component';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css'],
  standalone: true,
  imports: [header,RouterOutlet],
})
export class LayoutComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
