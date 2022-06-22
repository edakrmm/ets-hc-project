import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EventDetailComponent } from './event-detail/event-detail.component';
import { EventsHomeComponent } from './events-home/events-home.component';
import { PassedEventsComponent } from './passed-events/passed-events.component';
import { VenueEventsComponent } from './venue-events/venue-events.component';

const routes: Routes = [
  {path: '', component: EventsHomeComponent},
  {path: 'eventdetail/:slug', component: EventDetailComponent},
  {path: 'passedevents', component: PassedEventsComponent},
  {path: 'venueevents/:slug', component: VenueEventsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
