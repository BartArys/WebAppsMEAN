webpackJsonp(["event.module"],{

/***/ "../../../../../src/app/event/add-event/add-event.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/event/add-event/add-event.component.html":
/***/ (function(module, exports) {

module.exports = "<form class=\"ui large form segment\" [formGroup]='event' (ngSubmit)='onSubmit()'>\n  <h3 class=\"ui dividing header\">Add event</h3>\n  <div class=\"required field\">\n    <label for='name'>Name:</label>\n    <input id=\"name\" name='name' formControlName='name'>\n    <div *ngIf='event.get(\"name\").errors?.required && event.get(\"name\").touched' class='ui negative message'>\n      please fill out a name\n    </div>\n  </div>\n\n  <div class=\"required field\">\n    <label>People</label>\n    <select formControlName=\"people\" multiple=\"\" class=\"ui fluid search dropdown\" id=\"multi-select\">\n      <option *ngFor=\"let person of people\" [ngValue]=\"person\">\n        {{ person.firstname }} {{ person.lastname }}\n      </option>\n    </select>\n    <div class='ui negative message' *ngIf=' event.get(\"people\").errors?.required && event.get(\"people\").touched'>\n      please select at least one person\n    </div>\n  </div>\n  <button type='submit' class=\"ui positive fluid button \" [disabled]=\"!event.valid\">\n    add event\n  </button>\n</form>\n"

/***/ }),

/***/ "../../../../../src/app/event/add-event/add-event.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddEventComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__person_person_data_service__ = __webpack_require__("../../../../../src/app/person/person-data.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__event_event_model__ = __webpack_require__("../../../../../src/app/event/event.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_debounceTime__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/debounceTime.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_distinctUntilChanged__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/distinctUntilChanged.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__event_data_service__ = __webpack_require__("../../../../../src/app/event/event-data.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var AddEventComponent = (function () {
    function AddEventComponent(fb, dataservice, router, personservice) {
        this.fb = fb;
        this.dataservice = dataservice;
        this.router = router;
        this.personservice = personservice;
        this._people = [];
    }
    Object.defineProperty(AddEventComponent.prototype, "expenses", {
        get: function () {
            return this.event.get('expenses');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AddEventComponent.prototype, "people", {
        get: function () {
            return this._people;
        },
        enumerable: true,
        configurable: true
    });
    AddEventComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.personservice.people.subscribe(function (people) {
            _this._people = people;
        });
        this.event = this.fb.group({
            name: ['', [__WEBPACK_IMPORTED_MODULE_3__angular_forms__["c" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_3__angular_forms__["c" /* Validators */].minLength(3)]],
            people: this.fb.control(this.people)
        });
    };
    AddEventComponent.prototype.onSubmit = function () {
        var _this = this;
        var people = this.event.value.people;
        if (!Array.isArray(people)) {
            people = [people];
        }
        var event = new __WEBPACK_IMPORTED_MODULE_2__event_event_model__["a" /* Event */](this.event.value.name, null, people);
        this.dataservice.newEventAdded(event).subscribe(function (newevent) {
            _this.router.navigate(["event/" + newevent.id]);
        });
    };
    AddEventComponent.prototype.createExpenses = function () {
        return this.fb.group({
            amount: ['', [__WEBPACK_IMPORTED_MODULE_3__angular_forms__["c" /* Validators */].required]],
            description: ['', [__WEBPACK_IMPORTED_MODULE_3__angular_forms__["c" /* Validators */].required]]
        });
    };
    AddEventComponent.prototype.ngAfterViewInit = function () {
        $('.ui.dropdown').dropdown();
    };
    AddEventComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["n" /* Component */])({
            selector: 'app-add-event',
            template: __webpack_require__("../../../../../src/app/event/add-event/add-event.component.html"),
            styles: [__webpack_require__("../../../../../src/app/event/add-event/add-event.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormBuilder */], __WEBPACK_IMPORTED_MODULE_6__event_data_service__["a" /* EventDataService */],
            __WEBPACK_IMPORTED_MODULE_7__angular_router__["c" /* Router */], __WEBPACK_IMPORTED_MODULE_0__person_person_data_service__["a" /* PersonDataService */]])
    ], AddEventComponent);
    return AddEventComponent;
}());



/***/ }),

/***/ "../../../../../src/app/event/add-expense/add-expense.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/event/add-expense/add-expense.component.html":
/***/ (function(module, exports) {

module.exports = "<form class=\"ui large form segment\" [formGroup]='expense' (ngSubmit)='onSubmit()'>\n  <div class=\"required field\">\n    <label for='description'>Description</label>\n    <input id=\"description\" name='description' formControlName='description'>\n  </div>\n  <div class=\"required field\">\n    <label for='amount'>Amount</label>\n    <input id=\"amount\" name='amount' formControlName='amount'>\n  </div>\n  <div class=\"required field\">\n    <label>paidFor</label>\n    <select formControlName=\"paidFor\" multiple=\"\" class=\"ui fluid search dropdown\" id=\"multi-select\">\n      <option *ngFor=\"let person of people\" [ngValue]=\"person\">\n        {{ person.firstname }} {{ person.lastname }}\n      </option>\n    </select>\n  </div>\n\n  <button type=\"submit\" class=\"ui big fluid positive button\" [disabled]=\"!expense.valid\">Add</button>\n</form>\n"

/***/ }),

/***/ "../../../../../src/app/event/add-expense/add-expense.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddExpenseComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__person_authentication_service__ = __webpack_require__("../../../../../src/app/person/authentication.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__expense_model__ = __webpack_require__("../../../../../src/app/event/expense.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router___ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__expense_data_service__ = __webpack_require__("../../../../../src/app/event/expense-data.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_forms___ = __webpack_require__("../../../forms/esm5/forms.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var AddExpenseComponent = (function () {
    function AddExpenseComponent(route, dataService, fb, auth, router) {
        this.route = route;
        this.dataService = dataService;
        this.fb = fb;
        this.auth = auth;
        this.router = router;
    }
    AddExpenseComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.data.subscribe(function (item) {
            _this.event = item['event'];
            _this.people = _this.event.people.filter(function (person) {
                return person.email !== _this.auth.person.email;
            });
        });
        this.expense = this.fb.group({
            paidFor: this.fb.control(null, [__WEBPACK_IMPORTED_MODULE_5__angular_forms___["c" /* Validators */].required]),
            amount: this.fb.control(0, [__WEBPACK_IMPORTED_MODULE_5__angular_forms___["c" /* Validators */].required]),
            description: this.fb.control('', [__WEBPACK_IMPORTED_MODULE_5__angular_forms___["c" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_5__angular_forms___["c" /* Validators */].minLength(2)])
        });
    };
    AddExpenseComponent.prototype.onSubmit = function () {
        var _this = this;
        var description = this.expense.value.description;
        var amount = this.expense.value.amount;
        var paidFor = this.expense.value.paidFor;
        if (!Array.isArray(paidFor)) {
            paidFor = [paidFor];
        }
        var expense = new __WEBPACK_IMPORTED_MODULE_2__expense_model__["a" /* Expense */](description, null, amount, null, paidFor, this.event);
        this.dataService.addExpense(expense).subscribe(function (_) {
            _this.router.navigate(["event/" + _this.event.id]);
        });
    };
    AddExpenseComponent.prototype.ngAfterViewInit = function () {
        $('.ui.dropdown').dropdown();
    };
    AddExpenseComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["n" /* Component */])({
            selector: 'app-add-expense',
            template: __webpack_require__("../../../../../src/app/event/add-expense/add-expense.component.html"),
            styles: [__webpack_require__("../../../../../src/app/event/add-expense/add-expense.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__angular_router___["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_4__expense_data_service__["a" /* ExpenseDataService */],
            __WEBPACK_IMPORTED_MODULE_5__angular_forms___["a" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_0__person_authentication_service__["a" /* AuthenticationService */],
            __WEBPACK_IMPORTED_MODULE_3__angular_router___["c" /* Router */]])
    ], AddExpenseComponent);
    return AddExpenseComponent;
}());



/***/ }),

