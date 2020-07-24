import { Component, OnInit } from '@angular/core';
import * as Stickyfill from '../polyfills/stickyfill';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  ngOnInit(): void {
    // const elements = document.querySelectorAll('.sticky');
    // Stickyfill.add(elements);
  }
}
