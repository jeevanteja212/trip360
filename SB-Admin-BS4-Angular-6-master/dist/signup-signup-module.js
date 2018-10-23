(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["signup-signup-module"],{

/***/ "./src/app/signup/signup-routing.module.ts":
/*!*************************************************!*\
  !*** ./src/app/signup/signup-routing.module.ts ***!
  \*************************************************/
/*! exports provided: SignupRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignupRoutingModule", function() { return SignupRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _signup_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./signup.component */ "./src/app/signup/signup.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    {
        path: '', component: _signup_component__WEBPACK_IMPORTED_MODULE_2__["SignupComponent"]
    }
];
var SignupRoutingModule = /** @class */ (function () {
    function SignupRoutingModule() {
    }
    SignupRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], SignupRoutingModule);
    return SignupRoutingModule;
}());



/***/ }),

/***/ "./src/app/signup/signup.component.html":
/*!**********************************************!*\
  !*** ./src/app/signup/signup.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"login-page\" [@routerTransition]>\n    <div class=\"row justify-content-md-center\">\n        <div class=\"col-md-4\">\n            <img class=\"user-avatar\" src=\"assets/images/companylogo.png\" width=\"150px\" />          \n          \n                <div class=\"form-content\">\n                    <div class=\"form-group\">\n                        <input type=\"text\" class=\"form-control input-underline input-lg\"  [(ngModel)]=\"first_name\"  placeholder=\"First Name *\">\n                    </div>\n\n                    <div class=\"form-group\">\n                        <input type=\"text\" class=\"form-control input-underline input-lg\" [(ngModel)]=\"last_name\" placeholder=\"Last Name *\">\n                    </div>\n                     <div class=\"form-group\">\n                        <input type=\"text\" class=\"form-control input-underline input-lg\" [(ngModel)]=\"phone\"  placeholder=\"Phone *\">\n                    </div>\n                     <div class=\"form-group\">\n                        <input type=\"text\" class=\"form-control input-underline input-lg\" [(ngModel)]=\"email\" placeholder=\"Email *\">\n                    </div>\n\n                    <div class=\"form-group\">\n                        <input type=\"password\" class=\"form-control input-underline input-lg\" [(ngModel)]=\"password1\"  placeholder=\"Password *\">\n                    </div>\n                    <div class=\"form-group\">\n                        <input type=\"password\" class=\"form-control input-underline input-lg\" [(ngModel)]=\"password2\" placeholder=\"Repeat Password *\">\n                    </div>\n                    <div class=\"form-group\">\n                        <input type=\"text\" class=\"form-control input-underline input-lg\" [(ngModel)]=\"city\" placeholder=\"City *\">\n                    </div>\n                    <div class=\"form-group\">\n                        <textarea  class=\"form-control input-underline input-lg\" cols=\"10\" [(ngModel)]=\"address1\" placeholder=\"Address *\" ></textarea>\n                    </div>\n                    \n                </div>\n                <a class=\"btn rounded-btn\" (click)=\"submit()\"> Register </a>&nbsp;\n                <a class=\"btn rounded-btn\" [routerLink]=\"['/login']\"> Log in </a>\n                      &nbsp;\n                <a class=\"btn rounded-btn\" [routerLink]=\"['/reset-password']\">Reset Password</a>\n           \n        </div>\n    </div>\n</div>\n"

/***/ }),

/***/ "./src/app/signup/signup.component.scss":
/*!**********************************************!*\
  !*** ./src/app/signup/signup.component.scss ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\n  display: block; }\n\n.login-page {\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  overflow: auto;\n  background: #222;\n  text-align: center;\n  color: #fff;\n  padding: 3em; }\n\n.login-page .col-lg-4 {\n    padding: 0; }\n\n.login-page .input-lg {\n    height: 46px;\n    padding: 10px 16px;\n    font-size: 18px;\n    line-height: 1.3333333;\n    border-radius: 0; }\n\n.login-page .input-underline {\n    background: 0 0;\n    border: none;\n    box-shadow: none;\n    border-bottom: 2px solid rgba(255, 255, 255, 0.5);\n    color: #fff;\n    border-radius: 0; }\n\n.login-page .input-underline:focus {\n    border-bottom: 2px solid #fff;\n    box-shadow: none; }\n\n.login-page .rounded-btn {\n    border-radius: 50px;\n    color: rgba(255, 255, 255, 0.8);\n    background: #222;\n    border: 2px solid rgba(255, 255, 255, 0.8);\n    font-size: 18px;\n    line-height: 40px;\n    padding: 0 25px; }\n\n.login-page .rounded-btn:hover,\n  .login-page .rounded-btn:focus,\n  .login-page .rounded-btn:active,\n  .login-page .rounded-btn:visited {\n    color: white;\n    border: 2px solid white;\n    outline: none; }\n\n.login-page h1 {\n    font-weight: 300;\n    margin-top: 20px;\n    margin-bottom: 10px;\n    font-size: 36px; }\n\n.login-page h1 small {\n      color: rgba(255, 255, 255, 0.7); }\n\n.login-page .form-group {\n    padding: 8px 0; }\n\n.login-page .form-group input::-webkit-input-placeholder {\n      color: rgba(255, 255, 255, 0.6) !important; }\n\n.login-page .form-group input:-moz-placeholder {\n      /* Firefox 18- */\n      color: rgba(255, 255, 255, 0.6) !important; }\n\n.login-page .form-group input::-moz-placeholder {\n      /* Firefox 19+ */\n      color: rgba(255, 255, 255, 0.6) !important; }\n\n.login-page .form-group input:-ms-input-placeholder {\n      color: rgba(255, 255, 255, 0.6) !important; }\n\n.login-page .form-content {\n    padding: 40px 0; }\n\n.login-page .user-avatar {\n    border-radius: 50%;\n    border: 2px solid #fff;\n    background-color: #07da3e; }\n"

/***/ }),

