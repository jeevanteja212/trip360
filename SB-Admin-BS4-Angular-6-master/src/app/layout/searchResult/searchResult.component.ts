import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { routerTransition } from '../../router.animations';
import { FormControl } from '@angular/forms';
import { SearchOutputModel, Results, SearchInputModel, Segments } from '../../shared/models/search.model'
import { SearchService } from '../../shared/services/search.service';
import { Router, ActivatedRoute } from '@angular/router';
@Component({
    selector: 'app-searchResultComponent',
    templateUrl: './searchResult.component.html',
    styleUrls: ['./searchResult.component.scss'],
    providers: [SearchService]
})
export class searchResultComponent implements OnInit {
    searchOutputModel: SearchOutputModel;

    audultcount: string = '1';
    childrencount: string = '0';
    infrantscount: string = '0';
    travellerCount: number = 1;
    trip: number = 1;
    fromState: string = "";
    toState: string = "";
    journeyClass: number = 1;
    public modelDept: any;
    public modelReturn: any;
    bookRoundTrip = [];

    multicityTrip: any = [
        { fromState: "", toState: "", modelDept: "" },
        { fromState: "", toState: "", modelDept: "" },
        { fromState: "", toState: "", modelDept: "" }
    ];

    searchOutput: Array<Array<Results>> = []

    @Output() gotoSearch = new EventEmitter();
    constructor(private searchService: SearchService, private router: Router, private route: ActivatedRoute) { }
    ngOnInit() {

        this.route
            .queryParams
            .subscribe(params => {
                debugger;
                this.audultcount = params.audultcount;
                this.childrencount = params.childrencount;
                this.infrantscount = params.infrantscount;
                this.travellerCount = parseInt(params.travellerCount);
                this.trip = parseInt(params.trip);
                this.fromState = params.fromState;
                this.toState = params.toState;
                this.journeyClass = parseInt(params.journeyClass);
                this.modelDept = params.modelDept;
                this.modelReturn = params.modelReturn;
                this.multicityTrip = JSON.parse(params.multicityTrip);
                this.searchflight();
            });


    }


    gotoSearchClick() {
        this.router.navigate(['home'])
    }

    searchflight() {
        const searchInputModel = new SearchInputModel();
        searchInputModel.TokenId = localStorage.getItem('TokenId');
        searchInputModel.EndUserIp = localStorage.getItem('ClientIp');
        searchInputModel.AdultCount = this.audultcount;
        searchInputModel.ChildCount = this.childrencount;
        searchInputModel.InfantCount = this.infrantscount;
        searchInputModel.DirectFlight = "false";
        searchInputModel.OneStopFlight = "false";
        searchInputModel.JourneyType = String(this.trip);
        searchInputModel.PreferredAirlines = null;
        if (this.trip != 3) {
            const segmentsOneWay = new Segments();
            segmentsOneWay.Origin = this.fromState;
            segmentsOneWay.Destination = this.toState;
            segmentsOneWay.FlightCabinClass = String(this.journeyClass);
            segmentsOneWay.PreferredDepartureTime = this.modelDept;
            segmentsOneWay.PreferredArrivalTime = this.modelDept;  //this.formateDate(this.modelReturn) ? this.formateDate(this.modelReturn) : this.formateDate(this.modelDept);
            searchInputModel.Segments = [segmentsOneWay];

            if (this.trip == 2) {
                const segmentsReturn = new Segments();
                segmentsReturn.Origin = this.toState;
                segmentsReturn.Destination = this.fromState;
                segmentsReturn.FlightCabinClass = String(this.journeyClass);
                segmentsReturn.PreferredDepartureTime = this.modelReturn;
                segmentsReturn.PreferredArrivalTime = this.modelReturn;
                searchInputModel.Segments = [segmentsOneWay, segmentsReturn];
            }
        } else {
            searchInputModel.Segments = [];
            for (let v = 0; v < this.multicityTrip.length; v++) {
                const segmentsMulti = new Segments();
                segmentsMulti.Origin = this.multicityTrip[v].toState;
                segmentsMulti.Destination = this.multicityTrip[v].fromState;
                segmentsMulti.FlightCabinClass = String(this.journeyClass);
                segmentsMulti.PreferredDepartureTime = this.multicityTrip[v].modelDept;
                segmentsMulti.PreferredArrivalTime = this.multicityTrip[v].modelDept;
                searchInputModel.Segments.push(segmentsMulti);
            }
        }

        this.searchService.search(searchInputModel).subscribe((x: SearchOutputModel) => {
            this.searchOutputModel = x
            this.searchOutput = this.searchOutputModel.Response.Results;
        });

    }


    bookpush(obj, index) {
        this.bookRoundTrip[index] = obj;
        if (this.bookRoundTrip.length == 2) {

        }
    }

    book(obj) {

        // BaseFare
        this.router.navigate(['home/book', obj.ResultIndex,
            this.searchOutputModel.Response.TraceId, this.audultcount, this.childrencount, this.infrantscount, this.journeyClass])
    }

    gotoRoundTrip() {
        this.router.navigate(['home/book', this.bookRoundTrip[0].ResultIndex + "-" + this.bookRoundTrip[1].ResultIndex,
            this.searchOutputModel.Response.TraceId, this.audultcount, this.childrencount, this.infrantscount, this.journeyClass])
    }

    convertDurationHRS(val) {
        if (val) {
          // var hours = Math.floor(val / 60)
            val=Math.floor(parseInt(val) / 60)+" hrs"
        }
        return val;
    }



}