/***/ "../../../../../src/app/event/edit-expense/edit-expense.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/event/edit-expense/edit-expense.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditExpenseComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__expense_data_service__ = __webpack_require__("../../../../../src/app/event/expense-data.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__expense_model__ = __webpack_require__("../../../../../src/app/event/expense.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__person_person_data_service__ = __webpack_require__("../../../../../src/app/person/person-data.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_forms___ = __webpack_require__("../../../forms/esm5/forms.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var EditExpenseComponent = (function () {
    function EditExpenseComponent(route, dataService, personservice, fb, router) {
        this.route = route;
        this.dataService = dataService;
        this.personservice = personservice;
        this.fb = fb;
        this.router = router;
    }
    EditExpenseComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.personservice.people.subscribe(function (people) {
            _this.people = people;
        });
        this.expense = this.fb.group({
            paidFor: this.fb.control(this.people, [__WEBPACK_IMPORTED_MODULE_6__angular_forms___["c" /* Validators */].required]),
            amount: this.fb.control(0, [__WEBPACK_IMPORTED_MODULE_6__angular_forms___["c" /* Validators */].required]),
            description: this.fb.control('', [__WEBPACK_IMPORTED_MODULE_6__angular_forms___["c" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_6__angular_forms___["c" /* Validators */].minLength(2)])
        });
        var id = this.route.snapshot.paramMap.get('id');
        this.route.data.subscribe(function (item) {
            _this._expense = item['expense'];
            _this.event = item['event'];
            console.log(_this._expense);
            _this.expense.controls['description'].setValue(_this._expense.description);
            _this.expense.controls['amount'].setValue(_this._expense.amount);
            _this.expense.controls['paidFor'].setValue(_this._expense.paidFor);
        });
    };
    EditExpenseComponent.prototype.ngAfterViewInit = function () {
        $('.ui.dropdown').dropdown();
    };
    EditExpenseComponent.prototype.onSubmit = function () {
        var _this = this;
        var description = this.expense.value.description;
        var amount = this.expense.value.amount;
        var paidFor = this.expense.value.paidFor;
        if (!Array.isArray(paidFor)) {
            paidFor = [paidFor];
        }
        var expense = new __WEBPACK_IMPORTED_MODULE_2__expense_model__["a" /* Expense */](description, this._expense.id, amount, this._expense.paidBy, paidFor, this.event);
        this.dataService.editExpense(expense).subscribe(function (_) {
            _this.router.navigate(["event/" + _this.event.id]);
        });
    };
    EditExpenseComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["n" /* Component */])({
            selector: 'app-edit-expense',
            template: __webpack_require__("../../../../../src/app/event/add-expense/add-expense.component.html"),
            styles: [__webpack_require__("../../../../../src/app/event/edit-expense/edit-expense.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_0__expense_data_service__["a" /* ExpenseDataService */],
            __WEBPACK_IMPORTED_MODULE_5__person_person_data_service__["a" /* PersonDataService */],
            __WEBPACK_IMPORTED_MODULE_4__angular_forms__["a" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_3__angular_router__["c" /* Router */]])
    ], EditExpenseComponent);
    return EditExpenseComponent;
}());



