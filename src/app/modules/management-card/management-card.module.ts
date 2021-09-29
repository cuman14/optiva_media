import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ManagementCardRoutingModule } from './management-card-routing.module';
import { TableModule } from 'src/app/core/modules/table/table.module';
import { GraphicsCardListContainerComponent } from './components/graphics-card-list-container/graphics-card-list-container.component';
import { StoreModule } from '@ngrx/store';
import * as fromGraphicsMethod from '../../graphics/store/graphics-method/graphics-method.reducer';
import { GraphicsDetailComponent } from './components/graphics-detail/graphics-detail.component';
import { FilterModule } from 'src/app/core/modules/filter/filter.module';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    GraphicsCardListContainerComponent,
    GraphicsDetailComponent
  ],
  imports: [
    CommonModule,
    ManagementCardRoutingModule,
    ReactiveFormsModule,
    FilterModule,
    TableModule,
    StoreModule.forFeature(fromGraphicsMethod.graphicsMethodFeatureKey, fromGraphicsMethod.reducer),
  ]
})
export class ManagementCardModule { }
