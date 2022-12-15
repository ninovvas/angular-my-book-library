import { Injectable } from "@angular/core";
import { AsyncValidator, FormControl, ValidationErrors } from "@angular/forms";
import { catchError, map, Observable, of } from "rxjs";
import { BookService } from "src/app/books/book.service";

@Injectable({
    providedIn: 'root'
  })
  export class BookExistsValidator implements AsyncValidator {
  
    constructor(private bookService: BookService) { }
  
    validate(
      control: FormControl
    ): Observable<ValidationErrors | null> {
      return this.bookService.checkBookExist(control.value).pipe(
        map(exists => (exists.length === 0) ? null : {
            bookExists: { valid: false }
        }),
        catchError(() => of(null))
      );
    }
  }