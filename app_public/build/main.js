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
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/about/about.component.css":
/*!*******************************************!*\
  !*** ./src/app/about/about.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Fib3V0L2Fib3V0LmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/about/about.component.html":
/*!********************************************!*\
  !*** ./src/app/about/about.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-page-header [content]=\"pageContent.header\"></app-page-header>\r\n<div class=\"row\">\r\n  <div class=\"col-12 col-lg-8\" [innerHTML]=\"pageContent.content | htmlLineBreaks\"></div>\r\n\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/about/about.component.ts":
/*!******************************************!*\
  !*** ./src/app/about/about.component.ts ***!
  \******************************************/
/*! exports provided: AboutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutComponent", function() { return AboutComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AboutComponent = /** @class */ (function () {
    function AboutComponent() {
        this.pageContent = {
            header: {
                title: 'About Loc8r',
                strapline: ''
            },
            content: "Loc8r was created to help people find places to sit\n    down and get a bit of work done.\\n\\nLorem ipsum dolor sit\n    amet, consectetur adipiscing elit.'\n    "
        };
    }
    AboutComponent.prototype.ngOnInit = function () {
    };
    AboutComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-about',
            template: __webpack_require__(/*! ./about.component.html */ "./src/app/about/about.component.html"),
            styles: [__webpack_require__(/*! ./about.component.css */ "./src/app/about/about.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], AboutComponent);
    return AboutComponent;
}());



/***/ }),

/***/ "./src/app/app-routing/app-routing.module.ts":
/*!***************************************************!*\
  !*** ./src/app/app-routing/app-routing.module.ts ***!
  \***************************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _homepage_homepage_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../homepage/homepage.component */ "./src/app/homepage/homepage.component.ts");
/* harmony import */ var _about_about_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../about/about.component */ "./src/app/about/about.component.ts");
/* harmony import */ var _details_page_details_page_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../details-page/details-page.component */ "./src/app/details-page/details-page.component.ts");