/***/ }),

/***/ "../../../../../src/app/event/event-data.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EventDataService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__event_model__ = __webpack_require__("../../../../../src/app/event/event.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__person_authentication_service__ = __webpack_require__("../../../../../src/app/person/authentication.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var EventDataService = (function () {
    function EventDataService(http, auth) {
        this.http = http;
        this.auth = auth;
        this._appUrl = '/API/Events';
    }
    Object.defineProperty(EventDataService.prototype, "events", {
        get: function () {
            return this.http.get(this._appUrl, { headers: new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]({ Authorization: "Bearer " + this.auth.token }) }).map(function (response) {
                return response.json().map(function (item) { return __WEBPACK_IMPORTED_MODULE_1__event_model__["a" /* Event */].fromJSON(item); });
            });
        },
        enumerable: true,
        configurable: true
    });
    EventDataService.prototype.newEventAdded = function (event) {
        return this.http.post(this._appUrl, event, { headers: new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]({ Authorization: "Bearer " + this.auth.token }) })
            .map(function (response) { return response.json(); }).map(function (item) {
            return __WEBPACK_IMPORTED_MODULE_1__event_model__["a" /* Event */].fromJSON(item);
        });
    };
    EventDataService.prototype.getEvent = function (id) {
        return this.http.get(this._appUrl + "/" + id, { headers: new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]({ Authorization: "Bearer " + this.auth.token }) })
            .map(function (response) { return response.json(); }).map(function (item) {
            return __WEBPACK_IMPORTED_MODULE_1__event_model__["a" /* Event */].fromJSON(item);
        });
    };
    EventDataService.prototype.deleteEvent = function (event) {
        return this.http.delete(this._appUrl + "/" + event.id, { headers: new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]({ Authorization: "Bearer " + this.auth.token }) })
            .map(function (response) { return response.json(); }).map(function (item) {
            return __WEBPACK_IMPORTED_MODULE_1__event_model__["a" /* Event */].fromJSON(item);
        });
    };
    EventDataService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */], __WEBPACK_IMPORTED_MODULE_4__person_authentication_service__["a" /* AuthenticationService */]])
    ], EventDataService);
    return EventDataService;
}());



