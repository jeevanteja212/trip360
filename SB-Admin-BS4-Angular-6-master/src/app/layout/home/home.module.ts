import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { autofillFlightComponent } from '../autofillFlight/autofillFlight.component';
import {MatRadioModule} from '@angular/material/radio';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap'
import { searchResultComponent } from '../searchResult/searchResult.component';
import { flightBookComponent } from '../flightBook/flightBook.component';
import { bookingsComponent } from '../bookings/bookings.component';

@NgModule({
    imports: [CommonModule, HomeRoutingModule,MatRadioModule,FormsModule,NgbModule],
    exports: [MatRadioModule,FormsModule],
    declarations: [HomeComponent,autofillFlightComponent,searchResultComponent,flightBookComponent,bookingsComponent]
})
export class HomeModule {

    options = [
    'One',
    'Two',
    'Three'
   ];

}
