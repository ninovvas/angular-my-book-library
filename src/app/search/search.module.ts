import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchContentComponent } from './search-content/search-content.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    SearchContentComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    SearchContentComponent,
  ]
})
export class SearchModule { }
