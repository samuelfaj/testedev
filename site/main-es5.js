(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/app.component.html":
/*!**************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/app.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/home/home.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/home/home.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-lg navbar-light bg-light\">\n\t<a class=\"navbar-brand\" href=\"#\">Groovy Forever</a>\n</nav>\n<div class=\"container\">\n\t<div class=\"row\">\n\t\t<div class=\"col-md-12 pt-3 pb-3\">\n\t\t\t<button class=\"btn btn-light mr-2\">T-Shirt</button>\n\t\t\t<button class=\"btn btn-light mr-2\">Jeans</button>\n\t\t\t<button class=\"btn btn-light mr-2\">Feminino</button>\n\t\t\t<button class=\"btn btn-light\">Camisa</button>\n\t\t</div>\n\t</div>\n\t<div class=\"row\">\n\t\t<div class=\"col-6 mb-3\" *ngFor=\"let item of items\">\n\t\t\t<div class=\"col-md-12\" style=\"border:1px solid #ccc; height: 100%\">\n\t\t\t\t<img [src]=\"item.icon\" class=\"img-fluid\">\n\t\t\t\t<p class=\"text-center text-capitalize pt-2 pb-2 mb-0\" style=\"height: 90px\">{{item.name}}</p>\n\t\t\t\t<p class=\"text-center text-capitalize\" style=\"font-weight: bold\">{{item.price | currency:'BRL'}}</p>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n\t<div class=\"row\">\n\t\t<div class=\"col-md-12\">\n\t\t\t<nav aria-label=\"Page navigation example\">\n\t\t\t\t<ul class=\"pagination\">\n\t\t\t\t\t<li class=\"page-item\" *ngFor=\"let x of pages;let p = index;\" [ngClass]=\"{active: page==p+1}\"><a class=\"page-link\" href=\"javascript:void(0)\" (click)=\"search((p+1))\">{{(p+1)}}</a></li>\n\t\t\t\t</ul>\n\t\t\t</nav>\n\t\t</div>\n\t</div>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/identify/identify.component.html":
/*!**********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/identify/identify.component.html ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\" style=\"padding-top: 20%\">\n\t<form #form=\"ngForm\" (submit)=\"submit()\">\n\t\t<div class=\"text-center pb-4\">\n\t\t\t<img src=\"assets/images/icone_groovy.png\" style=\"width: 100px;margin-left: auto;margin-right: auto\">\n\t\t</div>\n\n\t\t<div class=\"form-group\">\n\t\t\t<input type=\"text\" class=\"form-control\" placeholder=\"CNPJ ou Email\" required name=\"field\" [(ngModel)]=\"field\">\n\t\t</div>\n\n\t\t<div class=\"form-group\">\n\t\t\t<button [disabled]=\"form.form.invalid\" type=\"submit\" class=\"btn btn-primary btn-block\">Continuar</button>\n\t\t</div>\n\t</form>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/login/login.component.html":
/*!****************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/login/login.component.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\" style=\"padding-top: 20%\">\n\t<form #form=\"ngForm\" (submit)=\"submit()\">\n\t\t<div class=\"text-center pb-4\">\n\t\t\t<img src=\"assets/images/icone_groovy.png\" style=\"width: 100px;margin-left: auto;margin-right: auto\">\n\t\t</div>\n\n\t\t<div class=\"form-group\">\n\t\t\t<input type=\"text\" class=\"form-control\" placeholder=\"CNPJ ou Email\" required name=\"login\" [(ngModel)]=\"login.login\" disabled>\n\t\t</div>\n\n\t\t<div class=\"form-group\">\n\t\t\t<input type=\"password\" class=\"form-control\" placeholder=\"Senha\" required name=\"password\" [(ngModel)]=\"login.password\">\n\t\t</div>\n\n\t\t<div class=\"form-group\">\n\t\t\t<button [disabled]=\"form.form.invalid\" type=\"submit\" class=\"btn btn-primary btn-block\">Entrar</button>\n\t\t</div>\n\t\t<div class=\"form-group text-right\">\n\t\t\t<a href=\"javascript:void(0)\">Esqueceu sua senha?</a>\n\t\t</div>\n\t</form>\n</div>\n"

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _pages_identify_identify_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pages/identify/identify.component */ "./src/app/pages/identify/identify.component.ts");
/* harmony import */ var _bases_auth__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../bases/auth */ "./src/bases/auth.ts");
/* harmony import */ var _pages_login_login_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pages/login/login.component */ "./src/app/pages/login/login.component.ts");
/* harmony import */ var _pages_home_home_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./pages/home/home.component */ "./src/app/pages/home/home.component.ts");







