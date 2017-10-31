import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppRoutingModule } from './app-routing.module';
import { MaterialModule } from './material.module';
import { FlexLayoutModule } from '@angular/flex-layout';


import { AppComponent } from './app.component';
import { PrayerRequestsService } from './shared/prayer-requests.service';
import { PrayerRequestListsComponent } from './prayer-request-lists/prayer-request-lists.component';
import { PrayerRequestDetailsComponent } from './prayer-request-details/prayer-request-details.component';


@NgModule({
  declarations: [
    AppComponent,
    PrayerRequestListsComponent,
    PrayerRequestDetailsComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    MaterialModule,
    FlexLayoutModule
  ],
  providers: [PrayerRequestsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