var routes = [
    {
        path: "",
        component: _homepage_homepage_component__WEBPACK_IMPORTED_MODULE_4__["HomepageComponent"]
    },
    {
        path: "about",
        component: _about_about_component__WEBPACK_IMPORTED_MODULE_5__["AboutComponent"]
    },
    {
        path: "location/:locationId",
        component: _details_page_details_page_component__WEBPACK_IMPORTED_MODULE_6__["DetailsPageComponent"]
    }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forRoot(routes)
            ],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
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
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _app_routing_app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-routing/app-routing.module */ "./src/app/app-routing/app-routing.module.ts");
/* harmony import */ var _home_list_home_list_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./home-list/home-list.component */ "./src/app/home-list/home-list.component.ts");
/* harmony import */ var _distance_pipe__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./distance.pipe */ "./src/app/distance.pipe.ts");
/* harmony import */ var _framework_framework_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./framework/framework.component */ "./src/app/framework/framework.component.ts");
/* harmony import */ var _about_about_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./about/about.component */ "./src/app/about/about.component.ts");
/* harmony import */ var _homepage_homepage_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./homepage/homepage.component */ "./src/app/homepage/homepage.component.ts");
/* harmony import */ var _page_header_page_header_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./page-header/page-header.component */ "./src/app/page-header/page-header.component.ts");
/* harmony import */ var _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./sidebar/sidebar.component */ "./src/app/sidebar/sidebar.component.ts");
/* harmony import */ var _html_line_breaks_pipe__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./html-line-breaks.pipe */ "./src/app/html-line-breaks.pipe.ts");
/* harmony import */ var _rating_stars_rating_stars_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./rating-stars/rating-stars.component */ "./src/app/rating-stars/rating-stars.component.ts");
/* harmony import */ var _details_page_details_page_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./details-page/details-page.component */ "./src/app/details-page/details-page.component.ts");
/* harmony import */ var _location_details_location_details_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./location-details/location-details.component */ "./src/app/location-details/location-details.component.ts");
/* harmony import */ var _most_recent_first_pipe__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./most-recent-first.pipe */ "./src/app/most-recent-first.pipe.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");


















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _home_list_home_list_component__WEBPACK_IMPORTED_MODULE_5__["HomeListComponent"],
                _distance_pipe__WEBPACK_IMPORTED_MODULE_6__["DistancePipe"],
                _framework_framework_component__WEBPACK_IMPORTED_MODULE_7__["FrameworkComponent"],
                _about_about_component__WEBPACK_IMPORTED_MODULE_8__["AboutComponent"],
                _homepage_homepage_component__WEBPACK_IMPORTED_MODULE_9__["HomepageComponent"],
                _page_header_page_header_component__WEBPACK_IMPORTED_MODULE_10__["PageHeaderComponent"],
                _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_11__["SidebarComponent"],
                _html_line_breaks_pipe__WEBPACK_IMPORTED_MODULE_12__["HtmlLineBreaksPipe"],
                _rating_stars_rating_stars_component__WEBPACK_IMPORTED_MODULE_13__["RatingStarsComponent"],
                _details_page_details_page_component__WEBPACK_IMPORTED_MODULE_14__["DetailsPageComponent"],
                _location_details_location_details_component__WEBPACK_IMPORTED_MODULE_15__["LocationDetailsComponent"],
                _most_recent_first_pipe__WEBPACK_IMPORTED_MODULE_16__["MostRecentFirstPipe"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_17__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_17__["ReactiveFormsModule"],
                _app_routing_app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"]
            ],
            providers: [],
            bootstrap: [_framework_framework_component__WEBPACK_IMPORTED_MODULE_7__["FrameworkComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/details-page/details-page.component.css":
/*!*********************************************************!*\
  !*** ./src/app/details-page/details-page.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2RldGFpbHMtcGFnZS9kZXRhaWxzLXBhZ2UuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/details-page/details-page.component.html":
/*!**********************************************************!*\
  !*** ./src/app/details-page/details-page.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-page-header [content]=\"pageContent.header\"></app-page-header>\r\n<div class=\"row\">\r\n  <div class=\"col12 col-md-8\">\r\n    <app-location-details *ngIf=\"newLocation\" [location]=\"newLocation\"></app-location-details>\r\n  </div>\r\n  <app-sidebar class=\"col-12 col-md-4\" [content]=\"pageContent.sidebar\"></app-sidebar>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/details-page/details-page.component.ts":
/*!********************************************************!*\
  !*** ./src/app/details-page/details-page.component.ts ***!
  \********************************************************/
/*! exports provided: DetailsPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetailsPageComponent", function() { return DetailsPageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _loc8r_data_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../loc8r-data.service */ "./src/app/loc8r-data.service.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");





var DetailsPageComponent = /** @class */ (function () {
    function DetailsPageComponent(loc8rDataService, route) {
        this.loc8rDataService = loc8rDataService;
        this.route = route;
        this.pageContent = {
            header: {
                title: '',
                strapline: ''
            },
            sidebar: ''
        };
    }
    DetailsPageComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.paramMap
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["switchMap"])(function (params) {
            var id = params.get('locationId');
            return _this.loc8rDataService.getLocationById(id);
        }))
            .subscribe(function (newLocation) {
            _this.newLocation = newLocation;
            _this.pageContent.header.title = newLocation.name;
            _this.pageContent.sidebar = newLocation.name + " is on Loc8r\n      because it has accessible wifi and space to sit down with\n      your laptop and get some work done.\n\nIf you've been and\n      you like it - or if you don't - please leave a review to\n      help other people just like you.";
        });
    };
    DetailsPageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-details-page',
            template: __webpack_require__(/*! ./details-page.component.html */ "./src/app/details-page/details-page.component.html"),
            styles: [__webpack_require__(/*! ./details-page.component.css */ "./src/app/details-page/details-page.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_loc8r_data_service__WEBPACK_IMPORTED_MODULE_3__["Loc8rDataService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])
    ], DetailsPageComponent);
    return DetailsPageComponent;
}());



/***/ }),

/***/ "./src/app/distance.pipe.ts":
/*!**********************************!*\
  !*** ./src/app/distance.pipe.ts ***!
  \**********************************/
