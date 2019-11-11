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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _pages_identify_identify_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pages/identify/identify.component */ "./src/app/pages/identify/identify.component.ts");
/* harmony import */ var _bases_auth__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../bases/auth */ "./src/bases/auth.ts");
/* harmony import */ var _pages_login_login_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pages/login/login.component */ "./src/app/pages/login/login.component.ts");
/* harmony import */ var _pages_home_home_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./pages/home/home.component */ "./src/app/pages/home/home.component.ts");







const routes = [
    { path: '', redirectTo: 'identify', pathMatch: 'full' },
    { path: 'identify', component: _pages_identify_identify_component__WEBPACK_IMPORTED_MODULE_3__["IdentifyComponent"], canActivate: [_bases_auth__WEBPACK_IMPORTED_MODULE_4__["LoginGuardService"]] },
    { path: 'login', component: _pages_login_login_component__WEBPACK_IMPORTED_MODULE_5__["LoginComponent"], canActivate: [_bases_auth__WEBPACK_IMPORTED_MODULE_4__["LoginGuardService"]] },
    { path: 'home', component: _pages_home_home_component__WEBPACK_IMPORTED_MODULE_6__["HomeComponent"], canActivate: [_bases_auth__WEBPACK_IMPORTED_MODULE_4__["AuthGuardService"]] },
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], AppRoutingModule);



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _helpers_Api_Api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../helpers/Api/Api */ "./src/helpers/Api/Api.ts");
/* harmony import */ var _helpers_Me_Me__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../helpers/Me/Me */ "./src/helpers/Me/Me.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _helpers_App_App__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../helpers/App/App */ "./src/helpers/App/App.ts");






let AppComponent = class AppComponent {
    constructor(api, router, me, app) {
        this.api = api;
        this.router = router;
        this.me = me;
        this.app = app;
        this.title = 'testeDev';
    }
};
AppComponent.ctorParameters = () => [
    { type: _helpers_Api_Api__WEBPACK_IMPORTED_MODULE_2__["default"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: _helpers_Me_Me__WEBPACK_IMPORTED_MODULE_3__["default"] },
    { type: _helpers_App_App__WEBPACK_IMPORTED_MODULE_5__["default"] }
];
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: __webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/index.js!./src/app/app.component.html"),
        styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
    })
], AppComponent);



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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _pages_identify_identify_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pages/identify/identify.component */ "./src/app/pages/identify/identify.component.ts");
/* harmony import */ var _helpers_Api_Api__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../helpers/Api/Api */ "./src/helpers/Api/Api.ts");
/* harmony import */ var _helpers_App_App__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../helpers/App/App */ "./src/helpers/App/App.ts");
/* harmony import */ var _helpers_Me_Me__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../helpers/Me/Me */ "./src/helpers/Me/Me.ts");
/* harmony import */ var _helpers_App_Loader__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../helpers/App/Loader */ "./src/helpers/App/Loader.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _bases_auth__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../bases/auth */ "./src/bases/auth.ts");
/* harmony import */ var _pages_login_login_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./pages/login/login.component */ "./src/app/pages/login/login.component.ts");
/* harmony import */ var _pages_home_home_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./pages/home/home.component */ "./src/app/pages/home/home.component.ts");















let AppModule = class AppModule {
};
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _bases_default__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../bases/default */ "./src/bases/default.ts");



