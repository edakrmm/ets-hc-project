import { Component, OnInit } from '@angular/core';
import { EventItem } from '../events-model'; 

@Component({
  selector: 'events-home',
  templateUrl: './events-home.component.html',
  styleUrls: ['./events-home.component.css']
})
export class EventsHomeComponent implements OnInit {
  
  constructor() { }
  mobile: boolean = false;
  ngOnInit(): void {
    if (window.screen.width <= 600) { // 768px portrait
      this.mobile = true;
    }
  }

  startDate: string = "";
  endDate: string = "";
  category: string = "";
  city: string = "";
  vanue: string = "";


  cities: Array<string> = ['İstanbul', 'Ankara', 'İsmir', 'Antalya'];
  categories: Array<string> = ['Resim', 'Music','Theatre'];
  vanues: Array<string> = ['Jolly Joker Kıyı', 'Hayal Kahvesi Emaar','Hayal Kahvesi Atakent', 'Echo Performance Hall', 'Mall of Antalya'];

  events: EventItem[] = [
    {
      pics: ['..\\assets\\fatihurek\\f1.jpg','..\\assets\\fatihurek\\f2.png'], date: "29 June 2022", venue: "Jolly Joker Kıyı", location: "İstanbul", category: "Concert", artist: "Fatih Ürek", ticketPrice: [100,150,275], isPopular: false
    },
    {
      pics: ['..\\assets\\dj\\dj1.jpg','..\\assets\\dj\\dj2.jpg'], date: "30 June 2022", venue: "Hayal Kahvesi Emaar", location: "İstanbul", category: "Concert", artist: "DJ Ogün - DJ Rena 90'lar 2000'ler T", ticketPrice: [150,185,250], isPopular: true
    },
    {
      pics: ['..\\assets\\handemehan\\handemehan1.jpg','..\\assets\\handemehan\\handemehan2.jpg'], date: "31 July 2022", venue: "Hayal Kahvesi Atakent", location: "İstanbul", category: "Concert", artist: "Hande Mehan", ticketPrice: [100,150,275], isPopular: true
    },
    {
      pics: ['..\\assets\\isinkaraca\\isin1.jpg','..\\assets\\isinkaraca\\isin2.jpg'], date: "22 July 2022", venue: "Echo Performance Hall", location: "İzmir", category: "Concert", artist: "Işın Karaca", ticketPrice: [100,150,275], isPopular: true
    },
    {
      pics: ['..\\assets\\baba\\baba1.jpg','..\\assets\\baba\\baba2.jpg'], date: "5 July 2022", venue: "Mall of Antalya", location: "Antalya", category: "Theatre", artist: "Baba", ticketPrice: [100,150,275], isPopular: true
    },
    {
      pics: ['..\\assets\\haktan\\haktan1.jpg'], date: "15 July 2022", venue: "Jolly Joker Kıyı", location: "İstanbul", category: "Concert", artist: "Kaya", ticketPrice: [100,150,275], isPopular: true
    }
  ]

  popularEventsList = this.events.filter((item) => item.isPopular==true);
  

  showPopularEventOnClick(slidervalue: any){
    this.popularEventsList = [];
    this.popularEventsList.push(this.events[slidervalue]);
    console.log(this.popularEventsList);
    let element = document.getElementById('slider-item-div');
    element?.classList.remove("slider-content");
  }


  handleClick(){

  }

}
