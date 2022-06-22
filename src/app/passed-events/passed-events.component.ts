import { formatDate } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-passed-events',
  templateUrl: './passed-events.component.html',
  styleUrls: ['./passed-events.component.css']
})
export class PassedEventsComponent implements OnInit {

  constructor(private shared:SharedService) { }

  ngOnInit(): void {
  }


  eventList = this.shared.events;
  
  todaysDate = new Date();
  passedEvents = this.eventList.filter((event:any) => formatDate(event.date,'yyyy-MM-dd','en_US') < formatDate(this.todaysDate,'yyyy-MM-dd','en_US'));

}
