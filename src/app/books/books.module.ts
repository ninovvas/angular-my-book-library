import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookFormComponent } from './book-form/book-form.component';
import { CreateBookComponent } from './create-book/create-book.component';
import { FormMessagesComponent } from './form-messages/form-messages.component';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { BookRoutingModule } from './book.routing.module';
import { BookListItemComponent } from './book-list-item/book-list-item.component';
import { SharedModule } from '../shared/shared.module';
import { BookListComponent } from './book-list/book-list.component';
import { BookDetailsComponent } from './book-details/book-details.component';
import { EditBookComponent } from './edit-book/edit-book.component';



@NgModule({
  declarations: [
    BookFormComponent,
    CreateBookComponent,
    FormMessagesComponent,
    BookListItemComponent,
    BookListComponent,
    BookDetailsComponent,
    EditBookComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule,
    BookRoutingModule,
    SharedModule
  ]
})
export class BooksModule { }
