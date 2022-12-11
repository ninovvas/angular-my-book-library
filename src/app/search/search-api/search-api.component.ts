import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { BookSearch } from 'src/app/shared/interfaces/api-book';
import { SearchApiService } from '../search-api.service';

@Component({
  selector: 'app-search-api',
  templateUrl: './search-api.component.html',
  styleUrls: ['./search-api.component.scss']
})
export class SearchApiComponent implements OnInit {


  books!: Observable<BookSearch[]>;
  isLoading = false;

  constructor(private bookApiService: SearchApiService) { }

  ngOnInit(): void {
  }

  queryHandler(event: Event) {
    const bookTitle = (event.target as HTMLInputElement)?.value;
    if (bookTitle.length > 4) {
      this.books = this.bookApiService.searchBook(bookTitle);
      this.isLoading = true;
      console.log('books', this.books);
    }

  }

}
