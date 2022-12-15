import { Component, EventEmitter, Input, OnChanges, OnInit, Output } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Book } from 'src/app/shared/interfaces/book';
import { Thumbnail } from 'src/app/shared/interfaces/thumbnail';
import { BookExistsValidator } from 'src/app/shared/validators/book-exist-validator';
import { BookValidators } from 'src/app/shared/validators/book.validators';

@Component({
  selector: 'app-book-form',
  templateUrl: './book-form.component.html',
  styleUrls: ['./book-form.component.scss']
})
export class BookFormComponent implements OnInit, OnChanges {

  bookForm: FormGroup|any;

  @Input() book?: Book;
  @Input() editing = false;
  @Output() submitBook = new EventEmitter<Book>();

  get authors(): FormArray {
    return this.bookForm.get('authors') as FormArray;
  }

  get thumbnails(): FormArray {
    return this.bookForm.get('thumbnails') as FormArray;
  }


  constructor(private fb: FormBuilder, private bookExistsValidator: BookExistsValidator) { }
  
  ngOnChanges(): void {
    this.initForm();
    this.setFormValues(this.book as Book);
  }

  private setFormValues(book: Book) {
    this.bookForm.patchValue(book);
    console.log('book', book);

    this.bookForm.setControl(
      'authors',
      this.buildAuthorsArray(book.authors)
    );

    this.bookForm.setControl(
      'thumbnails',
      this.buildThumbnailsArray(book.thumbnails as Thumbnail[])
    );

  }

  ngOnInit(): void {
    this.initForm();
  }

  private initForm() {
    if (this.bookForm) { return; }

    this.bookForm = this.fb.group({
      title: ['', 
        [Validators.required],[this.bookExistsValidator]
        //this.bookExistsValidator.validate
      ],
      subtitle: [''],
      isbn: ['',
        //{ value: '', disabled: this.editing },
        [
          Validators.required,
          BookValidators.isbnFormat
        ],
        //this.editing ? null : [this.bookExistsValidator]
      ],
      description: [''],
      authors: this.buildAuthorsArray(['']),
      thumbnails: this.buildThumbnailsArray([
        { title: '', url: ''}
      ]),
      rating: ['', [Validators.min(1), Validators.max(5)]],
      published: [],

      read: []
    });
  }

  private buildAuthorsArray(values: string[]): FormArray {
    return this.fb.array(values, Validators.required); //BookValidators.atLeastOneAuthor
  }

  private buildThumbnailsArray(values: Thumbnail[]): FormArray {
    return this.fb.array(
      values.map(t => this.fb.group(t))
    );
  }

  addAuthorControl() {
    this.authors.push(this.fb.control(''));
  }

  addThumbnailControl() {
    this.thumbnails.push(
      this.fb.group({ url: '', title: '' })
    );
  }

  submitForm() {

    if (this.bookForm.invalid) { return; }
    

    const formValue = this.bookForm.value;
    const authors = formValue.authors.filter(author  => author);
    const thumbnails = formValue.thumbnails.filter(thumbnail => thumbnail.url);

    const _id = this.editing ? this.book?._id : formValue._id;
    const isbn = formValue.isbn;
    let rating = formValue.rating;
    if (rating == undefined) {
      rating = 1;
    }
    let read = formValue.read
    if (read == null) {
      read = false;
    }

    //const isbn = this.editing ? this.book.isbn : formValue.isbn;
    
    //console.log('read', formValue.read);

    const newBook: Book = {
      ...formValue,
      _id,
      isbn,
      authors,
      thumbnails,
      rating,
      read
    };

    this.submitBook.emit(newBook);
    this.bookForm.reset();
  }



}
