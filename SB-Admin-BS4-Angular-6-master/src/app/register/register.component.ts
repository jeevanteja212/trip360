import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { routerTransition } from '../router.animations';
import { UserService } from '../shared/services/authentication.service';

@Component({
    selector: 'app-register',
    templateUrl: './register.component.html',
    styleUrls: ['./register.component.scss'],
    animations: [routerTransition()],
    providers: [UserService]
})
export class RegisterComponent implements OnInit {
    constructor(public router: Router, public userService: UserService) { }

  
    userName = "";
    password = "";
    ngOnInit() { }
    onLoggedin() {


    }
}
