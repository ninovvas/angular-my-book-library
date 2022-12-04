import { trigger, transition, query, style, stagger, animate } from '@angular/animations';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  animations: [
    trigger('photosAnimation', [
      transition('* => *', [
        query('img',style({ transform: 'translateX(-100%)'})),
        query('img',
          stagger('600ms', [
            animate('900ms', style({ transform: 'translateX(0)'}))
        ]))
      ])
    ])
  ]
})
export class HomeComponent implements OnInit {

  photos = [
    "./assets/images/book-1.png",
    "./assets/images/book-2.png",
    "./assets/images/book-3.png",
    "./assets/images/book-4.png",
    "./assets/images/book-5.png",
    "./assets/images/book-6.png",
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
