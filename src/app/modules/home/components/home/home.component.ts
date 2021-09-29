import { Component, OnInit } from '@angular/core';
import { Card } from 'src/app/core/modules/card/models/card.model';
import { CardService } from 'src/app/core/services/card.service';
import { pluck } from 'rxjs/operators';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  cards!:Card[];
  constructor(private readonly _cardService: CardService) { }

  ngOnInit(): void {
    this._getCardRecommendations();
  }

  private _getCardRecommendations() {
    this._cardService.getRecommnendedCard().pipe(pluck('response')).subscribe(card => {
      this.cards = card;
    })
  }

}
