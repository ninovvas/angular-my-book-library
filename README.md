
# MyBookLibrary

The target of the project is to create an application using Angular for the ***client-side***. 
For the backend has been created a remote service (https://github.com/ninovvas/backend-expressjs-my-book-library) with [ExpressJS](https://expressjs.com/).

MyBookLibrary is a SPA that manage my books. 

The application contains following functionality:
- Home page (public area)
- Registration (Create a new user)
- LogIn
- Logout
- Create new book to the library
- Edit the book
- Delete the book
- Search a book in internet using the Google API (https://www.googleapis.com/books/v1/volumes) and add it to the library
- Search for the books in the library for the current user
- Set a rating for each added book
- Set the status if the book is already read
- Error Handling and data validation for all forms
- Documentation has been created with [Compodoc](https://compodoc.app/)

## Used UI Libraries

For the fronted has been used the UI libraries [Semantic UI](https://semantic-ui.com/) and [Angular Material](https://material.angular.io/)

## Angular Version

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 14.2.8.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
