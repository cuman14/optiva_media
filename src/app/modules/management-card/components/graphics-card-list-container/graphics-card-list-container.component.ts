import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { pluck } from 'rxjs/operators';
import { Card } from 'src/app/core/modules/card/models/card.model';
import { CardService } from 'src/app/core/services/card.service';

@Component({
  selector: 'app-graphics-card-list-container',
  templateUrl: './graphics-card-list-container.component.html',
  styleUrls: ['./graphics-card-list-container.component.scss']
})
export class GraphicsCardListContainerComponent implements OnInit {

  cards!:Card[];
  form!: FormGroup;
  cacheCards!:Card[];
  constructor(
    private readonly _router: Router,
    private readonly _fb: FormBuilder,
    private readonly _cardService: CardService) {
      this._initForm();
     }

  ngOnInit(): void {
    this._cardService.loadCardList();
    this._getCardRecommendations();
    this.form.valueChanges.subscribe( value => {
      if(value.filter) {
        this._filter(value.filter);
      } else {
        this.cards = this.cacheCards;

      }
    })
  }

  private _initForm() {
    this.form = this._fb.group( {
      filter: ['']
    });
  }

  private _getCardRecommendations() {
    this._cardService.getCardList().subscribe(card => {
      this.cards = card;
      this.cacheCards = card;
    })
  }
  getGraphic(event: Card) {
    this._router.navigate(['cards-list/detail/'+event.id]);
    console.log(event);
  }

  private _filter(filter: string) {
   this.cards = this.cards.filter(res =>  res.id.includes(filter)
   || res.name.includes(filter) || res.price.includes(filter))
    //console.log(cards)
   
  }
}
