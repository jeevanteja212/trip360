import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../router.animations';
import { FareQuoteService } from '../shared/services/fare-quote.service';

@Component({
    selector: 'app-signup',
    templateUrl: './signup.component.html',
    styleUrls: ['./signup.component.scss'],
    animations: [routerTransition()],
    providers: [FareQuoteService]
})
export class SignupComponent implements OnInit {
    first_name: string;
    last_name: string;
    phone: string;
    email: string;
    password1: string;
    password2: string;
    city: string;
    address1: string;

    constructor(private fareQuoteService: FareQuoteService) { }

    ngOnInit() { }

    submit() {
        debugger;
        if (!this.first_name) {
            alert("First Name Required");
        } else if (!this.last_name) {
            alert("Last Name Required");
        }
        else if (!this.phone) {
            alert("Phone Required");
        }
        else if (!this.email) {
            alert("Email Required");
        }

        else if (!this.password1) {
            alert("Password Required");
        }
        else if (!this.password2) {
            alert("Confirm Password Required");
        }
        else if (!this.city) {
            alert("City Required");
        }
        else if (!this.address1) {
            alert("Address Required");
        }
        else if (!this.phonenumber(this.phone)) {
            alert("Invalid Phone Number");
        }
        else if (!this.validateEmail(this.email)) {
            alert("Invalid Email Address");
        } else if (this.password1.length < 6 || this.password1.length > 10) {
            alert("Password length is in between 6 to 10");
        }
        else if (this.password1 != this.password2) {
            alert("Password and Confirm Passwords are not matched");
        } else {


            var data = {
                first_name: this.first_name,
                last_name: this.last_name,
                userid: this.phone,
                password: this.password1,
                address1: this.address1,
                address2: "",
                city: this.city,
                contry_code: "IN",
                country_name: "India",
                nationality: "IN",
                email: this.email,
                phone: this.phone
            }
            this.fareQuoteService.registerUser(data).subscribe((x: any) => {

                this.first_name = "";
                this.last_name = "";
                this.phone = "";
                this.email = "";
                this.password1 = "";
                this.password2 = "";
                this.city = "";
                this.address1 = "";
                alert("User registered successfully");
            });
        }



        //     var first_name = data.first_name;
        // var last_name = data.last_name;
        // var userid = data.phone;
        // var password = data.password;
        // var address1 = data.address1;
        // var address2 = data.address2;
        // var city = data.city;
        // var contry_code = data.contry_code;
        // var country_name = data.country_name;
        // var nationality = data.nationality;
        // var email = data.email;
        // var phone = data.phone;
    }

    validateEmail(emailField) {
        var reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;

        if (reg.test(emailField) == false) {

            return false;
        }

        return true;

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
