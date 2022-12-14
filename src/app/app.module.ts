import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { AuthRoutingModule } from './auth/auth-routing.module';
import { AuthModule } from './auth/auth.module';
import { CoreModule } from './core/core.module';
import { SharedModule } from './shared/shared.module';
import { appInterceptorProvider } from './app.interceptor';
import { AuthenticateComponent } from './authenticate/authenticate.component';
import { BooksModule } from './books/books.module';
import { DateValueAccessorModule } from 'angular-date-value-accessor';
import { SearchModule } from './search/search.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BehaviorSubject } from 'rxjs';
import { API_ERROR } from './shared/constants';


@NgModule({
  declarations: [
    AppComponent,
    AuthenticateComponent,
  ],
  imports: [
    
    AuthModule,
    BrowserModule,
    BooksModule,
    CoreModule,
    AppRoutingModule,
    HttpClientModule,
    SharedModule,
    DateValueAccessorModule,
    SearchModule,
    BrowserAnimationsModule,
  ],
  providers: [
    appInterceptorProvider,
    {
      provide: API_ERROR,
      useValue: new BehaviorSubject(null)
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
