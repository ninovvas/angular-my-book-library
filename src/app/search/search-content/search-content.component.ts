import { NgClass } from '@angular/common';
import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { debounceTime, distinctUntilChanged, filter, Observable, Subject, switchMap, tap } from 'rxjs';
import { BookService } from 'src/app/books/book.service';
import { Book } from 'src/app/shared/interfaces/book';

@Component({
  selector: 'app-search-content',
  templateUrl: './search-content.component.html',
  styleUrls: ['./search-content.component.scss']
})
export class SearchContentComponent {


  // keySearch$ = new Subject<string>();
  // isLoading = false;
  // foundBooks: Book[] = [];

  // constructor(private bookService: BookService) { }
 

  // ngOnInit() {
  //   this.keySearch$.pipe(
  //     filter(term => term.length >= 3),
  //     debounceTime(500),
  //     distinctUntilChanged(),
  //     tap(() => this.isLoading = true),
  //     switchMap(searchTerm => this.bookService.getAllBookSearch(searchTerm)),
  //     tap(() => this.isLoading = false)
  //   )
  //   .subscribe(books => this.foundBooks = books);

  // }

  // getValue(event: Event) {
  //   if((event.target as HTMLInputElement).value){
  //     return this.keySearch$.next(((event.target as HTMLInputElement).value));
  //   }
   
  // }

  input$ = new Subject<string>();
  isLoading = false;

  results$: Observable<Book[]>;

  constructor(private service: BookService) {
    this.results$ = this.input$.pipe(
      filter(term => term.length >= 3),
      debounceTime(500),
      distinctUntilChanged(),
      tap(() => this.isLoading = true),
      switchMap(term => this.service.getAllBookSearch(term)),
      tap(() => this.isLoading = false)
    );
  }



}
