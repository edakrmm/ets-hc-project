import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import { SharedService } from '../shared.service';

@Component({
  selector: 'venue-events',
  templateUrl: './venue-events.component.html',
  styleUrls: ['./venue-events.component.css']
})
export class VenueEventsComponent implements OnInit {

  constructor(private route: ActivatedRoute,private shared:SharedService) { }

  ngOnInit(): void {
  }


  eventsList = this.shared.events;
  slug = this.route.snapshot.paramMap.get("slug");
  

  eventList = this.eventsList.filter((event:any) => this.shared.removeTurkishCharactersFromSlug(event.venue) == this.shared.removeTurkishCharactersFromSlug(this.slug));

  
  toLower(val:string) {
    return this.shared.removeTurkishCharactersFromSlug(val)
  }

}