/***/ }),

/***/ "../../../../../src/app/event/event-detail/event-detail.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/event/event-detail/event-detail.component.html":
/***/ (function(module, exports) {

module.exports = "<h2 class=\"ui top attached header\">{{ eventModel.name }}</h2>\n<div class=\"ui clearing attached segment\">\n  <h3 class=\"subheader\">Expenses</h3>\n\n  <div class=\"ui large celled animated list\">\n    <app-expense class=\"item\" *ngFor=\"let e of eventModel.expenses\" [expense]=\"e\" [eventId]=\"eventModel.id\" (removeExpense)=\"removeExpense($event)\"></app-expense>\n  </div>\n  <a class=\"ui right floated basic icon button\" routerLinkActive=\"active\" routerLink='/event/{{eventModel.id}}/add'>\n    <i class=\"icon add\"></i>\n  </a>\n\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/event/event-detail/event-detail.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EventDetailComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__event_data_service__ = __webpack_require__("../../../../../src/app/event/event-data.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var EventDetailComponent = (function () {
    function EventDetailComponent(route, dataService, fb) {
        this.route = route;
        this.dataService = dataService;
        this.fb = fb;
    }
    EventDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.data.subscribe(function (item) {
            _this._event = item['event'];
        });
    };
    Object.defineProperty(EventDetailComponent.prototype, "eventModel", {
        get: function () {
            return this._event;
        },
        enumerable: true,
        configurable: true
    });
    EventDetailComponent.prototype.removeExpense = function (id) {
        console.log(id);
        this._event.expenses = this._event.expenses.filter(function (exp) { return exp.id !== id; });
    };
    EventDetailComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["n" /* Component */])({
            selector: 'app-event-detail',
            template: __webpack_require__("../../../../../src/app/event/event-detail/event-detail.component.html"),
            styles: [__webpack_require__("../../../../../src/app/event/event-detail/event-detail.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_2__event_data_service__["a" /* EventDataService */],
            __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormBuilder */]])
    ], EventDetailComponent);
    return EventDetailComponent;
}());



/***/ }),

