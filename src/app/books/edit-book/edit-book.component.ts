import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { map, switchMap } from 'rxjs';
import { Book } from 'src/app/shared/interfaces/book';
import { BookService } from '../book.service';

@Component({
  selector: 'app-edit-book',
  templateUrl: './edit-book.component.html',
  styleUrls: ['./edit-book.component.scss']
})
export class EditBookComponent implements OnInit {

  book?: Book;

  constructor(
    private bookService: BookService, 
    private activatedRoute: ActivatedRoute, 
    private router: Router) { }

  ngOnInit(): void {
    this.activatedRoute.paramMap.pipe(
      map(params => params.get('id') as any),
      switchMap((id: string) => this.bookService.getDetailsBook(id))
    )
    .subscribe(b => this.book = b);
  }

  editBook(book: Book){
    this.bookService.edit(book, book._id).subscribe(() => {
      this.router.navigate(['book/catalog/', book._id]);
    })
  }

 

}
