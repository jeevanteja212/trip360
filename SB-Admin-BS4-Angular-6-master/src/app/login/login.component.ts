import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { routerTransition } from '../router.animations';
import { UserService } from '../shared/services/authentication.service';
import { LoginModel } from '../shared/models/login.model'
@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss'],
    animations: [routerTransition()],
    providers: [UserService]
})
export class LoginComponent implements OnInit {
    constructor(public router: Router, public userService: UserService) { }

    LoginModel: LoginModel;
    parms: LoginModel;
    userName = "";
    password = "";
    ngOnInit() { }
    onLoggedin() {
        if (!this.userName) {
            alert("Phone Number Required");
        }
        else if (!this.password) {
            alert("Password Required");
        }
        else {
            this.userService.getIpCliente().then(ip => {
                debugger;
                this.userService.getAuthenticate(this.userName, this.password, ip['ip']).subscribe(x => {

                    // this.router.navigate(['/home'])
                    if (x) {
                        if (x.length>1) {
                            this.LoginModel = JSON.parse(x[0]);
                            if (this.LoginModel.TokenId) {
                                localStorage.setItem('UserDetails', JSON.stringify(x[1]));
                                localStorage.setItem('TokenId', this.LoginModel.TokenId);
                                localStorage.setItem('ClientIp', ip.ip);
                                this.router.navigate(['/home'])
                            }

                            else {
                                if (x['Error']) {
                                    alert(x['Error'].ErrorMessage);
                                }
                            }
                        } else {
                            alert("Invalid Credentials, try with new one");
                        }
                    }else{
                         alert("Invalid Credentials, try with new one");
                    }
                });
            });
        }

    }
}
