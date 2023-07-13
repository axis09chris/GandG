import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.page.html',
  styleUrls: ['./calendar.page.scss'],
})
export class CalendarPage implements OnInit {

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
}
