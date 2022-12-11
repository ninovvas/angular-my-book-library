import { Book, BookRaw } from "../interfaces/book";




export class BookFactory {

    static fromRaw(b: BookRaw): Book {
      return {
        ...b,
        published: new Date(b.published)
      };
    }
  }