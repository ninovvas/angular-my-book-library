import { NgClass } from '@angular/common';
import { Component, Input, OnChanges, OnDestroy, OnInit, SimpleChanges, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { debounceTime, distinctUntilChanged, filter, Observable, Subject, switchMap, tap } from 'rxjs';
import { BookService } from 'src/app/books/book.service';
import { Book } from 'src/app/shared/interfaces/book';

@Component({
  selector: 'app-search-content',
  templateUrl: './search-content.component.html',
  styleUrls: ['./search-content.component.scss']
})
export class SearchContentComponent{

  keySearch$ = new Subject<string>();
  isLoading = false;
  foundBooks: Book[] = [];
  isVisible = true;
  //@ViewChild('name') input?; 

  constructor(private bookService: BookService, private router: Router) {

    
   }

 

  ngOnInit() {
    
    this.keySearch$.pipe(
      filter(term => term.length >= 3),
      debounceTime(500),
      distinctUntilChanged(),
      tap(() => {this.isLoading = true;}),
      switchMap((searchTerm) => this.bookService.getAllBookSearch(searchTerm)),
      tap(() => {this.isLoading = false; this.isVisible = true;}),
    )
    .subscribe(books => this.foundBooks = books);

  }

  // getValue(event: Event) {
  //   if((event.target as HTMLInputElement).value){
  //     return this.keySearch$.next(((event.target as HTMLInputElement).value));
  //   }
   
  // }

  onSearchType(event: Event) {
    this.keySearch$.next(((event.target as HTMLInputElement).value));
  }

  manageClick(bookId: string){
    this.isVisible = false;
    this.ngOnInit();
    //Bug in angular
    this.router.navigate(['book', 'catalog']).then(() =>
    this.router.navigate(['book', 'catalog', bookId])
    );
    
  }


}
