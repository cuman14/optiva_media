import { createFeatureSelector, createSelector } from '@ngrx/store';
import { graphicsMethodFeatureKey, State } from './graphics-method.reducer';

export const getGraphicsMethoddState = createFeatureSelector<State>(
    graphicsMethodFeatureKey
  )
export const getGraphicsList = createSelector(
    getGraphicsMethoddState,
    (state: State) => state.graphicsList
  );