/***/ "./src/app/signup/signup.component.ts":
/*!********************************************!*\
  !*** ./src/app/signup/signup.component.ts ***!
  \********************************************/
/*! exports provided: SignupComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignupComponent", function() { return SignupComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _router_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../router.animations */ "./src/app/router.animations.ts");
/* harmony import */ var _shared_services_fare_quote_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/services/fare-quote.service */ "./src/app/shared/services/fare-quote.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SignupComponent = /** @class */ (function () {
    function SignupComponent(fareQuoteService) {
        this.fareQuoteService = fareQuoteService;
    }
    SignupComponent.prototype.ngOnInit = function () { };
    SignupComponent.prototype.submit = function () {
        var _this = this;
        debugger;
        if (!this.first_name) {
            alert("First Name Required");
        }
        else if (!this.last_name) {
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
        }
        else if (this.password1.length < 6 || this.password1.length > 10) {
            alert("Password length is in between 6 to 10");
        }
        else if (this.password1 != this.password2) {
            alert("Password and Confirm Passwords are not matched");
        }
        else {
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
            };
            this.fareQuoteService.registerUser(data).subscribe(function (x) {
                _this.first_name = "";
                _this.last_name = "";
                _this.phone = "";
                _this.email = "";
                _this.password1 = "";
                _this.password2 = "";
                _this.city = "";
                _this.address1 = "";
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
    };
    SignupComponent.prototype.validateEmail = function (emailField) {
        var reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
        if (reg.test(emailField) == false) {
            return false;
        }
        return true;
    };
    SignupComponent.prototype.phonenumber = function (inputtxt) {
        var phoneno = /^\d{10}$/;
        if (inputtxt.match(phoneno)) {
            return true;
        }
        else {
            return false;
        }
    };
    SignupComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-signup',
            template: __webpack_require__(/*! ./signup.component.html */ "./src/app/signup/signup.component.html"),
            styles: [__webpack_require__(/*! ./signup.component.scss */ "./src/app/signup/signup.component.scss")],
            animations: [Object(_router_animations__WEBPACK_IMPORTED_MODULE_1__["routerTransition"])()],
            providers: [_shared_services_fare_quote_service__WEBPACK_IMPORTED_MODULE_2__["FareQuoteService"]]
        }),
        __metadata("design:paramtypes", [_shared_services_fare_quote_service__WEBPACK_IMPORTED_MODULE_2__["FareQuoteService"]])
    ], SignupComponent);
    return SignupComponent;
}());



/***/ }),

/***/ "./src/app/signup/signup.module.ts":
/*!*****************************************!*\
  !*** ./src/app/signup/signup.module.ts ***!
  \*****************************************/
/*! exports provided: SignupModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignupModule", function() { return SignupModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _signup_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./signup-routing.module */ "./src/app/signup/signup-routing.module.ts");
/* harmony import */ var _signup_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./signup.component */ "./src/app/signup/signup.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var SignupModule = /** @class */ (function () {
    function SignupModule() {
    }
    SignupModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _signup_routing_module__WEBPACK_IMPORTED_MODULE_2__["SignupRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"]
            ],
            declarations: [_signup_component__WEBPACK_IMPORTED_MODULE_3__["SignupComponent"]]
        })
    ], SignupModule);
    return SignupModule;
}());



/***/ })

}]);
//# sourceMappingURL=signup-signup-module.js.map