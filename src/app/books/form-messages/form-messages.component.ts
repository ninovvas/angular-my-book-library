import { Component, Input, OnInit } from '@angular/core';
import { AbstractControl } from '@angular/forms';
import { Book } from 'src/app/shared/interfaces/book';

@Component({
  selector: 'app-form-messages',
  templateUrl: './form-messages.component.html',
  styleUrls: ['./form-messages.component.scss']
})
export class FormMessagesComponent implements OnInit {

  @Input() control: AbstractControl | undefined;
  @Input() controlName: keyof Book = 'title';
  //@Input() controlName: string = 'title';
 
  private allMessages = {
    title: {
      required: 'The book title is required!'
    },
    isbn: {
      required: 'The ISBN is required!',
      isbnFormat: 'The ISBN number must contain 10 or 13 numbers!',
      isbnExists: ' The ISBN number exist already!'
    },
    published: {
      required: 'The published date is required!'
    },
    authors: {
      atLeastOneAuthor: 'At least one author must be specified.'
    },
    subtitle: {},
    rating: {
      min: "The rating number should be a positive number! Please enter a number between 1 and 5!",
      max: "The max rating number is 5. Please enter a number between 1 and 5!"
    },
    description: {},
    thumbnails: {},
    read: {}
  };
  

 

  constructor () { 

  }

  ngOnInit(): void {
  }

  errorsForControl(): string[] {
   const messages = this.allMessages[this.controlName];
   //console.log(message);
  //const message = this.allMessages[this.controlName as keyof Book];
   
  if (!this.control || !messages || !this.control.errors || !this.control.dirty) { return []; }
  console.log(this.control.errors);
  return Object.keys(this.control.errors).map(err => messages[err]);
  }

}