/***/ "../../../../../src/app/event/event-list/event-list.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/event/event-list/event-list.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"ui large celled animated list\">\n  <app-event class=\"item\" *ngFor=\"let e of events\" [event]=\"e\" (removeEvent)=\"removeEvent($event)\"></app-event>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/event/event-list/event-list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EventListComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__event_data_service__ = __webpack_require__("../../../../../src/app/event/event-data.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var EventListComponent = (function () {
    function EventListComponent(_eventDataService) {
        this._eventDataService = _eventDataService;
        this._animate = true;
    }
    Object.defineProperty(EventListComponent.prototype, "events", {
        get: function () {
            return this._events;
        },
        enumerable: true,
        configurable: true
    });
    EventListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._eventDataService.events.subscribe(function (items) { return _this._events = items; });
    };
    EventListComponent.prototype.newEventAdded = function (event) {
        var _this = this;
        this._eventDataService.newEventAdded(event).subscribe(function (item) { return _this._events.push(item); });
    };
    EventListComponent.prototype.removeEvent = function (event) {
        var index = this._events.indexOf(event);
        if (index >= 0) {
            this._events.splice(index, 1);
        }
    };
    EventListComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-event-list',
            template: __webpack_require__("../../../../../src/app/event/event-list/event-list.component.html"),
            styles: [__webpack_require__("../../../../../src/app/event/event-list/event-list.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__event_data_service__["a" /* EventDataService */]])
    ], EventListComponent);
    return EventListComponent;
}());



/***/ }),

/***/ "../../../../../src/app/event/event-resolver.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EventResolver; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__event_data_service__ = __webpack_require__("../../../../../src/app/event/event-data.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var EventResolver = (function () {
    function EventResolver(dataService) {
        this.dataService = dataService;
    }
    EventResolver.prototype.resolve = function (route, state) {
        return this.dataService.getEvent(route.params['id']);
    };
    EventResolver = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__event_data_service__["a" /* EventDataService */]])
    ], EventResolver);
    return EventResolver;
}());



/***/ }),

/***/ "../../../../../src/app/event/event.model.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Event; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__person_person_person_model__ = __webpack_require__("../../../../../src/app/person/person/person.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__expense_model__ = __webpack_require__("../../../../../src/app/event/expense.model.ts");


