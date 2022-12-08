import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Book } from 'src/app/shared/interfaces/book';
import { BookService } from '../book.service';

@Component({
  selector: 'app-create-book',
  templateUrl: './create-book.component.html',
  styleUrls: ['./create-book.component.scss']
})
export class CreateBookComponent implements OnInit {

  constructor(private bookService: BookService,  private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
  }

  createBook(book: Book) {
    this.bookService.create_book(book).subscribe(() => {
    //   this.router.navigate(['../..', 'books'], { relativeTo: this.route });
    //
    this.router.navigate(['/'])
  });
  }
}
