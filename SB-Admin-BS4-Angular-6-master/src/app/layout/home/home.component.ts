import { Component, OnInit, ElementRef, HostListener, Input, Inject } from '@angular/core';
import { routerTransition } from '../../router.animations';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { debounceTime, distinctUntilChanged, map } from 'rxjs/operators';
import { SearchInputModel, Segments, SearchOutputModel } from '../../shared/models/search.model'
import { Router } from '@angular/router';


@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss'],
    animations: [routerTransition()],
    host: {
        '(document:click)': 'ondocClick($event)',
    },
})

export class HomeComponent implements OnInit {
    myControl: FormControl = new FormControl();
    options = ['One', 'Two', 'Three'];
    public modelDept: any;
    public modelReturn: any;
    state: string = "";
    stateopen = false;
    animal: string;
    name: string;
    audultcount: string = '1';
    childrencount: string = '0';
    infrantscount: string = '0';
    travellerCount: number = 1;
    trip: number = 1;
    journeyType: string = 'All';
    journeyClass: number = 1;
    states: any = [];
    users: any;
    fromState: string = "";
    toState: string = "";
    showResult: boolean = false;
    multicityTrip: any = [
        { fromState: "", toState: "", modelDept: "" },
        { fromState: "", toState: "", modelDept: "" },
        { fromState: "", toState: "", modelDept: "" }
    ];





    constructor(private router: Router) { }
    ngOnInit() {

//this.openPaymentGateWay();

    }

  

    tripChange() {
        if (this.trip == 3) {
            this.multicityTrip = [
                { fromState: "", toState: "", modelDept: "" },
                { fromState: "", toState: "", modelDept: "" },
                { fromState: "", toState: "", modelDept: "" }
            ];
        }
    }

    fromStateMulticastChange(state, index) {
        this.multicityTrip[index].fromState = state;
    }
    toStateMulticastChange(state, index) {
        this.multicityTrip[index].toState = state;
    }
    addAnotherFlight() {
        this.multicityTrip.push({ fromState: "", toState: "", modelDept: "" })
    }
    removeAnotherFlight(index) {
        this.multicityTrip.splice(index, 1);
    }

    ondocClick(event) {

        let closeSelection = true;
        if (event.target) {
            if (event.target.className) {
                if (event.target.className.indexOf('cust-autofill-input-unique') > -1) {
                    closeSelection = false;
                }
            }
        }

        if (closeSelection) {
            this.stateopen = false;
        }
        else {
            this.onStateFocus();
        }
    }
    classSelect(type) {
        this.journeyClass = type;
    }
    stateSelected(state) {

        this.state = state;
        this.stateopen = false;
    }
    onStateFocus() {
        this.stateopen = false;
        if (this.state.length > 2) {
            this.stateopen = true;
        }
    }


    openDialog(): void {

    }
    AudultMClick(eve) {
        let val = parseInt(this.audultcount) - 1;
        val = val < 1 ? 1 : val;
        this.audultcount = String(val);
        this.calcTotalTravellers();
        eve.stopPropagation();
    }
    AudultNClick(eve) {
        eve.stopPropagation();
    }
    AudultPClick(eve) {
        let val = parseInt(this.audultcount) + 1;
        val = val > 9 ? 9 : val;
        this.audultcount = String(val);
        this.calcTotalTravellers();
        eve.stopPropagation();
    }

    ChildrenMClick(eve) {
        let val = parseInt(this.childrencount) - 1;
        val = val < 0 ? 0 : val;
        this.childrencount = String(val);
        this.calcTotalTravellers();
        eve.stopPropagation();
    }
    ChildrenNClick(eve) {
        eve.stopPropagation();
    }
    ChildrenPClick(eve) {
        let val = parseInt(this.childrencount) + 1;
        val = val > 9 ? 9 : val;
        this.childrencount = String(val);
        this.calcTotalTravellers();
        eve.stopPropagation();
    }

    InfantMClick(eve) {
        let val = parseInt(this.infrantscount) - 1;
        val = val < 0 ? 0 : val;
        this.infrantscount = String(val);
        this.calcTotalTravellers();
        eve.stopPropagation();
    }
    InfantNClick(eve) {
        eve.stopPropagation();
    }
    InfantPClick(eve) {
        let val = parseInt(this.infrantscount) + 1;
        val = val > 9 ? 9 : val;
        this.infrantscount = String(val);
        this.calcTotalTravellers();
        eve.stopPropagation();
    }
    onBlureve() {
        debugger;
        if (this.audultcount == "") {
            this.audultcount = "1";
        }
        if (this.childrencount == "") {
            this.childrencount = "0";
        }
        if (this.infrantscount == "") {
            this.infrantscount = "0";
        }
        this.calcTotalTravellers();
    }

    calcTotalTravellers() {
        this.travellerCount = parseInt(this.audultcount) + parseInt(this.childrencount) + parseInt(this.infrantscount)
    }


    restrictNumeric(e) {
        var input;
        if (e.metaKey || e.ctrlKey) {
            return true;
        }
        if (e.which === 32) {
            return false;
        }
        if (e.which === 0) {
            return true;
        }
        if (e.which < 33) {
            return true;
        }
        input = String.fromCharCode(e.which);
        return !!/[\d\s]/.test(input);
    }



    fromStateChange(state) {
        this.fromState = state;
    }
    toStateChange(state) {
        this.toState = state;
    }

    formateDate(model) {
        if (model) {
            return model.year + '-' + this.roungingDate(model.month) + '-' + this.roungingDate(model.day) + 'T00:00:00'
        }
        return "";
    }
    roungingDate(val) {
        if (String(val).length == 1) {
            val = '0' + String(val);
        }
        return val;
    }

    gotoSearch() {
        this.showResult = false;
    }

    searchflight() {
        for (let v = 0; v < this.multicityTrip.length; v++) {
            this.multicityTrip[v].modelDept = this.formateDate(this.multicityTrip[v].modelDept);
        }

        const queryParams = {
            audultcount: this.audultcount,
            childrencount: this.childrencount,
            infrantscount: this.infrantscount,
            travellerCount: this.travellerCount,
            trip: this.trip,
            fromState: this.fromState,
            toState: this.toState,
            journeyClass: this.journeyClass,
            modelDept: this.formateDate(this.modelDept),
            modelReturn: this.formateDate(this.modelReturn),
            multicityTrip: JSON.stringify(this.multicityTrip)
        }

        this.router.navigate(['home/search-result'], { queryParams: queryParams });

    }

}


