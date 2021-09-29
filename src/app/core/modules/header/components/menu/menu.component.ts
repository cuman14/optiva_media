import { Component, Input, OnInit } from '@angular/core';
import { Menu } from '../../models/menu.model';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
  @Input()
  get menu() : Menu[] {
    return this._menu;
  }
  set menu(value: Menu[]) {
    this._menu = value;
  }
  private _menu!: Menu[];
  

  constructor() { }

  ngOnInit(): void {
  }

}
