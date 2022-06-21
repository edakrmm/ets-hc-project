import { Component, OnInit } from '@angular/core';
import { EventItem } from '../events-model'; 
import {ActivatedRoute} from "@angular/router";
import { SharedService } from '../shared.service';

@Component({
  selector: 'event-detail',
  templateUrl: './event-detail.component.html',
  styleUrls: ['./event-detail.component.css']
})
export class EventDetailComponent implements OnInit {

  constructor(private route: ActivatedRoute,private shared:SharedService) { }

  ngOnInit() {

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
      pics: ['..\\assets\\baba\\baba1.jpg','..\\assets\\baba\\baba2.jpg'], date: "2022-07-05", venue: "Mall of Antalya", location: "Antalya", category: "Music", artist: "Baba", ticketPrice: [100,150,275], isPopular: true
    },
    {
      pics: ['..\\assets\\haktan\\haktan1.jpg'], date: "2022-09-10", venue: "Jolly Joker Kıyı", location: "İstanbul", category: "Music", artist: "Kaya", ticketPrice: [100,150,275], isPopular: true
    }
  ]
 
  slug = this.route.snapshot.paramMap.get("slug");

  
  
  eventObject = this.events.filter((event:any) => this.shared.removeTurkishCharactersFromSlug(event.artist) == this.slug);

  get(){
  console.log(this.eventObject)
  }


  eventDetailSlider(slidervalue: any){


  }



}
