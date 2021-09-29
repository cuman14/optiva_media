import { createAction, props } from '@ngrx/store';
import { Card } from 'src/app/core/modules/card/models/card.model';

export const actionGraphicsMethods = createAction(
  '[GraphicsMethod] Action GraphicsMethods'
);

export const actionGraphicsList = createAction(
  '[GraphicsMethod] Action GraphicsMethods Get List',
  props<{ data: Card[] }>()
);