/*! exports provided: DistancePipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DistancePipe", function() { return DistancePipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var DistancePipe = /** @class */ (function () {
    function DistancePipe() {
    }
    DistancePipe.prototype.transform = function (distance) {
        var isNumeric = function (n) {
            return !isNaN(parseFloat(n)) && isFinite(n);
        };
        if (distance && isNumeric(distance)) {
            var thisDistance = '0';
            var unit = 'm';
            if (distance > 1000) {
                thisDistance = (distance / 1000).toFixed(1);
                unit = 'km';
            }
            else {
                thisDistance = Math.floor(distance).toString();
            }
            return thisDistance + unit;
        }
        else {
            return '?';
        }
    };
    DistancePipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
            name: 'distance'
        })
    ], DistancePipe);
    return DistancePipe;
}());



/***/ }),

/***/ "./src/app/framework/framework.component.css":
/*!***************************************************!*\
  !*** ./src/app/framework/framework.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2ZyYW1ld29yay9mcmFtZXdvcmsuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/framework/framework.component.html":
/*!****************************************************!*\
  !*** ./src/app/framework/framework.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar fixed-top navbar-expand-md navbar-light\">\r\n  <div class=\"container\">\r\n    <a routerLink=\"\" class=\"navbar-brand\">Loc8r</a>\r\n    <button type=\"button\" data-toggle=\"collapse\" data-target=\r\n      \"#navbarMain\"class=\"navbar-toggler\">\r\n      <span class=\"navbar-toggler-icon\"></span>\r\n    </button>\r\n\r\n    <div id=\"navbarMain\" class=\"navbar-collapse collapse\">\r\n      <ul class=\"navbar-nav mr-auto\">\r\n        <li class=\"nav-item\">\r\n          <a routerLink=\"about\" routerLinkActive=\"active\" class=\"nav-link\">About</a>\r\n\r\n        </li>\r\n      </ul>\r\n    </div>\r\n  </div>\r\n</nav>\r\n<div class=\"container content\">\r\n  <router-outlet></router-outlet>\r\n  <footer>\r\n    <div class=\"row\">\r\n      <div class=\"col-12\">\r\n        <small>&copy; Getting Mean - Simon Holmes/Clive Harber 2018</small>\r\n      </div>\r\n    </div>\r\n  </footer>\r\n</div>\r\n\r\n"

/***/ }),

/***/ "./src/app/framework/framework.component.ts":
/*!**************************************************!*\
  !*** ./src/app/framework/framework.component.ts ***!
  \**************************************************/
/*! exports provided: FrameworkComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FrameworkComponent", function() { return FrameworkComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var FrameworkComponent = /** @class */ (function () {
    function FrameworkComponent() {
    }
    FrameworkComponent.prototype.ngOnInit = function () {
    };
    FrameworkComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-framework',
            template: __webpack_require__(/*! ./framework.component.html */ "./src/app/framework/framework.component.html"),
            styles: [__webpack_require__(/*! ./framework.component.css */ "./src/app/framework/framework.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], FrameworkComponent);
    return FrameworkComponent;
}());



/***/ }),

/***/ "./src/app/geolocation.service.ts":
/*!****************************************!*\
  !*** ./src/app/geolocation.service.ts ***!
  \****************************************/
/*! exports provided: GeolocationService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GeolocationService", function() { return GeolocationService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var GeolocationService = /** @class */ (function () {
    function GeolocationService() {
    }
    GeolocationService.prototype.getPosition = function (cbSuccess, cbError, cbNoGeo) {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(cbSuccess, cbError);
        }
        else {
            cbNoGeo();
        }
    };
    GeolocationService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], GeolocationService);
    return GeolocationService;
}());



/***/ }),

/***/ "./src/app/home-list/home-list.component.css":
/*!***************************************************!*\
  !*** ./src/app/home-list/home-list.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hvbWUtbGlzdC9ob21lLWxpc3QuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/home-list/home-list.component.html":
/*!****************************************************!*\
  !*** ./src/app/home-list/home-list.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"error\">{{message}}</div>\r\n<div *ngFor=\"let location of locations\" class=\"card\">\r\n  <div  class=\"card-block\">\r\n    <h4>\r\n      <a href=\"/location/{{location.id}}\">{{location.name}}</a>&nbsp;\r\n      <app-rating-stars [rating]=\"location.rating\"></app-rating-stars>\r\n      <span class=\"badge badge-pill badge-default float-right\">{{location.distance | distance}}</span>\r\n    </h4>\r\n  </div>\r\n  <p class=\"address\">{{location.address}}</p>\r\n  <div class=\"facilities\">\r\n    <span *ngFor=\"let facility of location.facilities\" class=\"badge badge-warning\" >{{facility}}</span>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/home-list/home-list.component.ts":
/*!**************************************************!*\
  !*** ./src/app/home-list/home-list.component.ts ***!
  \**************************************************/
