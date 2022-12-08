import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { catchError, Observable, throwError } from "rxjs";
import { environment } from "src/environments/environment";
import { Book } from "../shared/interfaces/book";

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

        
    // getAll(): Observable<Book[]> {
    //   return this.http.get<BookRaw[]>(`${this.api}/books`)
    //     .pipe(
    //       retry(3),
    //       map(booksRaw =>
    //         booksRaw.map(b => BookFactory.fromRaw(b)),
    //       ),
    //       catchError(this.errorHandler)
    //     );
    // }

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

    //   createTheme(name: string, text: string) {
    //     return this.http.post<ITheme>('/api/themes/', { themeName: name, postText: text });
    //   }

  } 