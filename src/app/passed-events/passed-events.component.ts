import { formatDate } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { EventItem } from '../events-model';

@Component({
  selector: 'app-passed-events',
  templateUrl: './passed-events.component.html',
  styleUrls: ['./passed-events.component.css']
})
export class PassedEventsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }


  events: EventItem[] = [
    {
      pics: ['..\\assets\\fatihurek\\f1.jpg','..\\assets\\fatihurek\\f2.png'], date: "2022-07-29", venue: "Jolly Joker Kıyı", location: "İstanbul", category: "Music", artist: "Fatih Ürek", ticketPrice: [100,150,275], isPopular: false
    },
    {
      pics: ['..\\assets\\dj\\dj1.jpg','..\\assets\\dj\\dj2.jpg'], date: "2022-07-31", venue: "Hayal Kahvesi Emaar", location: "İstanbul", category: "Music", artist: "DJ Ogün - DJ Rena 90'lar 2000'ler T", ticketPrice: [150,185,250], isPopular: true
    },
    {
      pics: ['..\\assets\\handemehan\\handemehan1.jpg','..\\assets\\handemehan\\handemehan2.jpg'], date: "2022-08-22", venue: "Hayal Kahvesi Atakent", location: "İstanbul", category: "Music", artist: "Hande Mehan", ticketPrice: [100,150,275], isPopular: true
    },
    {
      pics: ['..\\assets\\isinkaraca\\isin1.jpeg','..\\assets\\isinkaraca\\isin2.jpg'], date: "2022-06-04", venue: "Echo Performance Hall", location: "İzmir", category: "Music", artist: "Işın Karaca", ticketPrice: [100,150,275], isPopular: true
    },
    {
      pics: ['..\\assets\\baba\\baba1.jpg','..\\assets\\baba\\baba2.jpg'], date: "2021-07-05", venue: "Mall of Antalya", location: "Antalya", category: "Music", artist: "Baba", ticketPrice: [100,150,275], isPopular: true
    },
    {
      pics: ['..\\assets\\haktan\\haktan1.jpg'], date: "2022-09-10", venue: "Jolly Joker Kıyı", location: "İstanbul", category: "Music", artist: "Kaya", ticketPrice: [100,150,275], isPopular: true
    }
  ]

  todaysDate = new Date();
  passedEvents = this.events.filter((event:any) => formatDate(event.date,'yyyy-MM-dd','en_US') < formatDate(this.todaysDate,'yyyy-MM-dd','en_US'));

}
