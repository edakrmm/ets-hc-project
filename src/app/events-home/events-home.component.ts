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

  startDate: string = "";
  endDate: string = "";
  category: string = "";
  city: string = "";
  venue: string = "";


  cities: Array<string> = ['', 'İstanbul', 'Ankara', 'İzmir', 'Antalya'];
  categories: Array<string> = ['', 'Resim', 'Music','Theatre'];
  venues: Array<string> = ['', 'Jolly Joker Kıyı', 'Hayal Kahvesi Emaar','Hayal Kahvesi Atakent', 'Echo Performance Hall', 'Mall of Antalya'];



  popularEventsList = this.events.filter((item) => item.isPopular==true);
  filteredStartDateList: any[] = [];
  filteredEndDateList: any[] = [];
  filteredCategoryList: any[] = [];
  filteredCityList: any[] = [];
  filteredVenueList: any[] = [];
  intersectionList: any[] = this.events;
  
  showPopularEventOnClick(slidervalue: any){
    this.popularEventsList = [];
    this.popularEventsList.push(this.events[slidervalue]);
    let element = document.getElementById('slider-item-div');
    element?.classList.remove("slider-content");
  }


  filterClick(value:string): void{

    let arrayList:any[] = [];
    if (value == "####"){
      this.intersectionList = this.events;
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
    }
    else {
      this.intersectionList = this.events.filter((x) => (x.artist).toLocaleLowerCase().includes(value.toLocaleLowerCase()))
      console.log(this.intersectionList);
    }
    
  }

  toLower(val:string) {
    return this.shared.removeTurkishCharactersFromSlug(val)
  }


}
