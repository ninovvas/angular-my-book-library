import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from './auth/page-not-found/page-not-found.component';
import { HomeComponent } from './core/home/home.component';

const routes: Routes = [
{
  path: '',
  pathMatch: 'full',
  component: HomeComponent,
},
{
  path: 'not-found',
  component: PageNotFoundComponent
},

{
  path: '**',
  redirectTo: '/not-found'
}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
