(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error('Cannot find module "' + req + '".');
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* ESTILOS PARA LOS COMPONENTES */\r\nheader{\r\n  height: 170px;\r\n  height:100%;\r\n}\r\nmain{\r\n  color: white;\r\n  height: 100%;\r\n}\r\nfooter{\r\n  border-top:1px solid blanchedalmond;\r\n  background: rgb(0, 0, 0);\r\n  color: white;\r\n  height:100%;\r\n}\r\nfooter h6{\r\n  padding: 20px 0;\r\n}"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<header></header>\n<main></main>\n<footer>\n  <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col-12 text-center\">\n        <h6>©auroraVásquezSánche2018</h6>\n      </div>\n    </div>\n  </div>\n</footer>\n\n<!--The content below is only a placeholder and can be replaced.-->\n  <!-- <div style=\"text-align:center\">\n    <h1>\n      Welcome to {{ title }}!\n    </h1>\n  <img width=\"300\" alt=\"Angular Logo\" src=\"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNTAgMjUwIj4KICAgIDxwYXRoIGZpbGw9IiNERDAwMzEiIGQ9Ik0xMjUgMzBMMzEuOSA2My4ybDE0LjIgMTIzLjFMMTI1IDIzMGw3OC45LTQzLjcgMTQuMi0xMjMuMXoiIC8+CiAgICA8cGF0aCBmaWxsPSIjQzMwMDJGIiBkPSJNMTI1IDMwdjIyLjItLjFWMjMwbDc4LjktNDMuNyAxNC4yLTEyMy4xTDEyNSAzMHoiIC8+CiAgICA8cGF0aCAgZmlsbD0iI0ZGRkZGRiIgZD0iTTEyNSA1Mi4xTDY2LjggMTgyLjZoMjEuN2wxMS43LTI5LjJoNDkuNGwxMS43IDI5LjJIMTgzTDEyNSA1Mi4xem0xNyA4My4zaC0zNGwxNy00MC45IDE3IDQwLjl6IiAvPgogIDwvc3ZnPg==\">\n  </div> -->\n  <!-- <div class=\"container\">hola\n    <section></section>\n  </div> -->\n"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./header/header.component */ "./src/app/header/header.component.ts");
/* harmony import */ var _main_main_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./main/main.component */ "./src/app/main/main.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"],
                _header_header_component__WEBPACK_IMPORTED_MODULE_3__["HeaderComponent"],
                _main_main_component__WEBPACK_IMPORTED_MODULE_4__["MainComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/header/header.component.css":
/*!*********************************************!*\
  !*** ./src/app/header/header.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".col-title{\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n}\r\n\r\n.img1{\r\n  width: 150px;\r\n  height: 110px;\r\n  margin:10px;\r\n}\r\n\r\n.img2{\r\n  width: 120px;\r\n  height: 150px;\r\n  margin:10px;\r\n}\r\n\r\nh1{\r\n  font-size: 60px;\r\n  line-height: 100px;\r\n  font-family: 'Fredoka One', cursive;\r\n  color: rgb(34, 34, 71)\r\n}"

/***/ }),

/***/ "./src/app/header/header.component.html":
/*!**********************************************!*\
  !*** ./src/app/header/header.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n  <div class=\"row\">\r\n    <div class=\"col-12 col-title\">\r\n      <img class=\"img1\" src=\"../../assets/images/naipe-rojo.png\" alt=\"\">\r\n      <h1 class=\"text-center\">{{ title }}</h1>\r\n      <img class=\"img2\" src=\"../../assets/images/naipe-azul.png\" alt=\"\">\r\n    </div>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/header/header.component.ts":
/*!********************************************!*\
  !*** ./src/app/header/header.component.ts ***!
  \********************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var HeaderComponent = /** @class */ (function () {
    function HeaderComponent() {
        this.title = 'Juego de Memoria';
    }
    HeaderComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'header',
            template: __webpack_require__(/*! ./header.component.html */ "./src/app/header/header.component.html"),
            styles: [__webpack_require__(/*! ./header.component.css */ "./src/app/header/header.component.css")]
        })
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/main/main.component.css":
/*!*****************************************!*\
  !*** ./src/app/main/main.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "nav{\r\n  height:100%;\r\n  margin:0 0 10px 0;\r\n}\r\n\r\n.red{\r\n  border: 1px solid red;\r\n}\r\n\r\nnav img{\r\n  width: 30px;\r\n  height: 30px;\r\n}\r\n\r\nnav button{\r\n  margin:0 10px;\r\n  padding: 5px 20px;\r\n  color:white;\r\n  font-weight: bold;\r\n}\r\n\r\nh2{\r\n  margin: 70px 0 10px 0;\r\n}\r\n\r\nsection{\r\n  background: black;\r\n}\r\n\r\n.figure{\r\n  margin: 20px 0 0 0;\r\n  height: 40vh;\r\n}\r\n\r\n.figure img{\r\n  height: 230px;\r\n  width: 300px;\r\n}\r\n\r\n.container-cards{\r\n  padding: 20px 0 0 0;\r\n  height:40vh;\r\n}\r\n\r\n.container-cards figure{\r\n  width:120px ;\r\n  height:130px ;\r\n}\r\n\r\n.container-cards img{\r\n  width:120px ;\r\n  height:130px ;\r\n  border-radius: 10px;\r\n}"

/***/ }),

