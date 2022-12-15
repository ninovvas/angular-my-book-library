import { Injectable } from "@angular/core";
import { FormArray, FormControl, ValidationErrors, Validators } from "@angular/forms";
import { map, catchError, of } from "rxjs";
import { BookService } from "src/app/books/book.service";


export class BookValidators {

    static isbnFormat(control: FormControl): ValidationErrors | null {
        if (!control.value) { return null; }
    
        const numbers = control.value.replace(/-/g, '');
        const isbnPattern = /(^\d{10}$)|(^\d{13}$)/;
    
        if (isbnPattern.test(numbers)) {
          return null;
        } else {
          return {
            isbnFormat: { valid: false }
          };
        }
      }


      static atLeastOneAuthor(controlArray: FormArray): ValidationErrors | null {
        if (controlArray.controls.some(el => el.value)) {
          return null;
        } else {
          return {
            atLeastOneAuthor: { valid: false }
          };
        }
      }
}