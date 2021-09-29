import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { Card } from '../modules/card/models/card.model';
import * as GraphicsMethodActions from '../../graphics/store/graphics-method/graphics-method.actions';

import * as GraphicsMethodSelector from '../../graphics/store/graphics-method/graphics-method.selector';

import { pluck } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CardService {

  constructor(
    private readonly _store: Store<any>,
    private readonly _http: HttpClient) { }

  getRecommnendedCard(): Observable<any> {
   return this._http.get<any>('http://localhost:3000/recommended-graphics');
  }

  loadCardList() {
     this._http.get<any>('http://localhost:3000/graphics-cards').pipe(pluck('response')).subscribe(card => {
       this._setData(card);
    });
  }

  getGraphicsDetail(id:string) {
    return this._http.get<any>(`http://localhost:3000/graphics-cards/${id}`).pipe(pluck('response'));
  }

  getCardList() {
    return this._store.select(GraphicsMethodSelector.getGraphicsList);
  }

  private _setData(card:Card[]) {
    this._store.dispatch(GraphicsMethodActions.actionGraphicsList({data: card}));
  }


}