/***/ "./src/app/main/main.component.html":
/*!******************************************!*\
  !*** ./src/app/main/main.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav>\r\n  <div class=\"container\">\r\n    <div class=\"row\">\r\n      <div class=\"col-12 text-center\">\r\n        <img class=\"img-responsive\" src=\"../../assets/images/corazon.png\" alt=\"\">\r\n        <img class=\"img-responsive\" src=\"../../assets/images/espada.png\" alt=\"\">\r\n        <button (click)=\"start()\"class=\"btn btn-danger\">{{ button[0] }}</button>\r\n        <img class=\"img-responsive\" src=\"../../assets/images/diamante.png\" alt=\"\">\r\n        <img class=\"img-responsive\" src=\"../../assets/images/trebol.png\" alt=\"\">\r\n        <button (click)=\"end()\" class=\"btn btn-danger\">{{ button[1] }}</button>\r\n        <img class=\"img-responsive\" src=\"../../assets/images/corazon.png\" alt=\"\">\r\n        <img class=\"img-responsive\" src=\"../../assets/images/espada.png\" alt=\"\">\r\n      </div>\r\n    </div>\r\n  </div>\r\n</nav>\r\n\r\n<section>\r\n  <div class=\"container\">\r\n    <div class=\"row\">\r\n      <div class=\"col-12 text-center\">\r\n        <h2 *ngIf=\"option === 0\">{{ subtitle[0] }}</h2>\r\n        <h2 *ngIf=\"option === 1\">{{ subtitle[1] }}</h2>\r\n        <h2 *ngIf=\"option === 2\">{{ subtitle[2] }}</h2>\r\n        <h2 *ngIf=\"option === 3\">{{ subtitle[3] }}</h2>\r\n       \r\n        <div class=\"container-cards\" [hidden]=\"state\">\r\n          <img [hidden]=\"state1\" (click)=\"found(img1)\" #img1 class=\"col-3 img-responsive img\" [src]=\"url\" alt=\"1\">\r\n          <img [hidden]=\"!state1\" (click)=\"found(img1)\"  #img1 class=\"col-3 img-responsive img\" [src]=\"url0\" alt=\"1\">\r\n\r\n          <img [hidden]=\"state2\" (click)=\"found(img2)\" #img2 class=\"col-3 img-responsive img\" [src]=\"url\" alt=\"2\" [attr.data2]=\"a\">\r\n          <img [hidden]=\"!state2\" (click)=\"found(img2)\" #img2 class=\"col-3 img-responsive img\" [src]=\"url0\" alt=\"2\">\r\n\r\n          <img [hidden]=\"state3\" (click)=\"found(img3)\" #img3 class=\"col-3 img-responsive img\" [src]=\"url\" alt=\"3\">\r\n          <img [hidden]=\"!state3\" (click)=\"found(img3)\" #img3 class=\"col-3 img-responsive img\" [src]=\"url1\" alt=\"3\">\r\n\r\n          <img [hidden]=\"state4\" (click)=\"found(img4)\" #img4 class=\"col-3 img-responsive img\" [src]=\"url\" alt=\"4\">\r\n          <img [hidden]=\"!state4\" (click)=\"found(img4)\" #img4 class=\"col-3 img-responsive img\" [src]=\"url1\" alt=\"4\">\r\n\r\n          <img [hidden]=\"state5\" (click)=\"found(img5)\" #img5 class=\"col-3 img-responsive img\" [src]=\"url\" alt=\"5\">\r\n          <img [hidden]=\"!state5\" (click)=\"found(img5)\" #img5 class=\"col-3 img-responsive img\" [src]=\"url2\" alt=\"5\">\r\n\r\n          <img [hidden]=\"state6\" (click)=\"found(img6)\" #img6 class=\"col-3 img-responsive img\" [src]=\"url\" alt=\"6\">\r\n          <img [hidden]=\"!state6\" (click)=\"found(img6)\" #img6 class=\"col-3 img-responsive img\" [src]=\"url2\" alt=\"6\">\r\n\r\n          <img [hidden]=\"state7\" (click)=\"found(img7)\" #img7 class=\"col-3 img-responsive img\" [src]=\"url\" alt=\"7\">\r\n          <img [hidden]=\"!state7\" (click)=\"found(img7)\" #img7 class=\"col-3 img-responsive img\" [src]=\"url3\" alt=\"7\">\r\n\r\n          <img [hidden]=\"state8\" (click)=\"found(img8)\" #img8 class=\"col-3 img-responsive img\" [src]=\"url\" alt=\"8\">\r\n          <img [hidden]=\"!state8\" (click)=\"found(img8)\" #img8 class=\"col-3 img-responsive img\" [src]=\"url3\" alt=\"8\">\r\n        </div>\r\n\r\n        <div class=\"text-center figure\" [hidden]=\"!state\">\r\n          <img class=\"img-responsive\" src=\"../../assets/images/init-end.gif\" alt=\"\">\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</section>\r\n\r\n"

/***/ }),

