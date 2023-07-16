import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bookings',
  templateUrl: './bookings.page.html',
  styleUrls: ['./bookings.page.scss'],
})
export class BookingsPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  highlightedDates = [
    {
      date: '2023-07-05',
      textColor: '#fff',
      backgroundColor: '#E3242B',
    },
    {
      date: '2023-07-10',
      textColor: '#fff',
      backgroundColor: '#E3242B',
    },
    {
      date: '2023-07-20',
      textColor: '#fff',
      backgroundColor: '#E3242B',
    },
    {
      date: '2023-07-23',
      textColor: '#fff',
      backgroundColor: '#E3242B',
    },
  ];
  
  public alertButtons = ['OK'];

}