var routes = [
    { path: '', redirectTo: 'identify', pathMatch: 'full' },
    { path: 'identify', component: _pages_identify_identify_component__WEBPACK_IMPORTED_MODULE_3__["IdentifyComponent"], canActivate: [_bases_auth__WEBPACK_IMPORTED_MODULE_4__["LoginGuardService"]] },
    { path: 'login', component: _pages_login_login_component__WEBPACK_IMPORTED_MODULE_5__["LoginComponent"], canActivate: [_bases_auth__WEBPACK_IMPORTED_MODULE_4__["LoginGuardService"]] },
    { path: 'home', component: _pages_home_home_component__WEBPACK_IMPORTED_MODULE_6__["HomeComponent"], canActivate: [_bases_auth__WEBPACK_IMPORTED_MODULE_4__["AuthGuardService"]] },
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _helpers_Api_Api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../helpers/Api/Api */ "./src/helpers/Api/Api.ts");
/* harmony import */ var _helpers_Me_Me__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../helpers/Me/Me */ "./src/helpers/Me/Me.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _helpers_App_App__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../helpers/App/App */ "./src/helpers/App/App.ts");






var AppComponent = /** @class */ (function () {
    function AppComponent(api, router, me, app) {
        this.api = api;
        this.router = router;
        this.me = me;
        this.app = app;
        this.title = 'testeDev';
    }
    AppComponent.ctorParameters = function () { return [
        { type: _helpers_Api_Api__WEBPACK_IMPORTED_MODULE_2__["default"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
        { type: _helpers_Me_Me__WEBPACK_IMPORTED_MODULE_3__["default"] },
        { type: _helpers_App_App__WEBPACK_IMPORTED_MODULE_5__["default"] }
    ]; };
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/index.js!./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _pages_identify_identify_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pages/identify/identify.component */ "./src/app/pages/identify/identify.component.ts");
/* harmony import */ var _helpers_Api_Api__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../helpers/Api/Api */ "./src/helpers/Api/Api.ts");
/* harmony import */ var _helpers_App_App__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../helpers/App/App */ "./src/helpers/App/App.ts");
/* harmony import */ var _helpers_Me_Me__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../helpers/Me/Me */ "./src/helpers/Me/Me.ts");
/* harmony import */ var _helpers_App_Loader__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../helpers/App/Loader */ "./src/helpers/App/Loader.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _bases_auth__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../bases/auth */ "./src/bases/auth.ts");
/* harmony import */ var _pages_login_login_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./pages/login/login.component */ "./src/app/pages/login/login.component.ts");
/* harmony import */ var _pages_home_home_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./pages/home/home.component */ "./src/app/pages/home/home.component.ts");















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _pages_identify_identify_component__WEBPACK_IMPORTED_MODULE_5__["IdentifyComponent"],
                _pages_login_login_component__WEBPACK_IMPORTED_MODULE_13__["LoginComponent"],
                _pages_home_home_component__WEBPACK_IMPORTED_MODULE_14__["HomeComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_10__["HttpClientModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_11__["FormsModule"],
            ],
            providers: [
                _helpers_Api_Api__WEBPACK_IMPORTED_MODULE_6__["default"],
                _helpers_App_App__WEBPACK_IMPORTED_MODULE_7__["default"],
                _helpers_App_Loader__WEBPACK_IMPORTED_MODULE_9__["default"],
                _helpers_Me_Me__WEBPACK_IMPORTED_MODULE_8__["default"],
                _bases_auth__WEBPACK_IMPORTED_MODULE_12__["LoginGuardService"],
                _bases_auth__WEBPACK_IMPORTED_MODULE_12__["AuthGuardService"]
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/pages/home/home.component.scss":
/*!************************************************!*\
  !*** ./src/app/pages/home/home.component.scss ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2hvbWUvaG9tZS5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/pages/home/home.component.ts":
/*!**********************************************!*\
  !*** ./src/app/pages/home/home.component.ts ***!
  \**********************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _bases_default__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../bases/default */ "./src/bases/default.ts");