/*! exports provided: HomeListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeListComponent", function() { return HomeListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _loc8r_data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../loc8r-data.service */ "./src/app/loc8r-data.service.ts");
/* harmony import */ var _geolocation_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../geolocation.service */ "./src/app/geolocation.service.ts");




var HomeListComponent = /** @class */ (function () {
    function HomeListComponent(loc8rDataService, geolocationService) {
        this.loc8rDataService = loc8rDataService;
        this.geolocationService = geolocationService;
        this.message = "";
    }
    HomeListComponent.prototype.ngOnInit = function () {
        this.getPosition();
    };
    HomeListComponent.prototype.getPosition = function () {
        this.message = 'Getting geolocation service ...';
        this.geolocationService.getPosition(this.getLocations.bind(this), this.showError.bind(this), this.noGeo.bind(this));
    };
    HomeListComponent.prototype.getLocations = function (position) {
        var _this = this;
        this.message = 'Searching for nerby places';
        console.dir(position);
        var lat = position.coords.latitude;
        var lng = position.coords.longitude;
        this.loc8rDataService
            .getLocations(lat, lng)
            .then(function (foundLocations) {
            _this.message = foundLocations.length > 0 ? '' : 'No location found';
            _this.locations = foundLocations;
        });
    };
    HomeListComponent.prototype.showError = function (error) {
        this.message = error.message;
    };
    HomeListComponent.prototype.noGeo = function () {
        this.message = 'Geolocation not supported by this browser';
    };
    HomeListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-home-list',
            template: __webpack_require__(/*! ./home-list.component.html */ "./src/app/home-list/home-list.component.html"),
            styles: [__webpack_require__(/*! ./home-list.component.css */ "./src/app/home-list/home-list.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_loc8r_data_service__WEBPACK_IMPORTED_MODULE_2__["Loc8rDataService"], _geolocation_service__WEBPACK_IMPORTED_MODULE_3__["GeolocationService"]])
    ], HomeListComponent);
    return HomeListComponent;
}());



/***/ }),

/***/ "./src/app/homepage/homepage.component.css":
/*!*************************************************!*\
  !*** ./src/app/homepage/homepage.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hvbWVwYWdlL2hvbWVwYWdlLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/homepage/homepage.component.html":
/*!**************************************************!*\
  !*** ./src/app/homepage/homepage.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n<app-page-header [content]=\"pageContent.header\"></app-page-header>\r\n<div class=\"row\">\r\n  <div class=\"col-12 col-md-8\">\r\n    <div class=\"error\"></div>\r\n    <app-home-list></app-home-list>\r\n  </div>\r\n\r\n  <app-sidebar [content]=\"pageContent.sidebar\" class=\"col-12 col-md-4\"></app-sidebar>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/homepage/homepage.component.ts":
/*!************************************************!*\
  !*** ./src/app/homepage/homepage.component.ts ***!
  \************************************************/
/*! exports provided: HomepageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomepageComponent", function() { return HomepageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var HomepageComponent = /** @class */ (function () {
    function HomepageComponent() {
        this.pageContent = {
            header: {
                title: "Loc8r",
                strapline: 'Find places to work with wifi near you!',
            },
            sidebar: "Looking for wifi and a seat? Loc8r helps you\n" +
                "    find places to work when out and about. Perhaps with coffee,\n" +
                "    cake or a pint? Let Loc8r help you find the place you're\n" +
                "    looking for."
        };
    }
    HomepageComponent.prototype.ngOnInit = function () {
    };
    HomepageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-homepage',
            template: __webpack_require__(/*! ./homepage.component.html */ "./src/app/homepage/homepage.component.html"),
            styles: [__webpack_require__(/*! ./homepage.component.css */ "./src/app/homepage/homepage.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], HomepageComponent);
    return HomepageComponent;
}());



/***/ }),

