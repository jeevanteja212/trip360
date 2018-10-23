import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { routerTransition } from '../../router.animations';
import { FormControl } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { FareQuoteService } from '../../shared/services/fare-quote.service';
import { environment } from '../../../environments/environment';

declare var Razorpay: any;
@Component({
    selector: 'app-bookings',
    templateUrl: './bookings.component.html',
    styleUrls: ['./bookings.component.scss'],
    animations: [routerTransition()],
    providers: [FareQuoteService]
})
export class bookingsComponent implements OnInit {

    bookings: any = [];

    constructor(private route: ActivatedRoute, private fareQuoteService: FareQuoteService) { }

    ngOnInit() {
        this.getInfo();
    }
    getInfo() {
        var userID = '1';
        if (localStorage.getItem('UserDetails')) {
            userID = JSON.parse(localStorage.getItem('UserDetails')).id;
        }
        var obj = { userid: parseInt(userID) };
        this.fareQuoteService.getBookings(obj).subscribe((response: any) => {
            debugger;
            this.bookings = response[0];
            var flights = response[1];
            var passengers = response[2];
            for (var v = 0; v < this.bookings.length; v++) {

                this.bookings[v].notes = "";
                var flightsRes = flights.filter(x => x.tPNR == this.bookings[v].tPNR);
                this.bookings[v].flightsRes = flightsRes;

                var passengersRes = passengers.filter(x => x.tPNR == this.bookings[v].tPNR);
                this.bookings[v].passengersRes = passengersRes;
            }
        });
    }

    cancelTicket(data) {
        debugger;
 var userID = '1';
        if (localStorage.getItem('UserDetails')) {
            userID = JSON.parse(localStorage.getItem('UserDetails')).id;
        }
        var sectors = [];
        var ticketId = [];
        var journey = [];
        for (var v = 0; v < data.flightsRes.length; v++) {
            var objs = { "Origin": data.flightsRes[v].Ocode, "Destination": data.flightsRes[v].Dcode };
            var objss = { "origin": data.flightsRes[v].origin, "destination": data.flightsRes[v].destination };
            sectors.push(objs);
            journey.push(objss);
        }

        for (var v = 0; v < data.passengersRes.length; v++) {
            ticketId.push(parseInt(data.passengersRes[v].ticketNumber));
        }

         let currentDate = new Date();
        let month=currentDate.getMonth()+1;


        var obj = {
            "BookingId": parseInt(data.BookingId),
            "RequestType": 2,
            "CancellationType": 3,
            "Sectors": sectors,
            "TicketId": ticketId,
            "Remarks": data.notes,
            "EndUserIp": localStorage.getItem('ClientIp'),
            "TokenId": data.TokenId
        }
        var amount = data.grossFare * 100;
        var obj1 = {
            payment_id: data.paymentId,
            amount: amount,
            notes: data.notes,
            email: data.emailId,
            journey: journey,
            tpnr: data.tPNR,
            airlinePNR: data.airlinePNR,
            customerCareNumber: environment.address.customerCareNumber,
            uniqueID: data.uniqueID,
            bookingID: data.BookingId,
            userid:userID,
            date:currentDate.getFullYear() + "-" + month+ "-" + currentDate.getDate() + " " + currentDate.getHours() + ":" + currentDate.getMinutes() + ":" + currentDate.getSeconds()
        }

        this.fareQuoteService.cancelTicket(obj).subscribe((response: any) => {
            if (!response.error) {
                this.fareQuoteService.refundMoney(obj1).subscribe((response: any) => {
                    if (response) {
                        if(!response.data.error){
                        this.getInfo();
                        }else{
                            alert("cancelled Fail");
                        }
                    }
                });
            }else{
                alert("cancelled Fail");
            }
        });
    }


}


