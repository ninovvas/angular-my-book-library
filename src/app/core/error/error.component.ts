import { Component, Inject, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, debounceTime, take, filter } from 'rxjs';
import { API_ERROR } from 'src/app/shared/constants';

@Component({
  selector: 'app-error',
  templateUrl: './error.component.html',
  styleUrls: ['./error.component.scss']
})
export class ErrorComponent implements OnInit {

  apiError$ = this.apiError.asObservable();

  constructor(
    @Inject(API_ERROR) private apiError: BehaviorSubject<Error | null>,
    private router: Router
  ) {
    this.apiError$.pipe(debounceTime(0), take(1), filter(val => !val)).subscribe(() => {
      this.router.navigate(['/']);
    });
  }
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  ngOnDestroy(): void {
    this.apiError.next(null);
  }

}
