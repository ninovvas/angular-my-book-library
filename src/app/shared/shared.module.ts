import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoaderComponent } from './loader/loader.component';
import { RouterModule } from '@angular/router';
import { IsbnPipe } from './isbn.pipe';
import { DelayDirective } from './directive/delay.directive';



@NgModule({
  declarations: [
    LoaderComponent,
    IsbnPipe,
    DelayDirective
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    LoaderComponent,
    IsbnPipe,
    DelayDirective
  ]
})
export class SharedModule { }