var HomeComponent = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](HomeComponent, _super);
    function HomeComponent() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.page = 0;
        _this.items = [];
        _this.pages = [];
        return _this;
    }
    HomeComponent.prototype.ngOnInit = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                _super.prototype.ngOnInit.call(this);
                this.search(1);
                return [2 /*return*/];
            });
        });
    };
    HomeComponent.prototype.search = function (page) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var self, api, response;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        self = this;
                        if (self.page == page) {
                            return [2 /*return*/, false];
                        }
                        self.page = page;
                        api = self.api;
                        return [4 /*yield*/, api.get('catalogues', { perpage: 30, page: page, scheme_url: 'vesti' })];
                    case 1:
                        response = _a.sent();
                        self.items = response.data.response.data;
                        self.pages = Array(response.data.response.last_page).fill(4);
                        return [2 /*return*/];
                }
            });
        });
    };
    HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! raw-loader!./home.component.html */ "./node_modules/raw-loader/index.js!./src/app/pages/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.scss */ "./src/app/pages/home/home.component.scss")]
        })
    ], HomeComponent);
    return HomeComponent;
}(_bases_default__WEBPACK_IMPORTED_MODULE_2__["DefaultBase"]));



/***/ }),

/***/ "./src/app/pages/identify/identify.component.scss":
/*!********************************************************!*\
  !*** ./src/app/pages/identify/identify.component.scss ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2lkZW50aWZ5L2lkZW50aWZ5LmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/pages/identify/identify.component.ts":
/*!******************************************************!*\
  !*** ./src/app/pages/identify/identify.component.ts ***!
  \******************************************************/
/*! exports provided: IdentifyComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IdentifyComponent", function() { return IdentifyComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _bases_default__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../bases/default */ "./src/bases/default.ts");



var IdentifyComponent = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](IdentifyComponent, _super);
    function IdentifyComponent() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.field = '';
        return _this;
    }
    IdentifyComponent.prototype.submit = function () {
        var self = this;
        if (self.field.indexOf('@') > -1) {
            self.checkEmail();
        }
        else {
            self.checkCNPJ();
        }
    };
    IdentifyComponent.prototype.checkEmail = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var self, api, response;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        self = this;
                        api = this.api.set('error', false).set('exception', false);
                        return [4 /*yield*/, api.get('validate/email/', { email: this.field })];
                    case 1:
                        response = _a.sent();
                        if (response.error) {
                            // Já tem login
                            self.app.router.navigate(['/login'], { queryParams: { login: self.field } });
                        }
                        else {
                            self.app.app.new.alert('Erro', 'Você não possui um login');
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    IdentifyComponent.prototype.checkCNPJ = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var self, api, response;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        self = this;
                        api = this.api.set('error', false).set('exception', false);
                        return [4 /*yield*/, api.get('validate/document/', { document: this.field })];
                    case 1:
                        response = _a.sent();
                        if (response.error) {
                            // Já tem login
                            self.app.router.navigate(['/login'], { queryParams: { login: self.field } });
                        }
                        else {
                            self.app.app.new.alert('Erro', 'Você não possui um login');
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    IdentifyComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-identify',
            template: __webpack_require__(/*! raw-loader!./identify.component.html */ "./node_modules/raw-loader/index.js!./src/app/pages/identify/identify.component.html"),
            styles: [__webpack_require__(/*! ./identify.component.scss */ "./src/app/pages/identify/identify.component.scss")]
        })
    ], IdentifyComponent);
    return IdentifyComponent;
}(_bases_default__WEBPACK_IMPORTED_MODULE_2__["DefaultBase"]));



/***/ }),

/***/ "./src/app/pages/login/login.component.scss":
/*!**************************************************!*\
  !*** ./src/app/pages/login/login.component.scss ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2xvZ2luL2xvZ2luLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/pages/login/login.component.ts":
/*!************************************************!*\
  !*** ./src/app/pages/login/login.component.ts ***!
  \************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _bases_default__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../bases/default */ "./src/bases/default.ts");