/***/ "./src/app/html-line-breaks.pipe.ts":
/*!******************************************!*\
  !*** ./src/app/html-line-breaks.pipe.ts ***!
  \******************************************/
/*! exports provided: HtmlLineBreaksPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HtmlLineBreaksPipe", function() { return HtmlLineBreaksPipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var HtmlLineBreaksPipe = /** @class */ (function () {
    function HtmlLineBreaksPipe() {
    }
    HtmlLineBreaksPipe.prototype.transform = function (text, args) {
        return text.replace(/\n/g, '<br />');
    };
    HtmlLineBreaksPipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
            name: 'htmlLineBreaks'
        })
    ], HtmlLineBreaksPipe);
    return HtmlLineBreaksPipe;
}());



/***/ }),

/***/ "./src/app/loc8r-data.service.ts":
/*!***************************************!*\
  !*** ./src/app/loc8r-data.service.ts ***!
  \***************************************/
/*! exports provided: Loc8rDataService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Loc8rDataService", function() { return Loc8rDataService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../environments/environment */ "./src/environments/environment.ts");




var Loc8rDataService = /** @class */ (function () {
    function Loc8rDataService(http) {
        this.http = http;
        this.baseApiUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].baseApiUrl; //"http://localhost:3000/api";
    }
    Loc8rDataService.prototype.getLocations = function (lat, lng) {
        // const lng: number = -0.969758;
        // const lat: number = 51.551342;
        var maxDistance = 10;
        var url = this.baseApiUrl + "/locations?lng=" + lng + "&lat=" + lat + "&maxDistance=" + maxDistance;
        console.log("getLocations " + url);
        return this.http
            .get(url)
            .toPromise()
            .then(function (response) { return response; })
            .catch(this.handleError);
    };
    Loc8rDataService.prototype.handleError = function (error) {
        console.error('Error something wrong', error);
        return Promise.reject(error.message || error);
    };
    Loc8rDataService.prototype.getLocationById = function (locationId) {
        var url = this.baseApiUrl + "/locations/" + locationId;
        console.log("getLocation " + url);
        return this.http
            .get(url)
            .toPromise()
            .then(function (response) { return response; })
            .catch(this.handleError);
    };
    Loc8rDataService.prototype.addReviewByLocationId = function (locationId, review) {
        var url = this.baseApiUrl + "/locations/" + locationId + "/reviews";
        return this.http
            .post(url, review)
            .toPromise()
            .then(function (review) { return review; })
            .catch(this.handleError);
    };
    Loc8rDataService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], Loc8rDataService);
    return Loc8rDataService;
}());



/***/ }),

