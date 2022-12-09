import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BookService } from '../book.service';
import { Book } from '../../shared/interfaces/book';

@Component({
  selector: 'app-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.scss']
})
export class BookDetailsComponent implements OnInit {
  book?: Book;

  constructor(private bookService: BookService, private router: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    //console.log('ISBN: ', this.activatedRoute.snapshot.data);
    
    const params = this.activatedRoute.snapshot.paramMap;
    console.log('ISBN: ', this.activatedRoute.snapshot.paramMap);
    this.bookService.getDetailsBook(params.get('id'))
     .subscribe(b => this.book = b);
  }

  getRating(num: number|undefined) {
    return new Array(num);
  }

  removeBook(){

  }

  // removeBook() {
  //   if (confirm('Are you sure you really want to delete the book?')) {
  //     this.bookService.remove(this.book.isbn)
  //       .subscribe(res => this.router.navigate(['../'], { relativeTo: this.route }));
  //   }
  // }

}
