import { formatDate } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { EventItem } from '../events-model'; 

@Component({
  selector: 'events-home',
  templateUrl: './events-home.component.html',
  styleUrls: ['./events-home.component.css']
})
export class EventsHomeComponent implements OnInit {
  
  constructor() { }
  
  ngOnInit(): void {
  }

  startDate: string = "";
  endDate: string = "";
  category: string = "";
  city: string = "";
  venue: string = "";


  cities: Array<string> = ['İstanbul', 'Ankara', 'İzmir', 'Antalya'];
  categories: Array<string> = ['Resim', 'Music','Theatre'];
  venues: Array<string> = ['Jolly Joker Kıyı', 'Hayal Kahvesi Emaar','Hayal Kahvesi Atakent', 'Echo Performance Hall', 'Mall of Antalya'];

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

  popularEventsList = this.events.filter((item) => item.isPopular==true);
  filteredStartDateList: Array<any> = [];
  filteredEndDateList: Array<any> = [];
  filteredCategoryList: Array<any> = [];
  filteredCityList: Array<any> = [];
  filteredVenueList: Array<any> = [];
  intersectionList: Array<any> = this.events;
  
  showPopularEventOnClick(slidervalue: any){
    this.popularEventsList = [];
    this.popularEventsList.push(this.events[slidervalue]);
    console.log(this.popularEventsList);
    let element = document.getElementById('slider-item-div');
    element?.classList.remove("slider-content");
  }

  //Object.values(object1)

  filterClick(value:string){

    let arrayList:Array<any> = [];

    if (value == "####"){
      console.log('empty')
      if (this.startDate!=''){
        this.filteredStartDateList = this.events.filter((item) => formatDate(this.startDate,'yyyy-MM-dd','en_US') <= formatDate(item.date,'yyyy-MM-dd','en_US'));
        arrayList.push(this.filteredStartDateList);
      }
  
      if (this.endDate !=''){
        this.filteredEndDateList = this.events.filter((item) => formatDate(this.endDate,'yyyy-MM-dd','en_US') >= formatDate(item.date,'yyyy-MM-dd','en_US'));
        arrayList.push(this.filteredEndDateList);
      }
  
      if (this.category!=''){
        this.filteredCategoryList = this.events.filter((item) => item.category==this.category);
        arrayList.push(this.filteredCategoryList);
      }
  
      if (this.city!=''){
        this.filteredCityList = this.events.filter((item) => item.location==this.city);
        arrayList.push(this.filteredCityList);
      }
  
      if (this.venue!=''){
        this.filteredVenueList = this.events.filter((item) => item.venue==this.venue);
        arrayList.push(this.filteredVenueList);
      }
  
      if(arrayList.length != 0 ){
        this.intersectionList = arrayList.shift().filter(function(v:any) {
          return arrayList.every(function(a) {  
              return a.indexOf(v) !== -1;
          });
        });
      }
  
      if(this.intersectionList.length !=0 ){
        return this.intersectionList;
      }
      else {
        return this.events
      }
      
    }

    else {
      console.log('not empty')
      this.intersectionList = this.events.filter((x) => (x.artist).toLocaleLowerCase().includes(value.toLocaleLowerCase()))
      return this.intersectionList
    }
    
  }


}