/***/ "./src/app/location-details/location-details.component.css":
/*!*****************************************************************!*\
  !*** ./src/app/location-details/location-details.component.css ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xvY2F0aW9uLWRldGFpbHMvbG9jYXRpb24tZGV0YWlscy5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/location-details/location-details.component.html":
/*!******************************************************************!*\
  !*** ./src/app/location-details/location-details.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--\r\n<p>\r\n{{location | json}}\r\n</p>\r\n-->\r\n<div class=\"row\">\r\n  <div class=\"col-12 col-md-6\">\r\n    <app-rating-stars [rating]=\"location.rating\"></app-rating-stars>\r\n    <p>{{location.address}}</p>\r\n    <div class=\"card card-primary\">\r\n      <div class=\"card-block\">\r\n        <h2 class=\"card-title\">Opening hours</h2>\r\n        <p class=\"card-text\" *ngFor=\"let time of location.openingTimes\" [ngSwitch]=\"time.closed\">\r\n          {{time.days}}\r\n          <span *ngSwitchCase=\"true\">Closed</span>\r\n          <span *ngSwitchDefault>{{time.opening + \" - \" + time.closing}}</span>\r\n        </p>\r\n      </div>\r\n    </div>\r\n    <div class=\"card card-primary\">\r\n      <div class=\"card-block\">\r\n        <h2 class=\"card-title\">Facilities</h2>\r\n        <span *ngFor=\"let facility of location.facilities\">\r\n          <span class=\"badge badge-warning mr-2\">\r\n            <i class=\"fa fa-check mr-1\"></i>\r\n            {{facility}}\r\n          </span>\r\n        </span>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div class=\"col-12 col-md-6 location-map\">\r\n    <div class=\"card card-primary\">\r\n      <div class=\"card-block\">\r\n        <h2 class=\"card-title\">Location map</h2>\r\n        <img\r\n          src=\"http://maps.googleapis.com/maps/api/staticmap?center={{location.coords[1]}},{{location.coords[0]}}&zoom=15&size=400x350&sensor=false&markers={{location.coords[1]}},{{location.coords[0]}}&scale=1.8&key={{googleApiKey}}\"\r\n          alt=\"\" class=\"img-fluid rounded\"></div>\r\n    </div>\r\n  </div>\r\n</div>\r\n<div class=\"row\">\r\n  <div class=\"col-12\">\r\n    <div class=\"card card-primary review-card\">\r\n      <div class=\"card-block\">\r\n<!--\r\n        <a href=\"/location/{{location.id}}/review/new\" class=\"btn btn-primary float-right\">Add review</a>\r\n-->\r\n        <button (click)=\"formVisible=true\" class=\"btn btn-primary float-right\">Add review</button>\r\n        <h2 class=\"card-title\">Customer reviews</h2>\r\n        <div *ngIf=\"formVisible\">\r\n          <form action=\"\" (ngSubmit)=\"onReviewSubmit()\">\r\n            <hr>\r\n            <h4>Add your review</h4>\r\n            <div *ngIf=\"formError\" class=\"alert alert-danger\" role=\"alert\">\r\n              {{formError}}\r\n            </div>\r\n            <div class=\"form-group row\">\r\n              <label for=\"name\" class=\"col-sm-2 col-form-label\">Name</label>\r\n              <div class=\"col-sm-10\">\r\n                <input [(ngModel)]=\"newReview.author\" id=\"name\" name=\"name\" required=\"required\" class=\"form-control\">\r\n              </div>\r\n            </div>\r\n            <div class=\"form-group row\">\r\n              <label for=\"rating\" class=\"col-sm-2 col-form-label\">Rating</label>\r\n              <div class=\"col-sm-10 col-md-2\">\r\n                <select [(ngModel)]=\"newReview.rating\" id=\"rating\" name=\"rating\" class=\"form-control\">\r\n                  <option [ngValue]=\"5\">5</option>\r\n                  <option [ngValue]=\"4\">4</option>\r\n                  <option [ngValue]=\"3\">3</option>\r\n                  <option [ngValue]=\"2\">2</option>\r\n                  <option [ngValue]=\"1\">1</option>\r\n                </select>\r\n              </div>\r\n            </div>\r\n            <div class=\"form-group row\">\r\n              <label for=\"review\" class=\"col-sm-2 col-form-label\">Review</label>\r\n              <div class=\"col-sm-10\">\r\n                  <textarea [(ngModel)]=\"newReview.reviewText\" name=\"review\" id=\"review\" rows=\"5\" class=\"form-control\"></textarea>\r\n              </div>\r\n            </div>\r\n            <div class=\"form-group row\">\r\n              <div class=\"col-12\">\r\n                <button type=\"submit\" class=\"btn btn-primary float-right\"\r\n                        style=\"margin-left:15px\">Submit review</button>\r\n                <button (click)=\"formVisible=false\" type=\"button\" class=\"btn btn-default float-right\">Cancel</button>\r\n              </div>\r\n            </div>\r\n            <hr>\r\n          </form>\r\n        </div>\r\n\r\n        <div *ngFor=\"let review of location.reviews | mostRecentFirst\" class=\"row review\">\r\n          <div class=\"col-12 no-guters review-header\">\r\n            <app-rating-stars [rating]=\"review.rating\" class=\"mr-2\"></app-rating-stars>\r\n            <span class=\"reviewAuthor mr-3\">{{review.author}}</span>\r\n            <small class=\"reviewTimestamp\">{{review.createdOn | date: 'd MMMM yyyy'}}</small>\r\n          </div>\r\n          <div class=\"col-12\">\r\n            <p [innerHTML]=\"review.reviewText | htmlLineBreaks\"></p>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/location-details/location-details.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/location-details/location-details.component.ts ***!
  \****************************************************************/
