import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EventDetailComponent } from './event-detail/event-detail.component';
import { EventsHomeComponent } from './events-home/events-home.component';

const routes: Routes = [
  {path: '', component: EventsHomeComponent},
  {path: 'eventdetail/:slug', component: EventDetailComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