var LoginComponent = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](LoginComponent, _super);
    function LoginComponent() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.login = {
            login: '',
            password: '',
            scheme_url: "vesti"
        };
        return _this;
    }
    LoginComponent.prototype.ngOnInit = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var self;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                self = this;
                if (!self.params.login) {
                    self.app.router.navigateByUrl('identify');
                }
                else {
                    self.login.login = self.params.login;
                }
                return [2 /*return*/];
            });
        });
    };
    LoginComponent.prototype.submit = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var self, api, response;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        self = this;
                        api = this.app.api.new();
                        return [4 /*yield*/, api.post('login/?v=1.1', this.login)];
                    case 1:
                        response = _a.sent();
                        if (!response.success) return [3 /*break*/, 4];
                        return [4 /*yield*/, self.app.me.setData(response.data.user)];
                    case 2:
                        _a.sent();
                        return [4 /*yield*/, self.app.me.setToken(response.data.token)];
                    case 3:
                        _a.sent();
                        self.app.router.navigateByUrl('home');
                        _a.label = 4;
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! raw-loader!./login.component.html */ "./node_modules/raw-loader/index.js!./src/app/pages/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.scss */ "./src/app/pages/login/login.component.scss")]
        })
    ], LoginComponent);
    return LoginComponent;
}(_bases_default__WEBPACK_IMPORTED_MODULE_2__["DefaultBase"]));



/***/ }),

/***/ "./src/bases/auth.ts":
/*!***************************!*\
  !*** ./src/bases/auth.ts ***!
  \***************************/
/*! exports provided: AuthGuardService, LoginGuardService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuardService", function() { return AuthGuardService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginGuardService", function() { return LoginGuardService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _helpers_Me_Me__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../helpers/Me/Me */ "./src/helpers/Me/Me.ts");




var AuthGuardService = /** @class */ (function () {
    function AuthGuardService(router, me) {
        this.router = router;
        this.me = me;
    }
    AuthGuardService.prototype.canActivate = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.me.get()];
                    case 1:
                        if ((_a.sent()) == null) {
                            this.router.navigate(['/identify']);
                            return [2 /*return*/, false];
                        }
                        return [2 /*return*/, true];
                }
            });
        });
    };
    AuthGuardService.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
        { type: _helpers_Me_Me__WEBPACK_IMPORTED_MODULE_3__["default"] }
    ]; };
    AuthGuardService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
    ], AuthGuardService);
    return AuthGuardService;
}());

var LoginGuardService = /** @class */ (function () {
    function LoginGuardService(router, me) {
        this.router = router;
        this.me = me;
    }
    LoginGuardService.prototype.canActivate = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.me.get()];
                    case 1:
                        if ((_a.sent()) != null) {
                            this.router.navigate(['/home']);
                            return [2 /*return*/, false];
                        }
                        return [2 /*return*/, true];
                }
            });
        });
    };
    LoginGuardService.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
        { type: _helpers_Me_Me__WEBPACK_IMPORTED_MODULE_3__["default"] }
    ]; };
    LoginGuardService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
    ], LoginGuardService);
    return LoginGuardService;
}());



/***/ }),

/***/ "./src/bases/default.ts":
/*!******************************!*\
  !*** ./src/bases/default.ts ***!
  \******************************/
