import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchContentComponent } from './search-content/search-content.component';
import { RouterModule } from '@angular/router';
import { SearchApiComponent } from './search-api/search-api.component';
import { SearchBookItemComponent } from './search-book-item/search-book-item.component';



@NgModule({
  declarations: [
    SearchContentComponent,
    SearchApiComponent,
    SearchBookItemComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    SearchContentComponent,
    SearchApiComponent
  ]
})
export class SearchModule { }