var Event = (function () {
    function Event(_name, id, people, expenses) {
        this._name = _name;
        if (id) {
            this._id = id;
        }
        if (people) {
            this._people = people;
        }
        else {
            this._people = [];
        }
        this._expenses = expenses || [];
    }
    Event.fromJSON = function (json) {
        var people = [];
        if (json.people) {
            people = json.people.map(function (person) { return __WEBPACK_IMPORTED_MODULE_0__person_person_person_model__["a" /* Person */].fromJSON(person); });
        }
        var expenses = [];
        if (json.expenses) {
            expenses = json.expenses.map(function (exp) { return __WEBPACK_IMPORTED_MODULE_1__expense_model__["a" /* Expense */].fromJSON(exp); });
        }
        return new Event(json.name, json._id, people, expenses);
    };
    Object.defineProperty(Event.prototype, "name", {
        get: function () {
            return this._name;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Event.prototype, "id", {
        get: function () {
            return this._id;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Event.prototype, "people", {
        get: function () {
            return this._people;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Event.prototype, "expenses", {
        get: function () {
            return this._expenses;
        },
        set: function (expenses) {
            this._expenses = expenses;
        },
        enumerable: true,
        configurable: true
    });
    Event.prototype.toJSON = function () {
        return {
            name: this._name,
            id: this._id,
            people: this._people.map(function (person) { return person.toJSON(); })
        };
    };
    return Event;
}());



/***/ }),

/***/ "../../../../../src/app/event/event.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EventModule", function() { return EventModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__event_data_service__ = __webpack_require__("../../../../../src/app/event/event-data.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__add_event_add_event_component__ = __webpack_require__("../../../../../src/app/event/add-event/add-event.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__event_event_component__ = __webpack_require__("../../../../../src/app/event/event/event.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__event_list_event_list_component__ = __webpack_require__("../../../../../src/app/event/event-list/event-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__event_detail_event_detail_component__ = __webpack_require__("../../../../../src/app/event/event-detail/event-detail.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__event_resolver_service__ = __webpack_require__("../../../../../src/app/event/event-resolver.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__edit_expense_edit_expense_component__ = __webpack_require__("../../../../../src/app/event/edit-expense/edit-expense.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__add_expense_add_expense_component__ = __webpack_require__("../../../../../src/app/event/add-expense/add-expense.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__expense_expense_component__ = __webpack_require__("../../../../../src/app/event/expense/expense.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__expense_resolver_service__ = __webpack_require__("../../../../../src/app/event/expense-resolver.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__expense_data_service__ = __webpack_require__("../../../../../src/app/event/expense-data.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
















var routes = [
    { path: 'list', component: __WEBPACK_IMPORTED_MODULE_8__event_list_event_list_component__["a" /* EventListComponent */] },
    { path: 'add', component: __WEBPACK_IMPORTED_MODULE_6__add_event_add_event_component__["a" /* AddEventComponent */] },
    { path: ':id', component: __WEBPACK_IMPORTED_MODULE_9__event_detail_event_detail_component__["a" /* EventDetailComponent */], resolve: { 'event': __WEBPACK_IMPORTED_MODULE_10__event_resolver_service__["a" /* EventResolver */] } },
    { path: ':id/edit/:expenseId', component: __WEBPACK_IMPORTED_MODULE_11__edit_expense_edit_expense_component__["a" /* EditExpenseComponent */], resolve: { 'event': __WEBPACK_IMPORTED_MODULE_10__event_resolver_service__["a" /* EventResolver */], 'expense': __WEBPACK_IMPORTED_MODULE_14__expense_resolver_service__["a" /* ExpenseResolver */] } },
    { path: ':id/add', component: __WEBPACK_IMPORTED_MODULE_12__add_expense_add_expense_component__["a" /* AddExpenseComponent */], resolve: { 'event': __WEBPACK_IMPORTED_MODULE_10__event_resolver_service__["a" /* EventResolver */] } }
];
var EventModule = (function () {
    function EventModule() {
    }
    EventModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_6__add_event_add_event_component__["a" /* AddEventComponent */],
                __WEBPACK_IMPORTED_MODULE_7__event_event_component__["a" /* EventComponent */],
                __WEBPACK_IMPORTED_MODULE_8__event_list_event_list_component__["a" /* EventListComponent */],
                __WEBPACK_IMPORTED_MODULE_9__event_detail_event_detail_component__["a" /* EventDetailComponent */],
                __WEBPACK_IMPORTED_MODULE_11__edit_expense_edit_expense_component__["a" /* EditExpenseComponent */],
                __WEBPACK_IMPORTED_MODULE_12__add_expense_add_expense_component__["a" /* AddExpenseComponent */],
                __WEBPACK_IMPORTED_MODULE_13__expense_expense_component__["a" /* ExpenseComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_2__angular_http__["c" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_common__["b" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_forms__["b" /* ReactiveFormsModule */],
                __WEBPACK_IMPORTED_MODULE_0__angular_router__["d" /* RouterModule */].forChild(routes)
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_5__event_data_service__["a" /* EventDataService */],
                __WEBPACK_IMPORTED_MODULE_10__event_resolver_service__["a" /* EventResolver */],
                __WEBPACK_IMPORTED_MODULE_14__expense_resolver_service__["a" /* ExpenseResolver */],
                __WEBPACK_IMPORTED_MODULE_15__expense_data_service__["a" /* ExpenseDataService */],
                __WEBPACK_IMPORTED_MODULE_5__event_data_service__["a" /* EventDataService */]
            ]
        })
    ], EventModule);
    return EventModule;
}());



/***/ }),

/***/ "../../../../../src/app/event/event/event.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/event/event/event.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"right floated content\">\n  <a class=\"ui button\" routerLinkActive=\"active\" routerLink='/event/{{event.id}}'>Edit</a>\n  <a class=\"ui button red\" (click)=\"delete()\">Remove</a>\n</div>\n<div class=\"header\">\n  {{event.name}}\n</div>\n\n<div class=\"content\">\n  <p>\n    500€ uncollected\n  </p>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/event/event/event.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EventComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__event_data_service__ = __webpack_require__("../../../../../src/app/event/event-data.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__event_model__ = __webpack_require__("../../../../../src/app/event/event.model.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var EventComponent = (function () {
    function EventComponent(dataService) {
        this.dataService = dataService;
        this.removeEvent = new __WEBPACK_IMPORTED_MODULE_1__angular_core__["v" /* EventEmitter */]();
    }
    EventComponent.prototype.ngOnInit = function () {
    };
    EventComponent.prototype.delete = function () {
        var _this = this;
        this.dataService.deleteEvent(this.event).subscribe(function (response) { return _this.removeEvent.emit(_this.event); });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["P" /* Output */])(),
        __metadata("design:type", Object)
    ], EventComponent.prototype, "removeEvent", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["D" /* Input */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_2__event_model__["a" /* Event */])
    ], EventComponent.prototype, "event", void 0);
    EventComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["n" /* Component */])({
            selector: 'app-event',
            template: __webpack_require__("../../../../../src/app/event/event/event.component.html"),
            styles: [__webpack_require__("../../../../../src/app/event/event/event.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__event_data_service__["a" /* EventDataService */]])
    ], EventComponent);
    return EventComponent;
}());



/***/ }),

