import { Routes, RouterModule } from "@angular/router";
import { BookListComponent } from "./book-list/book-list.component";
import { CreateBookComponent } from "./create-book/create-book.component";

const routes: Routes = [

    {
        path: 'book',
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
           
            
        ]
        
    }

]

export const BookRoutingModule = RouterModule.forChild(routes);