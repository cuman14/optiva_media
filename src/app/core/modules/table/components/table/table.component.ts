import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { of } from 'rxjs';
import { Card } from '../../../card/models/card.model';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {
  notEmptyPost = true;
  notscrolly = true;

  @Input() cards!: Card[];

  @Output() sendItem = new EventEmitter<Card>();
  constructor(private spinner: NgxSpinnerService) { }

  ngOnInit(): void {

  }

  sendElement(card:Card)  {
    this.sendItem.emit(card);
  }



onScroll() {
  console.log('scroll');
 if (this.notscrolly && this.notEmptyPost) {
  this.spinner.show();
  this.notscrolly = false;
  this._nextValue();

 }
}

private _nextValue() {
  const newCards = [ this.cards[0],this.cards[4],this.cards[6] ];
  of(newCards).subscribe(res => {
    setTimeout(() => {
      this.cards = this.cards.concat(newCards);
      this.notscrolly = true;
      this.notEmptyPost =  false;
      this.spinner.hide();
    }, 2000);
 
  });
}
  

}