/***/ "../../../../../src/app/event/expense-data.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ExpenseDataService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__person_authentication_service__ = __webpack_require__("../../../../../src/app/person/authentication.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__expense_model__ = __webpack_require__("../../../../../src/app/event/expense.model.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ExpenseDataService = (function () {
    function ExpenseDataService(http, auth) {
        this.http = http;
        this.auth = auth;
        this._eventUrl = '/API/Events';
        this._expenseUrl = '/API/Expenses';
    }
    ExpenseDataService.prototype.addExpense = function (expense) {
        return this.http.post(this._eventUrl + "/" + expense.event.id + "/expenses", expense, { headers: new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ Authorization: "Bearer " + this.auth.token }) });
    };
    ExpenseDataService.prototype.getExpense = function (id) {
        return this.http.get(this._expenseUrl + "/" + id, { headers: new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ Authorization: "Bearer " + this.auth.token }) })
            .map(function (response) { return response.json(); })
            .map(function (response) {
            return __WEBPACK_IMPORTED_MODULE_4__expense_model__["a" /* Expense */].fromJSON(response);
        });
    };
    ExpenseDataService.prototype.editExpense = function (expense) {
        return this.http.patch(this._expenseUrl + "/" + expense.id, expense, { headers: new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ Authorization: "Bearer " + this.auth.token }) })
            .map(function (response) { return response.json(); })
            .map(function (response) {
            return __WEBPACK_IMPORTED_MODULE_4__expense_model__["a" /* Expense */].fromJSON(response);
        });
    };
    ExpenseDataService.prototype.removeExpense = function (id) {
        return this.http.delete(this._expenseUrl + "/" + id, { headers: new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ Authorization: "Bearer " + this.auth.token }) });
    };
    ExpenseDataService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */], __WEBPACK_IMPORTED_MODULE_3__person_authentication_service__["a" /* AuthenticationService */]])
    ], ExpenseDataService);
    return ExpenseDataService;
}());



/***/ }),

/***/ "../../../../../src/app/event/expense-resolver.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ExpenseResolver; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__expense_data_service__ = __webpack_require__("../../../../../src/app/event/expense-data.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ExpenseResolver = (function () {
    function ExpenseResolver(dataService) {
        this.dataService = dataService;
    }
    ExpenseResolver.prototype.resolve = function (route, state) {
        return this.dataService.getExpense(route.params['expenseId']);
    };
    ExpenseResolver = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__expense_data_service__["a" /* ExpenseDataService */]])
    ], ExpenseResolver);
    return ExpenseResolver;
}());



/***/ }),

/***/ "../../../../../src/app/event/expense.model.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Expense; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__person_person_person_model__ = __webpack_require__("../../../../../src/app/person/person/person.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__event_model__ = __webpack_require__("../../../../../src/app/event/event.model.ts");


