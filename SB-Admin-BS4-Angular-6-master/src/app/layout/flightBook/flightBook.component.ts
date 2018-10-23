import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { routerTransition } from '../../router.animations';
import { FormControl } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { FareQuoteService } from '../../shared/services/fare-quote.service';
import { FareQuoteRequest, FareQuoteResponse } from '../../shared/models/fare-quote.model'
import { BookRequest, BookResponse, Passengers } from '../../shared/models/book.model'
import { FlightTicket, FilghtDetails, PassengerDetails } from '../../shared/models/flight-ticket.model'
import { environment } from '../../../environments/environment';
declare var Razorpay: any;
@Component({
    selector: 'app-flightBookComponent',
    templateUrl: './flightBook.component.html',
    styleUrls: ['./flightBook.component.scss', '../searchResult/searchResult.component.scss'],
    animations: [routerTransition()],
    providers: [FareQuoteService]
})
export class flightBookComponent implements OnInit {

    nameTitle = [["Mr", "Mrs", "Ms"], ["Ms", "Master"]];
    gender = ["Male", "Female", "Others"];
    audultcount: number = 0;
    childrencount: number = 0;
    infrantscount: number = 0;
    journeyclass: number = 1;
    searchOutputlength = 1;
    output = [];
    passengers = [];
    contactNumber = "";
    email = "";
    params;
    ResultIndex = [];
    fareQuoteResponse: FareQuoteResponse;
    constructor(private route: ActivatedRoute, private fareQuoteService: FareQuoteService) { }

    ngOnInit() {
        debugger;

        this.route.params.subscribe(params => {
            this.params = params;
            this.ResultIndex = String(params['ResultIndex']).split('-');
            this.output = [];
            for (var v = 0; v < this.ResultIndex.length; v++) {
                let fareQuoteRequest = new FareQuoteRequest();
                fareQuoteRequest.ResultIndex = this.ResultIndex[v];
                fareQuoteRequest.TraceId = params['TraceId'];
                fareQuoteRequest.TokenId = localStorage.getItem('TokenId');
                fareQuoteRequest.EndUserIp = localStorage.getItem('ClientIp');

                this.fareQuoteService.getFareQuote(fareQuoteRequest).subscribe((x: FareQuoteResponse) => {
                    this.fareQuoteResponse = x;
                    this.output.push(x.Response.Results);

                    debugger;
                });
            }


            this.audultcount = parseInt(params['audultcount']);
            this.childrencount = parseInt(params['childrencount']);
            this.infrantscount = parseInt(params['infrantscount']);
            this.journeyclass = parseInt(params['journeyclass']);

            for (var v = 0; v < this.audultcount; v++) {
                let obj = {
                    title: "",
                    firstName: "",
                    middleName: "",
                    lastName: "",
                    gender: "",
                    dob: "",
                    passportNumber: "",
                    passportED: "",
                    name: "Audult " + (v + 1),
                    type: "Audult",
                    titleType: 0
                }
                this.passengers.push(obj);
            }
            for (var v = 0; v < this.childrencount; v++) {
                let obj = {
                    title: "",
                    firstName: "",
                    middleName: "",
                    lastName: "",
                    gender: "",
                    dob: "",
                    passportNumber: "",
                    passportED: "",
                    name: "Children " + (v + 1),
                    type: "Children",
                    titleType: 1
                }
                this.passengers.push(obj);
            }
            for (var v = 0; v < this.infrantscount; v++) {
                let obj = {
                    title: "",
                    firstName: "",
                    middleName: "",
                    lastName: "",
                    gender: "",
                    dob: "",
                    passportNumber: "",
                    passportED: "",
                    name: "Infrant " + (v + 1),
                    type: "Infrant",
                    titleType: 1
                }
                this.passengers.push(obj);
            }





        });
    }

    gotoSearchClick() {

    }

