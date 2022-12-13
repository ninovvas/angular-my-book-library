export interface GoogleBooksApiInterface {
    kind: string;
    totalItems: number;
    items: BookSearch[];
  }

  
  export interface BookSearch {
    id: string;
    rating: number,
    read: Boolean,
    volumeInfo: {
      title: string,
      subtitle: string,
      authors: string[],
      publisher: string,
      publishDate: string,
      description: string,
      averageRating: number,
      ratingsCount: number,
      infoLink: string,
      imageLinks: {
        thumbnail: string,
        smallThumbnail: string,
      };
    };
  }