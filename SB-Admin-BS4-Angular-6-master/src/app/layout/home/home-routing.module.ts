import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home.component';
import { flightBookComponent } from '../flightBook/flightBook.component';
import { searchResultComponent } from '../searchResult/searchResult.component';
import { bookingsComponent } from '../bookings/bookings.component';
const routes: Routes = [
    {
        path: '', children: [
            { path: '', component: HomeComponent },
            { path: 'search-result', component: searchResultComponent },
            { path: 'book/:ResultIndex/:TraceId/:audultcount/:childrencount/:infrantscount/:journeyclass', component: flightBookComponent },
            { path: 'bookings', component: bookingsComponent }
        ],

    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class HomeRoutingModule { }