    bookFlight() {
        var scope = this;
        var prefillName = this.contactNumber;
        var prefillemail = this.email;
        let options = {
            "key": environment.paymentGateWay.key,
            "amount": "100", // 2000 paise = INR 20
            "name": environment.paymentGateWay.name,
            "description": environment.paymentGateWay.description,
            "image": environment.paymentGateWay.image,
            "handler": function (response) {


                scope.paymentSuccess(response);
            },
            "prefill": {
                "name": prefillName,
                "email": prefillemail
            },
            "notes": {
                "address": ""
            },
            "theme": {
                "color": environment.paymentGateWay.color
            }
        };
        var rzp1 = new Razorpay(options);
        rzp1.open();

    }

    paymentSuccess(resPayment) {
        let currentDate = new Date();
        let month=currentDate.getMonth()+1;

        var ticketGeneration = [];
        var uniqueID = this.createUniqueID();
        for (var v = 0; v < this.ResultIndex.length; v++) {
            let bookRequest = new BookRequest();
            bookRequest.EndUserIp = localStorage.getItem('ClientIp');
            bookRequest.TokenId = localStorage.getItem('TokenId');
            bookRequest.TraceId = this.params['TraceId'];
            bookRequest.ResultIndex = this.ResultIndex[v];
            bookRequest.Passengers = this.generatePassengers() //[{

            this.fareQuoteService.bookFlight(bookRequest).subscribe((x: BookResponse) => {
                debugger;
                let response = x.Response.Response;
                var userID = '1';
                if (localStorage.getItem('UserDetails')) {
                    userID = JSON.parse(localStorage.getItem('UserDetails')).id;
                }

                if (response) {
                    let ticketRequest = { EndUserIp: "", TokenId: "", TraceId: "", PNR: "", BookingId: "" };
                    ticketRequest.EndUserIp = localStorage.getItem('ClientIp');
                    ticketRequest.TokenId = localStorage.getItem('TokenId');
                    ticketRequest.TraceId = this.params['TraceId'];
                    ticketRequest.BookingId = response['BookingId'];
                    ticketRequest.PNR = response['PNR'];
                    this.fareQuoteService.getTicket(ticketRequest).subscribe((ticket: any) => {
                        let ticketInfo = ticket.Response.Response;
                        if (ticketInfo) {
                            let flightTicket = new FlightTicket();
                            flightTicket.uniqueID = uniqueID;
                            flightTicket.tPNR = String(Math.floor(100000000 + Math.random() * 900000000));
                            flightTicket.issuedOn = currentDate.getFullYear() + "-" + month+ "-" + currentDate.getDate() + " " + currentDate.getHours() + ":" + currentDate.getMinutes() + ":" + currentDate.getSeconds();//this.stringfyDate(response.FlightItinerary.LastTicketDate);
                            flightTicket.issuedBy = this.generateIssuedBy(response.FlightItinerary.Segments);
                            flightTicket.airlinePNR = response.FlightItinerary.PNR;
                            flightTicket.customerPhoneNumber = response.FlightItinerary.AirlineTollFreeNo;
                            flightTicket.ticketStatus = this.getStatus(response.Status);
                            flightTicket.basicFare = String(ticketInfo.FlightItinerary.Fare.BaseFare);
                            flightTicket.fuelSurchare = "0";
                            flightTicket.jnTax = String(ticketInfo.FlightItinerary.Fare.Tax);
                            flightTicket.meals = "0";
                            flightTicket.baggage = "0";
                            flightTicket.otherCharges = String(ticketInfo.FlightItinerary.Fare.OtherCharges);
                            flightTicket.grossFare = String(ticketInfo.FlightItinerary.Fare.PublishedFare);
                            flightTicket.MOP = "";
                            flightTicket.issueInExchangeFor = "";
                            flightTicket.tourCode = "";
                            flightTicket.gatewayChanges = "";
                            flightTicket.emailId = this.email;
                            flightTicket.phoneNumber = this.contactNumber;
                            flightTicket.filghtDetails = this.generateFlightDetails(response.FlightItinerary.Segments, response.FlightItinerary.FareRules);
                            flightTicket.passengerDetails = this.generatePassengerDetails(response.FlightItinerary, ticketInfo.FlightItinerary);
                            flightTicket.EndUserIp = localStorage.getItem('ClientIp');
                            flightTicket.TokenId = localStorage.getItem('TokenId');
                            flightTicket.TraceId = this.params['TraceId'];
                            flightTicket.BookingId = response['BookingId'];
                            flightTicket.paymentId = resPayment.razorpay_payment_id;
                            flightTicket.userid = parseInt(userID);

                            ticketGeneration.push(flightTicket);

                            if (this.ResultIndex.length === ticketGeneration.length) {
                                this.fareQuoteService.sendTicket(ticketGeneration).subscribe((res: any) => {
                                    debugger;
                                     alert("Booking Successfully");
                                });
                            }
                        }else{
                             alert("Booking Failed,please try again after some time");
                        }
                    });
                }else{
                    alert("Booking Failed,please try again after some time");
                }
            });
        }
    }

