import { Component, OnInit, ElementRef, HostListener, Input, Inject,Output,EventEmitter } from '@angular/core';
import { routerTransition } from '../../router.animations';
import { AirportService } from '../../shared/services/airports.service';
@Component({
    selector: 'app-autofill-flight',
    templateUrl: './autofillFlight.component.html',
    styleUrls: ['./autofillFlight.component.scss'],
    animations: [routerTransition()],
    host: {
        '(document:click)': 'ondocClick($event)',
    },
    providers: [AirportService]
})
export class autofillFlightComponent implements OnInit {

    state = "";
    stateopen = false;
    @Input() id;
      @Output()  change = new EventEmitter();
    menu = "";
stateselectedOBJ="";
    constructor(private airportService: AirportService) { }
    states = [];
    users: any;
    ngOnInit() {
        this.menu = "menu_" + this.id;
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
            // this.onStateFocus(this.id);
        }
    }

    stateSelected(state) {
        this.state =  state.city+" ("+state.code+")";;
        this.stateselectedOBJ= state;
        this.stateopen = false;
        this.change.emit(state.code);
    }
    onStateFocus(id) {
        this.stateopen = false;
        if (this.state.length > 2) {
            this.airportService.getairports(this.state).then(x => {

                var res=x.filter(data=>String(data['code']).toLowerCase().indexOf(this.state.toLowerCase())>-1||
                String(data['name']).toLowerCase().indexOf(this.state.toLowerCase())>-1||
                String(data['city']).toLowerCase().indexOf(this.state.toLowerCase())>-1);
                this.states=res;
                if (id == this.id) {
                    this.stateopen = true;
                }
            })

        }
    }



}


