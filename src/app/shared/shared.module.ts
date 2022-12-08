import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoaderComponent } from './loader/loader.component';
import { RouterModule } from '@angular/router';
import { IsbnPipe } from './isbn.pipe';



@NgModule({
  declarations: [
    LoaderComponent,
    IsbnPipe
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    LoaderComponent,
    IsbnPipe
  ]
})
export class SharedModule { }