let HomeComponent = class HomeComponent extends _bases_default__WEBPACK_IMPORTED_MODULE_2__["DefaultBase"] {
    constructor() {
        super(...arguments);
        this.page = 0;
        this.items = [];
        this.pages = [];
    }
    ngOnInit() {
        const _super = Object.create(null, {
            ngOnInit: { get: () => super.ngOnInit }
        });
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            _super.ngOnInit.call(this);
            this.search(1);
        });
    }
    search(page) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const self = this;
            if (self.page == page) {
                return false;
            }
            self.page = page;
            const api = self.api;
            const response = yield api.get('catalogues', { perpage: 30, page: page, scheme_url: 'vesti' });
            self.items = response.data.response.data;
            self.pages = Array(response.data.response.last_page).fill(4);
        });
    }
};
HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-home',
        template: __webpack_require__(/*! raw-loader!./home.component.html */ "./node_modules/raw-loader/index.js!./src/app/pages/home/home.component.html"),
        styles: [__webpack_require__(/*! ./home.component.scss */ "./src/app/pages/home/home.component.scss")]
    })
], HomeComponent);



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _bases_default__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../bases/default */ "./src/bases/default.ts");



let IdentifyComponent = class IdentifyComponent extends _bases_default__WEBPACK_IMPORTED_MODULE_2__["DefaultBase"] {
    constructor() {
        super(...arguments);
        this.field = '';
    }
    submit() {
        const self = this;
        if (self.field.indexOf('@') > -1) {
            self.checkEmail();
        }
        else {
            self.checkCNPJ();
        }
    }
    checkEmail() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const self = this;
            const api = this.api.set('error', false).set('exception', false);
            const response = yield api.get('validate/email/', { email: this.field });
            if (response.error) {
                // Já tem login
                self.app.router.navigate(['/login'], { queryParams: { login: self.field } });
            }
            else {
                self.app.app.new.alert('Erro', 'Você não possui um login');
            }
        });
    }
    checkCNPJ() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const self = this;
            const api = this.api.set('error', false).set('exception', false);
            const response = yield api.get('validate/document/', { document: this.field });
            if (response.error) {
                // Já tem login
                self.app.router.navigate(['/login'], { queryParams: { login: self.field } });
            }
            else {
                self.app.app.new.alert('Erro', 'Você não possui um login');
            }
        });
    }
};
IdentifyComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-identify',
        template: __webpack_require__(/*! raw-loader!./identify.component.html */ "./node_modules/raw-loader/index.js!./src/app/pages/identify/identify.component.html"),
        styles: [__webpack_require__(/*! ./identify.component.scss */ "./src/app/pages/identify/identify.component.scss")]
    })
], IdentifyComponent);



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _bases_default__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../bases/default */ "./src/bases/default.ts");



let LoginComponent = class LoginComponent extends _bases_default__WEBPACK_IMPORTED_MODULE_2__["DefaultBase"] {
    constructor() {
        super(...arguments);
        this.login = {
            login: '',
            password: '',
            scheme_url: "vesti"
        };
    }
    ngOnInit() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const self = this;
            if (!self.params.login) {
                self.app.router.navigateByUrl('identify');
            }
            else {
                self.login.login = self.params.login;
            }
        });
    }
    submit() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const self = this;
            const api = this.app.api.new();
            const response = yield api.post('login/?v=1.1', this.login);
            if (response.success) {
                yield self.app.me.setData(response.data.user);
                yield self.app.me.setToken(response.data.token);
                self.app.router.navigateByUrl('home');
            }
        });
    }
};
LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-login',
        template: __webpack_require__(/*! raw-loader!./login.component.html */ "./node_modules/raw-loader/index.js!./src/app/pages/login/login.component.html"),
        styles: [__webpack_require__(/*! ./login.component.scss */ "./src/app/pages/login/login.component.scss")]
    })
], LoginComponent);



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _helpers_Me_Me__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../helpers/Me/Me */ "./src/helpers/Me/Me.ts");




let AuthGuardService = class AuthGuardService {
    constructor(router, me) {
        this.router = router;
        this.me = me;
    }
    canActivate() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            if ((yield this.me.get()) == null) {
                this.router.navigate(['/identify']);
                return false;
            }
            return true;
        });
    }
};
AuthGuardService.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _helpers_Me_Me__WEBPACK_IMPORTED_MODULE_3__["default"] }
];
AuthGuardService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
], AuthGuardService);

