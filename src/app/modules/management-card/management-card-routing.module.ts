import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GraphicsCardListContainerComponent } from './components/graphics-card-list-container/graphics-card-list-container.component';
import { GraphicsDetailComponent } from './components/graphics-detail/graphics-detail.component';

const routes: Routes = [
  {
    path: '',
    component: GraphicsCardListContainerComponent
  },
  {
    path: 'detail/:id',
    component: GraphicsDetailComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ManagementCardRoutingModule { }
