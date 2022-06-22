import { formatDate } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { EventItem } from '../events-model'; 
import { SharedService } from '../shared.service';



@Component({
  selector: 'events-home',
  templateUrl: './events-home.component.html',
  styleUrls: ['./events-home.component.css']
})
export class EventsHomeComponent implements OnInit{

  constructor(private shared:SharedService) { }

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

  startDate: string = "";
  endDate: string = "";
  category: string = "";
  city: string = "";
  venue: string = "";


  cities: Array<string> = ['', 'İstanbul', 'Ankara', 'İzmir', 'Antalya'];
  categories: Array<string> = ['', 'Bale', 'Music','Theatre'];
  venues: Array<string> = ['', 'Jolly Joker Kıyı', 'Hayal Kahvesi Emaar','Hayal Kahvesi Atakent', 'Sahneport', 'Turkcell Vadi','Antalya Açıkhava','Hodjapasha Dance Theater','4 Mevsim Tiyatro Salonu'];


  todaysDate = new Date();
  popularEventsList = this.events.filter((item) => item.isPopular==true);
  filteredStartDateList: any[] = [];
  filteredEndDateList: any[] = [];
  filteredCategoryList: any[] = [];
  filteredCityList: any[] = [];
  filteredVenueList: any[] = [];

  updatedEvents = this.events.filter((event) => event.date >= formatDate(this.todaysDate,'yyyy-MM-dd','en_US'));
  intersectionList: any[] = this.updatedEvents;
  
  showPopularEventOnClick(slidervalue: any){
    this.popularEventsList = [];
    this.popularEventsList.push(this.events[slidervalue]);
    let element = document.getElementById('slider-item-div');
    element?.classList.remove("slider-content");
  }


  filterClick(value:string): void{

    let arrayList:any[] = [];
    if (value == "####"){
      this.intersectionList = this.updatedEvents;
      if (this.startDate!='' && this.startDate != null){
        this.filteredStartDateList = this.updatedEvents.filter((item) => formatDate(this.startDate,'yyyy-MM-dd','en_US') <= formatDate(item.date,'yyyy-MM-dd','en_US'));
        arrayList.push(this.filteredStartDateList);
      }
  
      if (this.endDate !='' && this.endDate != null){
        this.filteredEndDateList = this.updatedEvents.filter((item) => formatDate(this.endDate,'yyyy-MM-dd','en_US') >= formatDate(item.date,'yyyy-MM-dd','en_US'));
        arrayList.push(this.filteredEndDateList);
      }
  
      if (this.category!=''){
        this.filteredCategoryList = this.updatedEvents.filter((item) => item.category==this.category);
        arrayList.push(this.filteredCategoryList);
      }
  
      if (this.city!=''){
        this.filteredCityList = this.updatedEvents.filter((item) => item.location==this.city);
        arrayList.push(this.filteredCityList);
      }
  
      if (this.venue!=''){
        this.filteredVenueList = this.updatedEvents.filter((item) => item.venue==this.venue);
        arrayList.push(this.filteredVenueList);
      }
  
      if(arrayList.length != 0 ){
        this.intersectionList = arrayList.shift().filter(function(v:any) {
          return arrayList.every(function(a) {  
              return a.indexOf(v) !== -1;
          });
        });
      }
    }
    else {
      this.intersectionList = this.updatedEvents.filter((x) => (x.artist).toLocaleLowerCase().includes(value.toLocaleLowerCase()))
      console.log(this.intersectionList);
    }
    
  }

  toLower(val:string) {
    return this.shared.removeTurkishCharactersFromSlug(val)
  }


}
