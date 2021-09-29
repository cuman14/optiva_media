import { Component } from '@angular/core';
import { MENU } from './core/constants/menu.constants';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  title = 'gallery-graphics';
  menu = MENU

}