/*! exports provided: DefaultBase */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DefaultBase", function() { return DefaultBase; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _app_app_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../app/app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var DefaultBase = /** @class */ (function () {
    function DefaultBase(app, route, router) {
        this.app = app;
        this.route = route;
        this.router = router;
        this.PAGE_STATUSBAR = '#14263e';
        this.params = {};
        this.query = {};
        this.sub = null;
        this.caches = {};
        this.cache_items = [];
        var self = this;
        self.route.queryParams.subscribe(function (params) {
            self.params = params || {};
        });
        self.sub = self.route.params.subscribe(function (params) {
            self.query = params;
        });
    }
    Object.defineProperty(DefaultBase.prototype, "api", {
        get: function () {
            return this.app.api.new();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DefaultBase.prototype, "pageName", {
        get: function () {
            return this.constructor.toString().match(/\w+/g)[1];
        },
        enumerable: true,
        configurable: true
    });
    DefaultBase.prototype.ngOnInit = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                return [2 /*return*/];
            });
        });
    };
    DefaultBase.prototype.ionViewWillEnter = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var self;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                self = this;
                return [2 /*return*/];
            });
        });
    };
    /**
     * Navigates to another page sending caches
     * @param url
     */
    DefaultBase.prototype.navigate = function (url) {
        var self = this;
        var verbose = true;
        if (verbose) {
            console.log(self.pageName, "navigate", url, self.caches[url], { state: { results: self.caches[url] } });
        }
        if (self.caches[url] && Object.keys(self.caches[url]).length > 0) {
            self.app.router.navigateByUrl(url, { state: { results: self.caches[url] } });
        }
        else {
            self.app.router.navigateByUrl(url);
        }
    };
    DefaultBase.prototype.logout = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.app.me.logout()];
                    case 1:
                        _a.sent();
                        this.app.router.navigateByUrl('/login');
                        return [2 /*return*/];
                }
            });
        });
    };
    DefaultBase.ctorParameters = function () { return [
        { type: _app_app_component__WEBPACK_IMPORTED_MODULE_1__["AppComponent"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
    ]; };
    return DefaultBase;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/helpers/Api/Api.ts":
/*!********************************!*\
  !*** ./src/helpers/Api/Api.ts ***!
  \********************************/
/*! exports provided: link, default, Response */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "link", function() { return link; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Response", function() { return Response; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _App_App__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../App/App */ "./src/helpers/App/App.ts");
/* harmony import */ var _Me_Me__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../Me/Me */ "./src/helpers/Me/Me.ts");






var link = 'https://hapi.meuvesti.com/api/appcompras/';
var Base = /** @class */ (function () {
    function Base(app, http, me) {
        this.app = app;
        this.http = http;
        this.me = me;
        this.url = 'https://hapi.meuvesti.com/api/appcompras/';
        this.development = false;
        var self = this;
        if (self.url.indexOf('localhost') > -1) {
            self.development = true;
        }
        else {
            self.url = link;
        }
    }
    Base.prototype.new = function () {
        return new Api(this);
    };
    Base.ctorParameters = function () { return [
        { type: _App_App__WEBPACK_IMPORTED_MODULE_4__["default"] },
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
        { type: _Me_Me__WEBPACK_IMPORTED_MODULE_5__["default"] }
    ]; };
    Base = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
    ], Base);
    return Base;
}());
/* harmony default export */ __webpack_exports__["default"] = (Base);
var Api = /** @class */ (function () {
    function Api(base) {
        this.base = base;
        this.retry = 5;
        this.timeout = 60 * 1000;
        this.log = false;
        this.cache = true;
        this.error = true;
        this.exception = true;
        this.loader = true;
    }
    Api.prototype.set = function (field, value) {
        this[field] = value;
        return this;
    };
    Api.prototype.silentMode = function (bool) {
        if (bool === void 0) { bool = true; }
        var self = this;
        if (bool) {
            self.error = false;
            self.exception = false;
            self.loader = false;
        }
        else {
            self.error = true;
            self.exception = true;
            self.loader = true;
        }
        return this;
    };
    Api.prototype.get = function (url, args, callback) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var self, response;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                self = this;
                response = new Response();
                if (self.loader) {
                    self.loader = self.base.app.new.loader();
                    self.loader.show();
                }
                return [2 /*return*/, new Promise(function (resolve, reject) { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
                        var cache;
                        var _this = this;
                        return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                            switch (_a.label) {
                                case 0: return [4 /*yield*/, self.setHeaders()];
                                case 1:
                                    _a.sent();
                                    cache = {
                                        name: 'cache-' + self.base.url + url + JSON.stringify(args),
                                        data: null
                                    };
                                    self.base.http
                                        .get(self.base.url + url, { headers: self.headers, params: args || {} })
                                        .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["retry"])(self.retry))
                                        .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["timeout"])(self.timeout))
                                        .subscribe(function (data) {
                                        for (var item in data) {
                                            response[item] = data[item];
                                            response.data[item] = data[item];
                                        }
                                        if (self.log) {
                                            console.log('app/helpers/Api/Api/post', response, _this);
                                        }
                                        if (self.loader) {
                                            self.loader.dismiss();
                                        }
                                        if (callback && data !== cache.data) {
                                            callback(response, false);
                                        }
                                        if (response.error === false) {
                                            resolve(response);
                                        }
                                        else {
                                            if (self.error) {
                                                self.error_alert(data);
                                            }
                                            if (self.exception) {
                                                reject(response);
                                            }
                                            else {
                                                resolve(response);
                                            }
                                        }
                                    }, function (error) {
                                        if (error.error) {
                                            for (var item in error.error) {
                                                response[item] = error.error[item];
                                                response.data[item] = error.error[item];
                                            }
                                        }
                                        console.error('app/helpers/Api/Api/get', error, _this);
                                        if (callback && error !== cache.data) {
                                            callback(response, false);
                                        }
                                        if (self.error) {
                                            self.error_alert(response);
                                        }
                                        if (self.loader) {
                                            self.loader.dismiss();
                                        }
                                        if (self.exception) {
                                            reject(response);
                                        }
                                        else {
                                            resolve(response);
                                        }
                                    });
                                    return [2 /*return*/];
                            }
                        });
                    }); })];
            });
        });
    };
    Api.prototype.post = function (url, args, commaToFloat) {
        if (commaToFloat === void 0) { commaToFloat = true; }
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var self, response, item, value, isValid;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                self = this;
                response = new Response();
                args = Object.assign({}, args);
                if (self.loader) {
                    self.loader = self.base.app.new.loader();
                    self.loader.show();
                }
                if (commaToFloat) {
                    for (item in args) {
                        value = args[item];
                        if (typeof args[item] === 'string') {
                            isValid = /^[0-9,.]*$/.test(args[item]);
                            if (isValid) {
                                value = value.replace(".", "");
                                value = value.replace(",", ".");
                                args[item] = parseFloat(value);
                            }
                        }
                    }
                }
                return [2 /*return*/, new Promise(function (resolve, reject) { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
                        var _this = this;
                        return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                            switch (_a.label) {
                                case 0: return [4 /*yield*/, self.setHeaders()];
                                case 1:
                                    _a.sent();
                                    self.base.http
                                        .post(self.base.url + url, args, { headers: self.headers })
                                        .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["retry"])(self.retry))
                                        .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["timeout"])(self.timeout))
                                        .subscribe(function (data) {
                                        for (var item in data) {
                                            response[item] = data[item];
                                            response.data[item] = data[item];
                                        }
                                        if (self.log) {
                                            console.log('app/helpers/Api/Api/post', response, _this);
                                        }
                                        if (self.loader) {
                                            self.loader.dismiss();
                                        }
                                        if (response.error === true) {
                                            if (self.error) {
                                                self.error_alert(data);
                                            }
                                            if (self.exception) {
                                                reject(response);
                                            }
                                            else {
                                                resolve(response);
                                            }
                                        }
                                        else {
                                            resolve(response);
                                        }
                                    }, function (error) {
                                        if (error.error) {
                                            for (var item in error.error) {
                                                response[item] = error.error[item];
                                                response.data[item] = error.error[item];
                                            }
                                        }
                                        console.error('app/helpers/Api/Api/post', error, response, _this);
                                        if (self.error) {
                                            self.error_alert(response);
                                        }
                                        if (self.loader) {
                                            self.loader.dismiss();
                                        }
                                        if (self.exception) {
                                            reject(response);
                                        }
                                        else {
                                            resolve(response);
                                        }
                                    });
                                    return [2 /*return*/];
                            }
                        });
                    }); })];
            });
        });
    };
    Api.prototype.put = function (url, args, commaToFloat) {
        if (commaToFloat === void 0) { commaToFloat = true; }
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var self, response, item, value, isValid;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                self = this;
                response = new Response();
                args = Object.assign({}, args);
                if (self.loader) {
                    self.loader = self.base.app.new.loader();
                    self.loader.show();
                }
                if (commaToFloat) {
                    for (item in args) {
                        value = args[item];
                        if (typeof args[item] === 'string') {
                            isValid = /^[0-9,.]*$/.test(args[item]);
                            if (isValid) {
                                value = value.replace(".", "");
                                value = value.replace(",", ".");
                                args[item] = parseFloat(value);
                            }
                        }
                    }
                }
                return [2 /*return*/, new Promise(function (resolve, reject) { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
                        var _this = this;
                        return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                            switch (_a.label) {
                                case 0: return [4 /*yield*/, self.setHeaders()];
                                case 1:
                                    _a.sent();
                                    self.base.http
                                        .put(self.base.url + url, args, { headers: self.headers })
                                        .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["retry"])(self.retry))
                                        .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["timeout"])(self.timeout))
                                        .subscribe(function (data) {
                                        for (var item in data) {
                                            response[item] = data[item];
                                            response.data[item] = data[item];
                                        }
                                        if (self.log) {
                                            console.log('app/helpers/Api/Api/post', response, _this);
                                        }
                                        if (self.loader) {
                                            self.loader.dismiss();
                                        }
                                        if (response.error === true) {
                                            if (self.error) {
                                                self.error_alert(data);
                                            }
                                            if (self.exception) {
                                                reject(response);
                                            }
                                            else {
                                                resolve(response);
                                            }
                                        }
                                        else {
                                            resolve(response);
                                        }
                                    }, function (error) {
                                        if (error.error) {
                                            for (var item in error.error) {
                                                response[item] = error.error[item];
                                                response.data[item] = error.error[item];
                                            }
                                        }
                                        console.error('app/helpers/Api/Api/put', error, response, _this);
                                        if (self.error) {
                                            self.error_alert(response);
                                        }
                                        if (self.loader) {
                                            self.loader.dismiss();
                                        }
                                        if (self.exception) {
                                            reject(response);
                                        }
                                        else {
                                            resolve(response);
                                        }
                                    });
                                    return [2 /*return*/];
                            }
                        });
                    }); })];
            });
        });
    };
    Api.prototype.delete = function (url) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var self, response;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                self = this;
                response = new Response();
                if (self.loader) {
                    self.loader = self.base.app.new.loader();
                    self.loader.show();
                }
                return [2 /*return*/, new Promise(function (resolve, reject) { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
                        var _this = this;
                        return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                            switch (_a.label) {
                                case 0: return [4 /*yield*/, self.setHeaders()];
                                case 1:
                                    _a.sent();
                                    self.base.http
                                        .delete(self.base.url + url, { headers: self.headers })
                                        .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["retry"])(self.retry))
                                        .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["timeout"])(self.timeout))
                                        .subscribe(function (data) {
                                        for (var item in data) {
                                            response[item] = data[item];
                                            response.data[item] = data[item];
                                        }
                                        if (self.log) {
                                            console.log('app/helpers/Api/Api/post', response, _this);
                                        }
                                        if (self.loader) {
                                            self.loader.dismiss();
                                        }
                                        resolve(response);
                                        if (response.error === true) {
                                            if (self.error) {
                                                self.error_alert(data);
                                            }
                                            if (self.exception) {
                                                reject(response);
                                            }
                                            else {
                                                resolve(response);
                                            }
                                        }
                                        else {
                                            resolve(response);
                                        }
                                    }, function (error) {
                                        if (error.error) {
                                            for (var item in error.error) {
                                                response[item] = error.error[item];
                                                response.data[item] = error.error[item];
                                            }
                                        }
                                        console.error('app/helpers/Api/Api/delete', error, response, _this);
                                        if (self.error) {
                                            self.error_alert(response);
                                        }
                                        if (self.loader) {
                                            self.loader.dismiss();
                                        }
                                        if (self.exception) {
                                            reject(response);
                                        }
                                        else {
                                            resolve(response);
                                        }
                                    });
                                    return [2 /*return*/];
                            }
                        });
                    }); })];
            });
        });
    };
    Api.prototype.setHeaders = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var self, token;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        self = this;
                        return [4 /*yield*/, this.base.me.token];
                    case 1:
                        token = _a.sent();
                        self.headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                            'Content-Type': 'application/json'
                        });
                        if (token !== null) {
                            console.log('token', token);
                            self.headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                                'Content-Type': 'application/json',
                                Authorization: 'Bearer ' + token.substr(1, token.length - 2)
                            });
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    Api.prototype.error_alert = function (data) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.base.app.new.alert('Erro', data.result.message || 'Erro de comunicação com o servidor')];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    Api.ctorParameters = function () { return [
        { type: Base }
    ]; };
    return Api;
}());
var Response = /** @class */ (function () {
    function Response() {
        this.api = {};
        this.result = {
            success: false,
            message: '',
            messages: ''
        };
        this.data = {};
    }
    Object.defineProperty(Response.prototype, "success", {
        get: function () {
            return (this.result.success == true);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Response.prototype, "error", {
        get: function () {
            return (this.result.success == false);
        },
        enumerable: true,
        configurable: true
    });
    return Response;
}());



/***/ }),