let LoginGuardService = class LoginGuardService {
    constructor(router, me) {
        this.router = router;
        this.me = me;
    }
    canActivate() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            if ((yield this.me.get()) != null) {
                this.router.navigate(['/home']);
                return false;
            }
            return true;
        });
    }
};
LoginGuardService.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _helpers_Me_Me__WEBPACK_IMPORTED_MODULE_3__["default"] }
];
LoginGuardService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
], LoginGuardService);



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
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");



class DefaultBase {
    constructor(app, route, router) {
        this.app = app;
        this.route = route;
        this.router = router;
        this.PAGE_STATUSBAR = '#14263e';
        this.params = {};
        this.query = {};
        this.sub = null;
        this.caches = {};
        this.cache_items = [];
        const self = this;
        self.route.queryParams.subscribe(params => {
            self.params = params || {};
        });
        self.sub = self.route.params.subscribe(params => {
            self.query = params;
        });
    }
    get api() {
        return this.app.api.new();
    }
    get pageName() {
        return this.constructor.toString().match(/\w+/g)[1];
    }
    ngOnInit() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
        });
    }
    ionViewWillEnter() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const self = this;
        });
    }
    /**
     * Navigates to another page sending caches
     * @param url
     */
    navigate(url) {
        const self = this;
        const verbose = true;
        if (verbose) {
            console.log(self.pageName, `navigate`, url, self.caches[url], { state: { results: self.caches[url] } });
        }
        if (self.caches[url] && Object.keys(self.caches[url]).length > 0) {
            self.app.router.navigateByUrl(url, { state: { results: self.caches[url] } });
        }
        else {
            self.app.router.navigateByUrl(url);
        }
    }
    logout() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            yield this.app.me.logout();
            this.app.router.navigateByUrl('/login');
        });
    }
}
DefaultBase.ctorParameters = () => [
    { type: _app_app_component__WEBPACK_IMPORTED_MODULE_1__["AppComponent"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];


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
const environment = {
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _App_App__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../App/App */ "./src/helpers/App/App.ts");
/* harmony import */ var _Me_Me__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../Me/Me */ "./src/helpers/Me/Me.ts");






const link = 'https://hapi.meuvesti.com/api/appcompras/';
let Base = class Base {
    constructor(app, http, me) {
        this.app = app;
        this.http = http;
        this.me = me;
        this.url = 'https://hapi.meuvesti.com/api/appcompras/';
        this.development = false;
        const self = this;
        if (self.url.indexOf('localhost') > -1) {
            self.development = true;
        }
        else {
            self.url = link;
        }
    }
    new() {
        return new Api(this);
    }
};
Base.ctorParameters = () => [
    { type: _App_App__WEBPACK_IMPORTED_MODULE_4__["default"] },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
    { type: _Me_Me__WEBPACK_IMPORTED_MODULE_5__["default"] }
];
Base = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
], Base);
/* harmony default export */ __webpack_exports__["default"] = (Base);
class Api {
    constructor(base) {
        this.base = base;
        this.retry = 5;
        this.timeout = 60 * 1000;
        this.log = false;
        this.cache = true;
        this.error = true;
        this.exception = true;
        this.loader = true;
    }
    set(field, value) {
        this[field] = value;
        return this;
    }
    silentMode(bool = true) {
        const self = this;
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
    }
    get(url, args, callback) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const self = this;
            const response = new Response();
            if (self.loader) {
                self.loader = self.base.app.new.loader();
                self.loader.show();
            }
            return new Promise((resolve, reject) => tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
                yield self.setHeaders();
                const cache = {
                    name: 'cache-' + self.base.url + url + JSON.stringify(args),
                    data: null
                };
                self.base.http
                    .get(self.base.url + url, { headers: self.headers, params: args || {} })
                    .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["retry"])(self.retry))
                    .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["timeout"])(self.timeout))
                    .subscribe((data) => {
                    for (const item in data) {
                        response[item] = data[item];
                        response.data[item] = data[item];
                    }
                    if (self.log) {
                        console.log('app/helpers/Api/Api/post', response, this);
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
                }, (error) => {
                    if (error.error) {
                        for (const item in error.error) {
                            response[item] = error.error[item];
                            response.data[item] = error.error[item];
                        }
                    }
                    console.error('app/helpers/Api/Api/get', error, this);
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
            }));
        });
    }
    post(url, args, commaToFloat = true) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const self = this;
            const response = new Response();
            args = Object.assign({}, args);
            if (self.loader) {
                self.loader = self.base.app.new.loader();
                self.loader.show();
            }
            if (commaToFloat) {
                for (let item in args) {
                    let value = args[item];
                    if (typeof args[item] === 'string') {
                        const isValid = /^[0-9,.]*$/.test(args[item]);
                        if (isValid) {
                            value = value.replace(".", "");
                            value = value.replace(",", ".");
                            args[item] = parseFloat(value);
                        }
                    }
                }
            }
            return new Promise((resolve, reject) => tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
                yield self.setHeaders();
                self.base.http
                    .post(self.base.url + url, args, { headers: self.headers })
                    .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["retry"])(self.retry))
                    .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["timeout"])(self.timeout))
                    .subscribe((data) => {
                    for (const item in data) {
                        response[item] = data[item];
                        response.data[item] = data[item];
                    }
                    if (self.log) {
                        console.log('app/helpers/Api/Api/post', response, this);
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
                }, (error) => {
                    if (error.error) {
                        for (const item in error.error) {
                            response[item] = error.error[item];
                            response.data[item] = error.error[item];
                        }
                    }
                    console.error('app/helpers/Api/Api/post', error, response, this);
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
            }));
        });
    }
    put(url, args, commaToFloat = true) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const self = this;
            const response = new Response();
            args = Object.assign({}, args);
            if (self.loader) {
                self.loader = self.base.app.new.loader();
                self.loader.show();
            }
            if (commaToFloat) {
                for (let item in args) {
                    let value = args[item];
                    if (typeof args[item] === 'string') {
                        const isValid = /^[0-9,.]*$/.test(args[item]);
                        if (isValid) {
                            value = value.replace(".", "");
                            value = value.replace(",", ".");
                            args[item] = parseFloat(value);
                        }
                    }
                }
            }
            return new Promise((resolve, reject) => tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
                yield self.setHeaders();
                self.base.http
                    .put(self.base.url + url, args, { headers: self.headers })
                    .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["retry"])(self.retry))
                    .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["timeout"])(self.timeout))
                    .subscribe((data) => {
                    for (const item in data) {
                        response[item] = data[item];
                        response.data[item] = data[item];
                    }
                    if (self.log) {
                        console.log('app/helpers/Api/Api/post', response, this);
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
                }, (error) => {
                    if (error.error) {
                        for (const item in error.error) {
                            response[item] = error.error[item];
                            response.data[item] = error.error[item];
                        }
                    }
                    console.error('app/helpers/Api/Api/put', error, response, this);
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
            }));
        });
    }
    delete(url) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const self = this;
            const response = new Response();
            if (self.loader) {
                self.loader = self.base.app.new.loader();
                self.loader.show();
            }
            return new Promise((resolve, reject) => tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
                yield self.setHeaders();
                self.base.http
                    .delete(self.base.url + url, { headers: self.headers })
                    .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["retry"])(self.retry))
                    .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["timeout"])(self.timeout))
                    .subscribe((data) => {
                    for (const item in data) {
                        response[item] = data[item];
                        response.data[item] = data[item];
                    }
                    if (self.log) {
                        console.log('app/helpers/Api/Api/post', response, this);
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
                }, (error) => {
                    if (error.error) {
                        for (const item in error.error) {
                            response[item] = error.error[item];
                            response.data[item] = error.error[item];
                        }
                    }
                    console.error('app/helpers/Api/Api/delete', error, response, this);
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
            }));
        });
    }
    setHeaders() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const self = this;
            const token = yield this.base.me.token;
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
        });
    }
    error_alert(data) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            return yield this.base.app.new.alert('Erro', data.result.message || 'Erro de comunicação com o servidor');
        });
    }
}
Api.ctorParameters = () => [
    { type: Base }
];
class Response {
    constructor() {
        this.api = {};
        this.result = {
            success: false,
            message: '',
            messages: ''
        };
        this.data = {};
    }
    get success() {
        return (this.result.success == true);
    }
    get error() {
        return (this.result.success == false);
    }
}


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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Loader__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Loader */ "./src/helpers/App/Loader.ts");