/*! exports provided: LocationDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LocationDetailsComponent", function() { return LocationDetailsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _loc8r_data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../loc8r-data.service */ "./src/app/loc8r-data.service.ts");
/* harmony import */ var _location__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../location */ "./src/app/location.ts");




var LocationDetailsComponent = /** @class */ (function () {
    function LocationDetailsComponent(loc8rDataService) {
        this.loc8rDataService = loc8rDataService;
        this.googleApiKey = "AIzaSyB8ZfaJ79cVCWKdpT0SNx_iXhLmvM75QN4";
        this.newReview = {
            author: '',
            rating: 5,
            reviewText: ''
        };
        this.formVisible = false;
    }
    LocationDetailsComponent.prototype.ngOnInit = function () {
    };
    LocationDetailsComponent.prototype.formIsValid = function () {
        if (this.newReview.reviewText && this.newReview.author && this.newReview.rating) {
            return true;
        }
        return false;
    };
    LocationDetailsComponent.prototype.onReviewSubmit = function () {
        var _this = this;
        this.formError = '';
        if (this.formIsValid()) {
            console.log(this.newReview);
            this.loc8rDataService.addReviewByLocationId(this.location._id, this.newReview)
                .then(function (review) {
                console.log("review saved");
                var reviews = _this.location.reviews.slice(0);
                reviews.unshift(review);
                _this.location.reviews = reviews;
                _this.resetAndHideRevewForm();
            });
            "";
        }
        else {
            this.formError = 'All fields are required';
        }
    };
    LocationDetailsComponent.prototype.resetAndHideRevewForm = function () {
        this.formVisible = false;
        this.newReview.author = '';
        this.newReview.rating = 5;
        this.newReview.reviewText = '';
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _location__WEBPACK_IMPORTED_MODULE_3__["Location"])
    ], LocationDetailsComponent.prototype, "location", void 0);
    LocationDetailsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-location-details',
            template: __webpack_require__(/*! ./location-details.component.html */ "./src/app/location-details/location-details.component.html"),
            styles: [__webpack_require__(/*! ./location-details.component.css */ "./src/app/location-details/location-details.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_loc8r_data_service__WEBPACK_IMPORTED_MODULE_2__["Loc8rDataService"]])
    ], LocationDetailsComponent);
    return LocationDetailsComponent;
}());



/***/ }),

/***/ "./src/app/location.ts":
/*!*****************************!*\
  !*** ./src/app/location.ts ***!
  \*****************************/
/*! exports provided: Review, Location */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Review", function() { return Review; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Location", function() { return Location; });
var OpeningTimes = /** @class */ (function () {
    function OpeningTimes() {
    }
    return OpeningTimes;
}());
var Review = /** @class */ (function () {
    function Review() {
    }
    return Review;
}());

var Location = /** @class */ (function () {
    function Location() {
    }
    return Location;
}());



/***/ }),

/***/ "./src/app/most-recent-first.pipe.ts":
/*!*******************************************!*\
  !*** ./src/app/most-recent-first.pipe.ts ***!
  \*******************************************/
/*! exports provided: MostRecentFirstPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MostRecentFirstPipe", function() { return MostRecentFirstPipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var MostRecentFirstPipe = /** @class */ (function () {
    function MostRecentFirstPipe() {
    }
    MostRecentFirstPipe.prototype.compare = function (a, b) {
        var createOnA = a.createdOn;
        var createdOnB = b.createdOn;
        var comparison = 1;
        if (createOnA > createdOnB) {
            comparison = -1;
        }
        return comparison;
    };
    MostRecentFirstPipe.prototype.transform = function (reviews, args) {
        if (reviews && reviews.length > 0) {
            return reviews.sort(this.compare);
        }
        return null;
    };
    MostRecentFirstPipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
            name: 'mostRecentFirst'
        })
    ], MostRecentFirstPipe);
    return MostRecentFirstPipe;
}());



/***/ }),

/***/ "./src/app/page-header/page-header.component.css":
/*!*******************************************************!*\
  !*** ./src/app/page-header/page-header.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2UtaGVhZGVyL3BhZ2UtaGVhZGVyLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/page-header/page-header.component.html":
/*!********************************************************!*\
  !*** ./src/app/page-header/page-header.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row banner\">\r\n  <div class=\"col-12\">\r\n    <h1>{{content.title}}\r\n      <small>{{content.strapline}}</small>\r\n    </h1>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/page-header/page-header.component.ts":
/*!******************************************************!*\
  !*** ./src/app/page-header/page-header.component.ts ***!
  \******************************************************/
