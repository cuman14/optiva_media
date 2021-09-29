import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableComponent } from './components/table/table.component';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { NgxSpinnerModule } from 'ngx-spinner';
import { BrowserModule } from '@angular/platform-browser';



@NgModule({
  declarations: [TableComponent],
  imports: [
    CommonModule,
    InfiniteScrollModule,
    NgxSpinnerModule
  ],
  exports: [TableComponent]
})
export class TableModule { }