var Expense = (function () {
    function Expense(_description, _id, _amount, _paidBy, _paidFor, _event) {
        this._description = _description;
        this._id = _id;
        this._amount = _amount;
        this._paidBy = _paidBy;
        this._paidFor = _paidFor;
        this._event = _event;
    }
    Expense.fromJSON = function (json) {
        var paidBy = json.paidBy ? __WEBPACK_IMPORTED_MODULE_0__person_person_person_model__["a" /* Person */].fromJSON(json.paidBy) : null;
        var paidFor = json.paidFor ? json.paidFor.map(function (person) { return __WEBPACK_IMPORTED_MODULE_0__person_person_person_model__["a" /* Person */].fromJSON(person); }) : null;
        var event;
        if (json.event instanceof String) {
            event = new __WEBPACK_IMPORTED_MODULE_1__event_model__["a" /* Event */](null, json.event, null, null);
        }
        else if (json.event) {
            event = __WEBPACK_IMPORTED_MODULE_1__event_model__["a" /* Event */].fromJSON(json.event);
        }
        return new Expense(json.description, json._id, json.amount, paidBy, paidFor, event);
    };
    Object.defineProperty(Expense.prototype, "id", {
        get: function () {
            return this._id;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Expense.prototype, "description", {
        get: function () {
            return this._description;
        },
        set: function (desc) {
            this._description = desc;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Expense.prototype, "amount", {
        get: function () {
            return this._amount;
        },
        set: function (amount) {
            this._amount = amount;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Expense.prototype, "paidBy", {
        get: function () {
            return this._paidBy;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Expense.prototype, "paidFor", {
        get: function () {
            return this._paidFor;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Expense.prototype, "event", {
        get: function () {
            return this._event;
        },
        enumerable: true,
        configurable: true
    });
    Expense.prototype.toJSON = function () {
        return {
            id: this._id,
            description: this._description,
            amount: this._amount,
            paidBy: this._paidBy,
            paidFor: this._paidFor
        };
    };
    return Expense;
}());



/***/ }),

/***/ "../../../../../src/app/event/expense/expense.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/event/expense/expense.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"right floated content\">\n  <a class=\"ui button\" routerLinkActive=\"active\" (click)=\"edit()\">Edit</a>\n  <a class=\"ui button red\" (click)=\"delete()\">Remove</a>\n</div>\n<div class=\"header\">\n  {{expense.description}} €{{expense.amount}}\n</div>\n\n<div class=\"content\">\n  <h4 class=\"subheader\">\n    {{ expense.paidBy.firstname }} {{ expense.paidBy.lastname }}\n  </h4>\n  <ul>\n    Paid for\n    <li *ngFor=\"let person of expense.paidFor\">\n      {{person.firstname}} {{person.lastname}}\n    </li>\n  </ul>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/event/expense/expense.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ExpenseComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__expense_data_service__ = __webpack_require__("../../../../../src/app/event/expense-data.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__expense_model__ = __webpack_require__("../../../../../src/app/event/expense.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ExpenseComponent = (function () {
    function ExpenseComponent(dataService, router) {
        this.dataService = dataService;
        this.router = router;
        this.removeExpense = new __WEBPACK_IMPORTED_MODULE_1__angular_core__["v" /* EventEmitter */]();
    }
    ExpenseComponent.prototype.ngOnInit = function () {
    };
    ExpenseComponent.prototype.edit = function () {
        this.router.navigate(["event/" + this.eventId + "/edit/" + this.expense.id]);
    };
    ExpenseComponent.prototype.delete = function () {
        var _this = this;
        this.dataService.removeExpense(this.expense.id).subscribe(function (_) {
            _this.removeExpense.emit(_this.expense.id);
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["D" /* Input */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_2__expense_model__["a" /* Expense */])
    ], ExpenseComponent.prototype, "expense", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["D" /* Input */])(),
        __metadata("design:type", String)
    ], ExpenseComponent.prototype, "eventId", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["P" /* Output */])(),
        __metadata("design:type", Object)
    ], ExpenseComponent.prototype, "removeExpense", void 0);
    ExpenseComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["n" /* Component */])({
            selector: 'app-expense',
            template: __webpack_require__("../../../../../src/app/event/expense/expense.component.html"),
            styles: [__webpack_require__("../../../../../src/app/event/expense/expense.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__expense_data_service__["a" /* ExpenseDataService */],
            __WEBPACK_IMPORTED_MODULE_3__angular_router__["c" /* Router */]])
    ], ExpenseComponent);
    return ExpenseComponent;
}());



/***/ })

});
//# sourceMappingURL=event.module.chunk.js.map