import { formatDate } from '@angular/common';
import { Component, OnInit } from '@angular/core';
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

  startDate: string = "";
  endDate: string = "";
  category: string = "";
  city: string = "";
  venue: string = "";


  cities: Array<string> = ['', 'İstanbul', 'Ankara', 'İzmir', 'Antalya'];
  categories: Array<string> = ['', 'Bale', 'Music','Theatre'];
  venues: Array<string> = ['', 'Jolly Joker Kıyı', 'Hayal Kahvesi Emaar','Hayal Kahvesi Atakent', 'Sahneport', 'Turkcell Vadi','Antalya Açıkhava','Hodjapasha Dance Theater','4 Mevsim Tiyatro Salonu'];


  eventList = this.shared.events;
  todaysDate = new Date();


  popularEventsList = this.eventList.filter((item) => item.isPopular==true);
  filteredStartDateList: any[] = [];
  filteredEndDateList: any[] = [];
  filteredCategoryList: any[] = [];
  filteredCityList: any[] = [];
  filteredVenueList: any[] = [];


  updatedEvents = this.eventList.filter((event) => event.date >= formatDate(this.todaysDate,'yyyy-MM-dd','en_US'));
  intersectionList: any[] = this.updatedEvents;
  

  showPopularEventOnClick(slidervalue: any){
    this.popularEventsList = [];
    this.popularEventsList.push(this.eventList[slidervalue]);
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
