import { state } from '@angular/animations';
import { Action, createReducer, on } from '@ngrx/store';
import { Card } from 'src/app/core/modules/card/models/card.model';
import * as GraphicsMethodActions from './graphics-method.actions';

export const graphicsMethodFeatureKey = 'graphicsMethod';

export interface State {

  graphicsList: Card[]
}

export const initialState: State = {
  graphicsList : []
};


export const reducer = createReducer(
  initialState,

  on(GraphicsMethodActions.actionGraphicsList, (state, action) => {
   return { 
     ...state,
    graphicsList : [...action.data]
  }
  }),

);

