import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { catchError, map, Observable, retry, throwError } from "rxjs";
import { environment } from "src/environments/environment";
import { BookFactory } from "../shared/books/book-factory";
import { Book, BookRaw } from "../shared/interfaces/book";

const apiURL = environment.apiURL;

@Injectable({
    providedIn: 'root'
  })

  export class BookService {

    constructor(private httpClient: HttpClient){}

    private errorHandler(error: HttpErrorResponse): Observable<any> {
        console.error('Error occurred!');
        return throwError(error);
      }

  
    getAll() {
      return this.httpClient.get<Book[]>(`/api/books`).pipe(
        catchError(this.errorHandler)
      );
    }

  
    
    create_book(book: Book){
      console.log(book);
      return this.httpClient.post<Book>('/api/books/', book).pipe(
          catchError(this.errorHandler)
      )
    }


    getDetailsBook(id: string| null): Observable<Book>{
      return this.httpClient.get<BookRaw>('/api/books/catalog/' + id).pipe(
        retry(3),
        map(book => BookFactory.fromRaw(book)),
        catchError(this.errorHandler)
      )
    }

    edit(book: Book, bookId: string){
      console.log(book);
      console.log(bookId);
      return this.httpClient.put<Book>('/api/books/edit/' + bookId, book)
      .pipe(
        catchError(this.errorHandler)
      );

    }

    checkBookExist(bookId: string){
      return this.httpClient.get<Book>('/api/books/catalog/' + bookId).pipe(
        catchError(this.errorHandler)
      )
    }

    remove(bookId: string){
      console.log('bookId' + bookId);
      return this.httpClient.delete<Book>('/api/books/delete/' + bookId).pipe(
        catchError(this.errorHandler)
      );
    }

    getAllBookSearch(searchTerm: string): Observable<Book[]> {
      return this.httpClient.get<BookRaw[]>('/api/books/search/' + searchTerm).pipe(
        retry(3),
        map(bRaw => bRaw.map(b => BookFactory.fromRaw(b))),
        catchError(this.errorHandler)
      )
    }

    
  
  } 