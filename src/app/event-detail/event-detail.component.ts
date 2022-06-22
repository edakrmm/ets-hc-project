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
      pics: ['..\\assets\\fatihurek\\f1.jpg','..\\assets\\fatihurek\\f2.png','..\\assets\\fatihurek\\f3.jpg'], date: "2022-05-29", venue: "Jolly Joker Kıyı", location: "İstanbul", category: "Music", artist: "Fatih Ürek", ticketPrice: [100,150,275], isPopular: false
    },
    {
      pics: ['..\\assets\\dj\\dj1.jpg','..\\assets\\dj\\dj2.jpg','..\\assets\\dj\\dj3.jpg'], date: "2022-03-31", venue: "Hayal Kahvesi Emaar", location: "İstanbul", category: "Music", artist: "DJ Ogün - DJ Rena 90'lar 2000'ler T", ticketPrice: [150,185,250], isPopular: false
    },
    {
      pics: ['..\\assets\\handemehan\\handemehan1.jpg','..\\assets\\handemehan\\handemehan2.jpg','..\\assets\\handemehan\\handemehan3.jpg'], date: "2022-06-21", venue: "Hayal Kahvesi Atakent", location: "İstanbul", category: "Music", artist: "Hande Mehan", ticketPrice: [100,150,275], isPopular: false
    },
    {
      pics: ['..\\assets\\isinkaraca\\isin1.jpeg','..\\assets\\isinkaraca\\isin2.jpg','..\\assets\\isinkaraca\\isin3.jpg'], date: "2022-04-01", venue: "Echo Performance Hall", location: "İzmir", category: "Music", artist: "Işın Karaca", ticketPrice: [100,150,275], isPopular: false
    },
    {
      pics: ['..\\assets\\haktan\\haktan1.jpg','..\\assets\\haktan\\haktan2.jpg','..\\assets\\haktan\\haktan3.jpg'], date: "2022-02-10", venue: "Jolly Joker Kıyı", location: "İstanbul", category: "Music", artist: "Kaya", ticketPrice: [100,150,275], isPopular: false
    },
    {
      pics: ['..\\assets\\sezonunkabusu\\sk1.jpg','..\\assets\\sezonunkabusu\\sk2.jpg','..\\assets\\sezonunkabusu\\sk3.jpg'], date: "2022-07-10", venue: "Sahneport", location: "İstanbul", category: "Theatre", artist: "Sezonun Kabusu", ticketPrice: [40,50,60], isPopular: true
    },
    {
      pics: ['..\\assets\\afara\\af1.jpg','..\\assets\\afara\\af2.jpg','..\\assets\\afara\\af3.jpg'], date: "2022-07-26", venue: "Turkcell Vadi", location: "İstanbul", category: "Music", artist: "Afara Uğur Aslan", ticketPrice: [70,90,120], isPopular: false
    },
    {
      pics: ['..\\assets\\anadoluatesi\\aa1.jpg','..\\assets\\anadoluatesi\\aa2.jpg','..\\assets\\anadoluatesi\\aa3.jpg'], date: "2022-09-10", venue: "Antalya Açıkhava", location: "Antalya", category: "Theatre", artist: "Anadolu Ateşi", ticketPrice: [100,20,300], isPopular: true
    },
    {
      pics: ['..\\assets\\birbabahamlet\\bbh1.jpg','..\\assets\\birbabahamlet\\bbh2.jpg','..\\assets\\birbabahamlet\\bbh3.jpg'], date: "2022-09-29", venue: "Antalya Açıkhava", location: "Antalya", category: "Theatre", artist: "Bir Baba Hamlet", ticketPrice: [75,85,95], isPopular: true
    },
    {
      pics: ['..\\assets\\dansinritmi\\dr1.jpg','..\\assets\\dansinritmi\\dr2.jpg','..\\assets\\dansinritmi\\dr3.jpg'], date: "2022-08-02", venue: "Hodjapasha Dance Theater", location: "İstanbul", category: "Bale", artist: "Dansın Ritmi", ticketPrice: [100,200,300], isPopular: false
    },
    {
      pics: ['..\\assets\\duman\\dmn1.jpg','..\\assets\\duman\\dmn2.jpg','..\\assets\\duman\\dmn3.jpg'], date: "2022-06-28", venue: "Turkcell Vadi", location: "İstanbul", category: "Music", artist: "Duman", ticketPrice: [55,80,100], isPopular: false
    },
    {
      pics: ['..\\assets\\feridunduzagac\\fd1.jpg','..\\assets\\feridunduzagac\\fd2.jpg','..\\assets\\feridunduzagac\\fd3.jpg'], date: "2022-06-25", venue: "Sahneport", location: "İstanbul", category: "Music", artist: "Feridun Düzağaç", ticketPrice: [100,150,275], isPopular: true
    },
    {
      pics: ['..\\assets\\keremgorsev\\kgt1.jpg','..\\assets\\keremgorsev\\kgt2.jpg','..\\assets\\keremgorsev\\kgt3.jpg'], date: "2022-10-24", venue: "Jolly Joker Kıyı", location: "İstanbul", category: "Music", artist: "Kerem Görsev Trio", ticketPrice: [40,50,60], isPopular: false
    },
    {
      pics: ['..\\assets\\ruhokuzum\\rö1.jpg','..\\assets\\ruhokuzum\\rö2.jpg','..\\assets\\ruhokuzum\\rö3.jpg'], date: "2022-06-30", venue: "4 Mevsim Tiyatro Salonu", location: "Ankara", category: "Theatre", artist: "Ruh Öküzüm", ticketPrice: [150,170,190], isPopular: true
    },
    {
      pics: ['..\\assets\\selamisahin\\sş1.png','..\\assets\\selamisahin\\sş2.jpg','..\\assets\\selamisahin\\sş3.jpg'], date: "2022-08-15", venue: "Hayal Kahvesi Emaar", location: "İstanbul", category: "Music", artist: "Selami Şahin", ticketPrice: [90,120,180], isPopular: false
    },
    {
      pics: ['..\\assets\\yeniturku\\yt1.jpg','..\\assets\\yeniturku\\yt2.jpg','..\\assets\\yeniturku\\yt3.jpg'], date: "2022-07-03", venue: "Jolly Joker Kıyı", location: "İstanbul", category: "Music", artist: "Yeni Türkü", ticketPrice: [100,150,275], isPopular: false
    }
  ]
 

  slug = this.route.snapshot.paramMap.get("slug");

  eventObject = this.events.filter((event:any) => this.shared.removeTurkishCharactersFromSlug(event.artist) == this.slug);


}