    createUniqueID() {
        var date = new Date();
        return date.getFullYear() + "_" + date.getMonth() + "_" + date.getDate() + "_" + date.getHours() + "_" + date.getMinutes() + "_" + date.getSeconds() + "_" + date.getMilliseconds();
    }

    generateIssuedBy(segments) {
        let airline = "";
        for (var v = 0; v < segments.length; v++) {
            airline += segments[v].Airline.AirlineName + "-" + segments[v].Airline.AirlineCode + " / ";
        }
        if (!!airline) {
            airline = airline.substr(0, airline.length - 3);
        }
        return airline;
    }
    generateFlightDetails(segments, fareRules) {

        let filghtDetailsList = [];
        for (var v = 0; v < segments.length; v++) {
            let filghtDetails = new FilghtDetails();
            filghtDetails.origin = segments[v].Origin.Airport.CityName;
            filghtDetails.destination = segments[v].Destination.Airport.CityName;
            filghtDetails.originCode = segments[v].Origin.Airport.AirportCode;
            filghtDetails.destinationCode = segments[v].Destination.Airport.AirportCode;
            filghtDetails.flightNumber = segments[v].Airline.FlightNumber;
            filghtDetails.depatureTime = this.stringfyDate(segments[v].Origin.DepTime);
            filghtDetails.arrivalTime = this.stringfyDate(segments[v].Destination.ArrTime);
            filghtDetails.class = segments[v].Airline.FareClass;
            filghtDetails.fareBasis = fareRules[v].FareBasisCode
            filghtDetails.operatedBy = segments[v].Airline.AirlineName + "-" + segments[v].Airline.AirlineCode;
            filghtDetails.depatureTerminal = segments[v].Origin.Airport.Terminal ? segments[v].Origin.Airport.Terminal : "depatureTerminal";
            filghtDetails.arrivalTerminal = segments[v].Destination.Airport.Terminal ? segments[v].Destination.Airport.Terminal : "arrivalTerminal";;
            filghtDetailsList.push(filghtDetails);
        }
        return filghtDetailsList;
    }

    generatePassengerDetails(flightItinerary, ticketFlightItinerary) {
        let passengerDetailsList = [];
        for (var v = 0; v < ticketFlightItinerary.Passenger.length; v++) {
            let passengerDetails = new PassengerDetails();
            passengerDetails.firstname = ticketFlightItinerary.Passenger[v].FirstName;
            passengerDetails.middlename = ticketFlightItinerary.Passenger[v].MiddleName ? ticketFlightItinerary.Passenger[v].MiddleName : "";
            passengerDetails.lastname = ticketFlightItinerary.Passenger[v].LastName;
            passengerDetails.title = ticketFlightItinerary.Passenger[v].Title;
            passengerDetails.name = ticketFlightItinerary.Passenger[v].Title + " " + ticketFlightItinerary.Passenger[v].FirstName + " " + ticketFlightItinerary.Passenger[v].LastName;
            passengerDetails.type = this.passengers[v].type;
            passengerDetails.ticketNumber = ticketFlightItinerary.Passenger[v].Ticket.TicketId;
            passengerDetails.FF = ticketFlightItinerary.Passenger[v].FFNumber ? ticketFlightItinerary.Passenger[v].FFNumber : "FF";
            passengerDetails.mealCode = "mealCode";
            passengerDetails.basic = String(flightItinerary.Fare.BaseFare);
            passengerDetails.fuel = "fuel";
            passengerDetails.JN = "JN";
            passengerDetails.meals = ticketFlightItinerary.Passenger[v].SegmentAdditionalInfo[0].Meal ? ticketFlightItinerary.Passenger[v].SegmentAdditionalInfo[0].Meal : "meals";
            passengerDetails.baggage = 'baggage';
            passengerDetails.seat = ticketFlightItinerary.Passenger[v].SegmentAdditionalInfo[0].Seat ? ticketFlightItinerary.Passenger[v].SegmentAdditionalInfo[0].Seat : "seat";
            passengerDetails.taxes = String(flightItinerary.Fare.Tax);
            passengerDetails.gross = String(flightItinerary.Fare.PublishedFare);
            passengerDetails.bgs = ticketFlightItinerary.Passenger[v].SegmentAdditionalInfo[0].Baggage;
            passengerDetailsList.push(passengerDetails);
        }
        return passengerDetailsList;
    }

