import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule} from '@angular/router';
import { PrayerRequestListsComponent } from './prayer-request-lists/prayer-request-lists.component';
import { PrayerRequestDetailsComponent } from './prayer-request-details/prayer-request-details.component';

const routes: Routes = [
  {path: '', component: PrayerRequestListsComponent},
  {path: 'prayer-request-details', component: PrayerRequestDetailsComponent},
  {path: 'prayer-request-lists', component: PrayerRequestListsComponent},
  {path: '**', component: PrayerRequestListsComponent}
]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
