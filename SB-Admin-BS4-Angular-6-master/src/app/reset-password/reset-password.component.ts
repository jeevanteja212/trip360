import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { routerTransition } from '../router.animations';
import { FareQuoteService } from '../shared/services/fare-quote.service';

@Component({
    selector: 'app-reset-password',
    templateUrl: './reset-password.component.html',
    styleUrls: ['./reset-password.component.scss'],
    animations: [routerTransition()],
    providers: [FareQuoteService]
})
export class ResetPasswordComponent implements OnInit {
    constructor(public router: Router, private fareQuoteService: FareQuoteService) { }


    userName = "";
    password = "";
    ngOnInit() { }
    submit() {
        if (!this.userName) {
            alert("Phone Number Required");
        }
        else if (!this.password) {
            alert("Password Required");
        }
        else if (this.password.length < 6 || this.password.length > 10) {
            alert("Password length is in between 6 to 10");
        }
        else if (!this.phonenumber(this.userName)) {
            alert("Invalid Phone Number");
        }
         else {
            var data = {
                userid: this.userName,
                password: this.password,

            }
            this.fareQuoteService.resetUser(data).subscribe((x: any) => {

                this.userName = ""; 
                this.password = "";

                alert("Your password resetted successfully !");
            });
        }
    }

      phonenumber(inputtxt) {
        var phoneno = /^\d{10}$/;
        if (inputtxt.match(phoneno)) {
            return true;
        }
        else {
            return false;
        }
    }
}
