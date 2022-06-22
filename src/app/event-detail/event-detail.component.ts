import { Component, OnInit } from '@angular/core';
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

  eventList = this.shared.events;

  slug = this.route.snapshot.paramMap.get("slug");

  eventObject = this.eventList.filter((event:any) => this.shared.removeTurkishCharactersFromSlug(event.artist) == this.slug);


}
