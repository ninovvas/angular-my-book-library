import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { RouterModule } from '@angular/router';
import { SearchModule } from '../search/search.module';




@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    HomeComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    SearchModule,
    
  ],
  exports : [
    HeaderComponent,
    FooterComponent,
    HomeComponent
  ]
})
export class CoreModule { }
