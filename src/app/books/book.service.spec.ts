import { TestBed } from "@angular/core/testing";
import { BookService } from "./book.service";

import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { Book, BookRaw } from "../shared/interfaces/book";
import { IUser } from "../shared/interfaces/user";

fdescribe('BookStoreService', () => {
    let httpMock: HttpTestingController;
    let service: BookService;


    // _id: string,
    // isbn: string,
    // title: string,
    // authors: string[],
    // published: string,
    // subtitle?: string,
    // rating?: number,
    // thumbnails?: Thumbnail[],
    // userId: IUser,
    // description?: string,
    // read?: Boolean,
    // __v: number,

    const user: IUser = {
        books: [],
        _id: "1",
        email: "peter@abv.bg",
        username: "Peter",
        password: "123456",
        first_name: "Peter",
        last_name: "Iliev",
        address: "Levski",
        created_at:  '2022-03-01T00:00:00.000Z',
        updatedAt: '2022-04-01T00:00:00.000Z',
        __v: 1,
    }
  
    const bookRaw: BookRaw[] = [{
        _id: "1",
        isbn: '1137463849',
        title: 'Book 1',
        authors: [],
        published: '2022-12-01T00:00:00.000Z',
        subtitle: 'Subtitle Book 1',
        rating: 2,
        userId: user,
        __v: 1,
      },
      {
        _id: "1",
        isbn: '74638458479',
        title: 'Book 2',
        authors: [],
        published: '2019-01-01T00:00:00.000Z',
        subtitle: 'Subtitle Book 2',
        rating: 3,
        userId: user,
        __v: 1,
      }
    ];
  
    beforeEach(() => {
      TestBed.configureTestingModule({
        imports: [HttpClientTestingModule],
        providers: [BookService]
      });
  
      httpMock = TestBed.get(HttpTestingController);
      service = TestBed.get(BookService);
    });
  
    it('should GET a list of all books', () => {
  
      let receivedBooks!: Book[];
      service.getAll().subscribe(books => receivedBooks = books); 
  
      const req = httpMock.expectOne(
        'http://localhost:4200/book/catalog');
      expect(req.request.method).toEqual('GET'); 
  
      // flush -- now reduce the books
      req.flush(bookRaw); 
  
      expect(receivedBooks.length).toBe(2);
      expect(receivedBooks[0].isbn).toBe('1137463849');
      expect(receivedBooks[1].isbn).toBe('74638458479');
  
      expect(receivedBooks[0].published).toEqual(new Date('2022-12-01T00:00:00.000Z'));
    });
  
    afterEach(() => {
      // check if a request is available
      httpMock.verify(); 
    });
  });