/***/ "./src/helpers/App/App.ts":
/*!********************************!*\
  !*** ./src/helpers/App/App.ts ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Loader__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Loader */ "./src/helpers/App/Loader.ts");




var App = /** @class */ (function () {
    function App() {
        this.VERSION = '1.00';
    }
    Object.defineProperty(App.prototype, "new", {
        get: function () {
            return new New(this);
        },
        enumerable: true,
        configurable: true
    });
    App = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
    ], App);
    return App;
}());
/* harmony default export */ __webpack_exports__["default"] = (App);
var New = /** @class */ (function () {
    function New(base) {
        this.base = base;
    }
    New.prototype.alert = function (title, message, type) {
        if (title === void 0) { title = 'Erro'; }
        if (message === void 0) { message = 'Houve um erro inesperado'; }
        if (type === void 0) { type = 'error'; }
        sweetalert2__WEBPACK_IMPORTED_MODULE_2___default.a.fire(title, message, type || 'error');
    };
    New.prototype.confirm = function (header, message) {
        if (header === void 0) { header = 'Você tem certeza?'; }
        if (message === void 0) { message = 'Você tem certeza de que deseja prosseguir?'; }
        return new Promise(function (resolve) {
            sweetalert2__WEBPACK_IMPORTED_MODULE_2___default.a.fire({
                title: header,
                text: message,
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#ccc',
                cancelButtonText: 'Cancelar',
                cancelButtonColor: '#d33',
                confirmButtonText: 'OK'
            }).then(function (result) {
                resolve(result.value);
            });
        });
    };
    New.prototype.loader = function () {
        return new _Loader__WEBPACK_IMPORTED_MODULE_3__["default"]();
    };
    New.ctorParameters = function () { return [
        { type: App }
    ]; };
    return New;
}());