/*! exports provided: PageHeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageHeaderComponent", function() { return PageHeaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var PageHeaderComponent = /** @class */ (function () {
    function PageHeaderComponent() {
        this.pageTitle = "Find places to work with wifi near you!";
    }
    PageHeaderComponent.prototype.ngOnInit = function () {
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], PageHeaderComponent.prototype, "content", void 0);
    PageHeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-page-header',
            template: __webpack_require__(/*! ./page-header.component.html */ "./src/app/page-header/page-header.component.html"),
            styles: [__webpack_require__(/*! ./page-header.component.css */ "./src/app/page-header/page-header.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], PageHeaderComponent);
    return PageHeaderComponent;
}());



/***/ }),

/***/ "./src/app/rating-stars/rating-stars.component.css":
/*!*********************************************************!*\
  !*** ./src/app/rating-stars/rating-stars.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3JhdGluZy1zdGFycy9yYXRpbmctc3RhcnMuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/rating-stars/rating-stars.component.html":
/*!**********************************************************!*\
  !*** ./src/app/rating-stars/rating-stars.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<small>\r\n  <i class=\"fa{{rating < 1 ? 'r' : 's' }} fa-star\"></i>\r\n  <i class=\"fa{{rating < 2 ? 'r' : 's' }} fa-star\"></i>\r\n  <i class=\"fa{{rating < 3 ? 'r' : 's' }} fa-star\"></i>\r\n  <i class=\"fa{{rating < 4 ? 'r' : 's' }} fa-star\"></i>\r\n  <i class=\"fa{{rating < 5 ? 'r' : 's' }} fa-star\"></i>\r\n</small>\r\n"

/***/ }),

/***/ "./src/app/rating-stars/rating-stars.component.ts":
/*!********************************************************!*\
  !*** ./src/app/rating-stars/rating-stars.component.ts ***!
  \********************************************************/
/*! exports provided: RatingStarsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RatingStarsComponent", function() { return RatingStarsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var RatingStarsComponent = /** @class */ (function () {
    function RatingStarsComponent() {
    }
    RatingStarsComponent.prototype.ngOnInit = function () {
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Number)
    ], RatingStarsComponent.prototype, "rating", void 0);
    RatingStarsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-rating-stars',
            template: __webpack_require__(/*! ./rating-stars.component.html */ "./src/app/rating-stars/rating-stars.component.html"),
            styles: [__webpack_require__(/*! ./rating-stars.component.css */ "./src/app/rating-stars/rating-stars.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], RatingStarsComponent);
    return RatingStarsComponent;
}());



/***/ }),

/***/ "./src/app/sidebar/sidebar.component.css":
/*!***********************************************!*\
  !*** ./src/app/sidebar/sidebar.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NpZGViYXIvc2lkZWJhci5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/sidebar/sidebar.component.html":
/*!************************************************!*\
  !*** ./src/app/sidebar/sidebar.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p class=\"lead\" [innerHTML]=\"content | htmlLineBreaks\"></p>\r\n"

/***/ }),

/***/ "./src/app/sidebar/sidebar.component.ts":
/*!**********************************************!*\
  !*** ./src/app/sidebar/sidebar.component.ts ***!
  \**********************************************/
/*! exports provided: SidebarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SidebarComponent", function() { return SidebarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var SidebarComponent = /** @class */ (function () {
    function SidebarComponent() {
    }
    SidebarComponent.prototype.ngOnInit = function () {
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], SidebarComponent.prototype, "content", void 0);
    SidebarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-sidebar',
            template: __webpack_require__(/*! ./sidebar.component.html */ "./src/app/sidebar/sidebar.component.html"),
            styles: [__webpack_require__(/*! ./sidebar.component.css */ "./src/app/sidebar/sidebar.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], SidebarComponent);
    return SidebarComponent;
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
    production: false,
    baseApiUrl: "http://localhost:3000/api"
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

module.exports = __webpack_require__(/*! C:\Users\muzie\RiderProjects\loc8r\app_public\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map