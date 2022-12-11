import { Thumbnail } from "./thumbnail";
import { IUser } from "./user";

export interface Book {
    _id: string;
    isbn: string;
    title: string;
    authors: string[];
    published: Date;
    subtitle?: string;
    rating?: number;
    thumbnails?: Thumbnail[];
    userId: IUser;
    description?: string;
    __v: number;
  }

  export interface BookSearch {
    id: string;
    volumeInfo: {
      title: string;
      subtitle: string;
      authors: string[];
      publisher: string;
      publishDate: string;
      description: string;
      averageRating: number;
      ratingsCount: number;
      imageLinks: {
        thumbnail: string;
        smallThumbnail: string;
      };
    };
  }

  export interface BookRaw {
    _id: string;
    isbn: string;
    title: string;
    authors: string[];
    published: string;
    subtitle?: string;
    rating?: number;
    thumbnails?: Thumbnail[];
    userId: IUser;
    description?: string;
    __v: number;
  }