let App = class App {
    constructor() {
        this.VERSION = '1.00';
    }
    get new() {
        return new New(this);
    }
};
App = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
], App);
/* harmony default export */ __webpack_exports__["default"] = (App);
class New {
    constructor(base) {
        this.base = base;
    }
    alert(title = 'Erro', message = 'Houve um erro inesperado', type = 'error') {
        sweetalert2__WEBPACK_IMPORTED_MODULE_2___default.a.fire(title, message, type || 'error');
    }
    confirm(header = 'Você tem certeza?', message = 'Você tem certeza de que deseja prosseguir?') {
        return new Promise(resolve => {
            sweetalert2__WEBPACK_IMPORTED_MODULE_2___default.a.fire({
                title: header,
                text: message,
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#ccc',
                cancelButtonText: 'Cancelar',
                cancelButtonColor: '#d33',
                confirmButtonText: 'OK'
            }).then((result) => {
                resolve(result.value);
            });
        });
    }
    loader() {
        return new _Loader__WEBPACK_IMPORTED_MODULE_3__["default"]();
    }
}
New.ctorParameters = () => [
    { type: App }
];


/***/ }),

/***/ "./src/helpers/App/Loader.ts":
/*!***********************************!*\
  !*** ./src/helpers/App/Loader.ts ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Loader; });
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_0__);

class Loader {
    constructor() {
        this.swal = sweetalert2__WEBPACK_IMPORTED_MODULE_0___default.a;
    }
    show() {
        this.swal.fire({
            timer: 15000,
            onBeforeOpen: () => {
                sweetalert2__WEBPACK_IMPORTED_MODULE_0___default.a.showLoading();
            },
            onClose: () => {
                // clearInterval(timerInterval)
            }
        });
    }
    dismiss() {
        this.swal.close();
    }
}


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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


const CACHE_NAME = 'teste.user';
let Me = class Me {
    get() {
        return new Promise((resolve) => tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const cache = yield localStorage.getItem(CACHE_NAME);
            if (cache) {
                try {
                    const user = JSON.parse(cache);
                    resolve(user);
                }
                catch (e) {
                    resolve(null);
                }
            }
            else {
                resolve(null);
            }
        }));
    }
    get logged() {
        const self = this;
        return new Promise((resolve) => tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const cache = yield localStorage.getItem(CACHE_NAME);
            if (cache) {
                try {
                    const user = JSON.parse(cache);
                    resolve("id" in user);
                }
                catch (e) {
                    resolve(false);
                }
            }
            else {
                resolve(false);
            }
        }));
    }
    get token() {
        const self = this;
        return new Promise((resolve) => tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const cache = yield localStorage.getItem(CACHE_NAME + "_token");
            if (cache) {
                resolve(cache);
            }
            else {
                resolve(null);
            }
        }));
    }
    logout() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            return yield localStorage.removeItem(CACHE_NAME);
        });
    }
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
    setData(data) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            return yield localStorage.setItem(CACHE_NAME, JSON.stringify(data));
        });
    }
    setToken(token) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            return yield localStorage.setItem(CACHE_NAME + '_token', JSON.stringify(token));
        });
    }
};
Me = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
], Me);
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


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
//# sourceMappingURL=main-es2015.js.map