    getStatus(val) {
        const status = ["Not Set", "Confirmed", "Failed", "Other Fare",
            "Other Class", "Booked Other", "Not Confirmed"];
        return status[val];
    }

    generatePassengers() {
        let totalPassengers = [];
        var userDetails = JSON.parse(localStorage.getItem('UserDetails'));

        for (var v = 0; v < this.passengers.length; v++) {
            const singlePassenger = this.passengers[v];
            let passenger = new Passengers();
            passenger.Title = singlePassenger.title
            passenger.FirstName = singlePassenger.middleName ? singlePassenger.firstName + " " + singlePassenger.middleName : singlePassenger.firstName;
            passenger.LastName = singlePassenger.lastName;
            passenger.PaxType = 1;
            passenger.DateOfBirth = this.formateDate(singlePassenger.dob);
            passenger.Gender = this.formateGender(singlePassenger.gender);
            passenger.PassportNo = singlePassenger.passportNumber;
            passenger.PassportExpiry = this.formateDate(singlePassenger.passportED);
            passenger.Fare = this.fareQuoteResponse.Response.Results.Fare;
            passenger.AddressLine1 = userDetails['address1'] ? userDetails['address1'] : environment.address.AddressLine1;
            passenger.AddressLine2 = userDetails['address2'] ? userDetails['address2'] : environment.address.AddressLine2;
            passenger.City = userDetails['city'] ? userDetails['city'] : environment.address.City;
            passenger.CountryCode = userDetails['city'] ? userDetails['city'] : environment.address.CountryCode;
            passenger.CountryName = userDetails['contry_code'] ? userDetails['contry_code'] : environment.address.CountryName;
            passenger.Nationality = userDetails['nationality'] ? userDetails['nationality'] : environment.address.Nationality;
            passenger.ContactNo = this.contactNumber;
            passenger.Email = this.email;
            passenger.IsLeadPax = v == 0;
            passenger.FFAirlineCode = null;
            passenger.FFNumber = "";
            passenger.GSTCompanyAddress = environment.address.GSTCompanyAddress;
            passenger.GSTCompanyContactNumber = environment.address.GSTCompanyContactNumber;
            passenger.GSTCompanyName = environment.address.GSTCompanyName;
            passenger.GSTNumber = environment.address.GSTNumber;
            passenger.GSTCompanyEmail = environment.address.GSTCompanyEmail;
            totalPassengers.push(passenger);
        }
        return totalPassengers;
    }

    formateGender(gender) {
        if (gender) {
            if (gender == "Male") {
                return 1;
            } else if (gender == "Female") {
                return 2;
            } else {
                return 3;
            }
        }

    }
    formateDate(model) {
        if (model) {
            return model.year + '-' + this.roungingDate(model.month) + '-' + this.roungingDate(model.day) + 'T00:00:00'
        }
        return "";
    }

    stringfyDate(model: string) {
        if (model) {
            return model.replace("T", " ");
        }
        return "";
    }
    roungingDate(val) {
        if (String(val).length == 1) {
            val = '0' + String(val);
        }
        return val;
    }

    convertDurationHRS(val) {
        if (val) {
            // var hours = Math.floor(val / 60)
            val = Math.floor(parseInt(val) / 60) + " hrs"
        }
        return val;
    }
}


