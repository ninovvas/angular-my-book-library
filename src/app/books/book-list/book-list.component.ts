import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Book } from 'src/app/shared/interfaces/book';
import { BookService } from '../book.service';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.scss']
})
export class BookListComponent implements OnInit {

  //books$: Observable<Book[]>;
  books: Book[] | null = null;

  constructor(private bookService: BookService) { }

  ngOnInit(): void {
    this.bookService.getAll().subscribe({
      next: (value) => {
          this.books = value;
      },
      error: (err) => {
        console.log(err);
        //this.books = value;
      }
    });
  }

}