/***/ "./src/app/main/main.component.ts":
/*!****************************************!*\
  !*** ./src/app/main/main.component.ts ***!
  \****************************************/
/*! exports provided: MainComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainComponent", function() { return MainComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var MainComponent = /** @class */ (function () {
    function MainComponent() {
        this.altValue = '';
        this.altValue2 = '';
        this.subtitle = [
            'presiona START para empezar a jugar',
            'Encuentra el par que tenga el mismo número y el mismo palo',
            'Ganaste! excelente jugada',
            'Ups perdiste! inténtalo denuevo'
        ],
            this.option = 0;
        this.button = [
            'Start',
            'End'
        ],
            this.state = true;
        this.cards = [
            '../../assets/images/1c.jpg',
            '../../assets/images/2c.jpg',
            '../../assets/images/3c.jpg',
            '../../assets/images/4c.jpg',
            '../../assets/images/5c.jpg',
            '../../assets/images/6c.jpg',
            '../../assets/images/7c.jpg',
            '../../assets/images/8c.jpg',
            '../../assets/images/9c.jpg',
            '../../assets/images/10c.jpg',
            '../../assets/images/jc.jpg',
            '../../assets/images/qc.jpg',
            '../../assets/images/kc.jpg',
            '../../assets/images/1e.jpg',
            '../../assets/images/2e.png',
            '../../assets/images/3e.jpg',
            '../../assets/images/4e.jpg',
            '../../assets/images/5e.jpg',
            '../../assets/images/6e.jpg',
            '../../assets/images/7e.jpg',
            '../../assets/images/8e.jpg',
            '../../assets/images/9e.jpg',
            '../../assets/images/10e.jpg',
            '../../assets/images/je.jpg',
            '../../assets/images/qe.jpg',
            '../../assets/images/ke.jpg',
            '../../assets/images/1d.jpg',
            '../../assets/images/2d.jpg',
            '../../assets/images/3d.jpg',
            '../../assets/images/4d.jpg',
            '../../assets/images/5d.jpg',
            '../../assets/images/6d.jpg',
            '../../assets/images/7d.jpg',
            '../../assets/images/8d.jpg',
            '../../assets/images/9d.jpg',
            '../../assets/images/10d.jpg',
            '../../assets/images/jd.jpg',
            '../../assets/images/qd.jpg',
            '../../assets/images/kd.jpg',
            '../../assets/images/1t.jpg',
            '../../assets/images/2t.jpg',
            '../../assets/images/3t.jpg',
            '../../assets/images/4t.jpg',
            '../../assets/images/5t.jpg',
            '../../assets/images/6t.jpg',
            '../../assets/images/7t.jpg',
            '../../assets/images/8t.jpg',
            '../../assets/images/9t.jpg',
            '../../assets/images/10t.jpg',
            '../../assets/images/jt.jpg',
            '../../assets/images/qt.jpg',
            '../../assets/images/kt.jpg',
        ];
    }
    MainComponent.prototype.start = function () {
        this.state = false;
        this.option = 1;
        this.state1 = false;
        this.state2 = false;
        this.state3 = false;
        this.state4 = false;
        this.state5 = false;
        this.state6 = false;
        this.state7 = false;
        this.state8 = false;
        this.url = '../../assets/images/sello.jpg';
        var i = Math.floor(Math.random() * (51 - 0)) + 0;
        this.url0 = this.cards[i];
        console.log(this.url0);
        var j = Math.floor(Math.random() * (51 - 0)) + 0;
        this.url1 = this.cards[j];
        console.log(this.url1);
        var k = Math.floor(Math.random() * (51 - 0)) + 0;
        this.url2 = this.cards[k];
        console.log(this.url2);
        var l = Math.floor(Math.random() * (51 - 0)) + 0;
        this.url3 = this.cards[l];
        console.log(this.url3);
    };
    MainComponent.prototype.found = function (img) {
        this.altValue = img.alt;
        console.log(this.altValue);
        if (this.altValue === '1') {
            this.state1 = true;
        }
        if (this.altValue === '2') {
            this.state2 = true;
        }
        if (this.altValue === '3') {
            this.state3 = true;
        }
        if (this.altValue === '4') {
            this.state4 = true;
        }
        if (this.altValue === '5') {
            this.state5 = true;
        }
        if (this.altValue === '6') {
            this.state6 = true;
        }
        if (this.altValue === '7') {
            this.state7 = true;
        }
        if (this.altValue === '8') {
            this.state8 = true;
        }
    };
    MainComponent.prototype.end = function () {
        alert('¿QUIERES ABANDONAR EL JUEGO?,presiona ACEPTAR para dejar de jugar');
        this.option = 0;
        this.state = true;
    };
    MainComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'main',
            template: __webpack_require__(/*! ./main.component.html */ "./src/app/main/main.component.html"),
            styles: [__webpack_require__(/*! ./main.component.css */ "./src/app/main/main.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], MainComponent);
    return MainComponent;
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
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


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
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\selva\Desktop\play-memory-app\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map