/***/ }),

/***/ "./src/helpers/App/Loader.ts":
/*!***********************************!*\
  !*** ./src/helpers/App/Loader.ts ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_0__);

var Loader = /** @class */ (function () {
    function Loader() {
        this.swal = sweetalert2__WEBPACK_IMPORTED_MODULE_0___default.a;
    }
    Loader.prototype.show = function () {
        this.swal.fire({
            timer: 15000,
            onBeforeOpen: function () {
                sweetalert2__WEBPACK_IMPORTED_MODULE_0___default.a.showLoading();
            },
            onClose: function () {
                // clearInterval(timerInterval)
            }
        });
    };
    Loader.prototype.dismiss = function () {
        this.swal.close();
    };
    return Loader;
}());
/* harmony default export */ __webpack_exports__["default"] = (Loader);


/***/ }),

/***/ "./src/helpers/Me/Me.ts":
/*!******************************!*\
  !*** ./src/helpers/Me/Me.ts ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var CACHE_NAME = 'teste.user';
var Me = /** @class */ (function () {
    function Me() {
    }
    Me.prototype.get = function () {
        var _this = this;
        return new Promise(function (resolve) { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
            var cache, user;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, localStorage.getItem(CACHE_NAME)];
                    case 1:
                        cache = _a.sent();
                        if (cache) {
                            try {
                                user = JSON.parse(cache);
                                resolve(user);
                            }
                            catch (e) {
                                resolve(null);
                            }
                        }
                        else {
                            resolve(null);
                        }
                        return [2 /*return*/];
                }
            });
        }); });
    };
    Object.defineProperty(Me.prototype, "logged", {
        get: function () {
            var _this = this;
            var self = this;
            return new Promise(function (resolve) { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
                var cache, user;
                return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, localStorage.getItem(CACHE_NAME)];
                        case 1:
                            cache = _a.sent();
                            if (cache) {
                                try {
                                    user = JSON.parse(cache);
                                    resolve("id" in user);
                                }
                                catch (e) {
                                    resolve(false);
                                }
                            }
                            else {
                                resolve(false);
                            }
                            return [2 /*return*/];
                    }
                });
            }); });
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Me.prototype, "token", {
        get: function () {
            var _this = this;
            var self = this;
            return new Promise(function (resolve) { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
                var cache;
                return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, localStorage.getItem(CACHE_NAME + "_token")];
                        case 1:
                            cache = _a.sent();
                            if (cache) {
                                resolve(cache);
                            }
                            else {
                                resolve(null);
                            }
                            return [2 /*return*/];
                    }
                });
            }); });
        },
        enumerable: true,
        configurable: true
    });
    Me.prototype.logout = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, localStorage.removeItem(CACHE_NAME)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    //
    // async get(args ?: any, callback ?: Callback): Promise<UserInterface | null>{
    //     const self = this;
    //     const response = await self.api.get(self.LINK);
    //
    //     if(!response.success){
    //         return null;
    //     }
    //
    //     self.cache = response.return;
    //     await localStorage.setItem(CACHE_NAME, JSON.stringify(response.return));
    //
    //     if(callback){
    //         callback(response.return)
    //     }
    //
    //     return response.return;
    // }
    Me.prototype.setData = function (data) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, localStorage.setItem(CACHE_NAME, JSON.stringify(data))];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    Me.prototype.setToken = function (token) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, localStorage.setItem(CACHE_NAME + '_token', JSON.stringify(token))];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    Me = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
    ], Me);
    return Me;
}());
/* harmony default export */ __webpack_exports__["default"] = (Me);


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/samuelfajreldines/Desenvolvimento/Freelancer/testeDev/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es5.js.map