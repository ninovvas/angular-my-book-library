import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth/auth.service';
import { BookService } from 'src/app/books/book.service';
import { BookSearch } from 'src/app/shared/interfaces/api-book';
import { Book } from 'src/app/shared/interfaces/book';

@Component({
  selector: 'app-search-book-item',
  templateUrl: './search-book-item.component.html',
  styleUrls: ['./search-book-item.component.scss']
})
export class SearchBookItemComponent implements OnInit {

  @Input() book!: BookSearch;
  @Input() followNum?: Number;
  bookToAdd! : any;
  tagA: string = "</a>";

  get id(): string {
    return this.book.id;
  }
  
  get isLoggedIn() {
    return this.authService.isLoggedIn;
  }

  get user(){
    return this.authService.user
  }


  get thumbnail(): string {
    return this.book.volumeInfo.imageLinks
      ? this.book.volumeInfo.imageLinks.smallThumbnail.replace("http:", "")
      : "";

  }

  constructor(private bookService: BookService, private router: Router, private authService: AuthService) { }

  ngOnInit(): void {
  }

  addBook(book: any){
    console.log(book);
    this.bookToAdd = {
      isbn: book.volumeInfo?.industryIdentifiers[0]['identifier'],
      title: book.volumeInfo.title,
      authors: book.volumeInfo.authors,
      published: new Date(book.volumeInfo.publishedDate),
      subtitle: book.volumeInfo?.subtitle,
      thumbnails: [{title: book.volumeInfo.title, 'url': book.volumeInfo?.imageLinks?.smallThumbnail}],
      description: book.volumeInfo?.description,
      rating: 1,
      read: false,


    }


    this.bookService.create_book(this.bookToAdd).subscribe(() => {
      
      this.router.navigate(['/book/catalog'])
    }

  )}

}
