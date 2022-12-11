import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { GOOGLE_API_URL } from '../shared/constants';
import { BookSearch, GoogleBooksApiInterface } from '../shared/interfaces/api-book';


@Injectable({
  providedIn: 'root'
})
export class SearchApiService {
  private GOOGLE_API_URL = GOOGLE_API_URL;

  constructor(private httpClient: HttpClient) { }

  searchBook(bookTitle: string): Observable<BookSearch[]> {
    return this.httpClient.get<GoogleBooksApiInterface>(`${this.GOOGLE_API_URL}?q=${bookTitle}`).pipe(
      map((data: GoogleBooksApiInterface) => data.items)
    )
  }
}
