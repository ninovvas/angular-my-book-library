import { Routes, RouterModule } from "@angular/router";
import { AuthActivate } from "../shared/gards/auth.activate";
import { BookDetailsComponent } from "./book-details/book-details.component";
import { BookListComponent } from "./book-list/book-list.component";
import { CreateBookComponent } from "./create-book/create-book.component";
import { EditBookComponent } from "./edit-book/edit-book.component";

const routes: Routes = [

    {
        path: 'book',
        //canActivate: [AuthActivate],
        children: [
            {
                path: 'create',
                component: CreateBookComponent,
                data : {
                    title: 'Create Book',
                    loginRequired: true
                }

            },
            {
                path: 'catalog',
                component: BookListComponent,
                data : {
                    title: 'Catalog Book',
                    loginRequired: true
                }

            },

            {
                path: 'catalog/:id',
                component: BookDetailsComponent,
                data : {
                    title: 'Details Book',
                    loginRequired: true
                }

            },
            {
                path: 'edit/:id',
                component: EditBookComponent,
                data : {
                    title: 'Edit Book',
                    loginRequired: true
                }

            },
           
            
        ]
        
    }

]

export const BookRoutingModule = RouterModule.forChild(routes);