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

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div style=\"text-align:center\">\n  <h1>\n    Welcome to {{ title }}!\n  </h1>\n\n  <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col-lg-12\">\n        <ng-template #viewContainerRef></ng-template>\n      </div>\n      \n      <div class=\"container\">\n        <div class=\"row\">\n          <div class=\"col-lg-4\"></div>\n          <div class=\"col-lg-4\">\n            <button mat-raised-button color=\"primary\" (click)=\"addComponent()\">Add Input</button>\n          </div>\n          <div class=\"col-lg-4\"></div>\n        </div>\n      </div>\n    </div>"

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
/* harmony import */ var _services_component_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./services/component.service */ "./src/app/services/component.service.ts");
/* harmony import */ var _services_data_base_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./services/data-base.service */ "./src/app/services/data-base.service.ts");




var AppComponent = /** @class */ (function () {
    function AppComponent(_componentService, _dataBaseService) {
        this._componentService = _componentService;
        this._dataBaseService = _dataBaseService;
        this.components = [];
        this.componentsReferences = [];
        this.data = 0;
        this.title = 'FormBuilder';
    }
    AppComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.components.length = 0;
        window.onbeforeunload = function () {
            for (var i = 0; i < _this.componentsReferences.length; i++) {
                _this.components.push(_this.componentsReferences[i].instance.setData());
            }
            _this.saveData();
        };
        this.loadData().then(function (result) {
            _this.data = result;
        }).then(function () {
            if (_this.data.length > 0) {
                _this.generateComponents();
            }
        });
    };
    AppComponent.prototype.addComponent = function () {
        this.componentsReferences = this._componentService.addComponent('InputComponent', this._viewContainerReference, this.componentsReferences);
    };
    AppComponent.prototype.generateComponents = function () {
        this.componentsReferences = this._componentService.generateComponents('InputComponent', this._viewContainerReference, this.componentsReferences, this.data.data.components);
    };
    AppComponent.prototype.loadData = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var _a, _b;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_c) {
                switch (_c.label) {
                    case 0:
                        _b = (_a = this._dataBaseService).loadData;
                        return [4 /*yield*/, this._dataBaseService.openDataBase()];
                    case 1: return [4 /*yield*/, _b.apply(_a, [_c.sent()])];
                    case 2: return [2 /*return*/, _c.sent()];
                }
            });
        });
    };
    AppComponent.prototype.saveData = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var _a, _b;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_c) {
                switch (_c.label) {
                    case 0:
                        _b = (_a = this._dataBaseService).updateData;
                        return [4 /*yield*/, this._dataBaseService.openDataBase()];
                    case 1: return [4 /*yield*/, _b.apply(_a, [_c.sent(), { components: this.components }])];
                    case 2:
                        _c.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('viewContainerRef', { read: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"] }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"])
    ], AppComponent.prototype, "_viewContainerReference", void 0);
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_component_service__WEBPACK_IMPORTED_MODULE_2__["ComponentService"], _services_data_base_service__WEBPACK_IMPORTED_MODULE_3__["DataBaseService"]])
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
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _components_input_input_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/input/input.component */ "./src/app/components/input/input.component.ts");
/* harmony import */ var _components_subinput_subinput_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/subinput/subinput.component */ "./src/app/components/subinput/subinput.component.ts");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/card */ "./node_modules/@angular/material/esm5/card.es5.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/esm5/input.es5.js");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/esm5/form-field.es5.js");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/select */ "./node_modules/@angular/material/esm5/select.es5.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/esm5/button.es5.js");
/* harmony import */ var _angular_material_radio__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/radio */ "./node_modules/@angular/material/esm5/radio.es5.js");
/* harmony import */ var _services_component_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./services/component.service */ "./src/app/services/component.service.ts");
/* harmony import */ var _services_validation_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./services/validation.service */ "./src/app/services/validation.service.ts");
/* harmony import */ var _services_data_base_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./services/data-base.service */ "./src/app/services/data-base.service.ts");

















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
                _components_input_input_component__WEBPACK_IMPORTED_MODULE_6__["InputComponent"],
                _components_subinput_subinput_component__WEBPACK_IMPORTED_MODULE_7__["SubinputComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__["BrowserAnimationsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
                _angular_material_card__WEBPACK_IMPORTED_MODULE_8__["MatCardModule"],
                _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__["MatFormFieldModule"],
                _angular_material_input__WEBPACK_IMPORTED_MODULE_9__["MatInputModule"],
                _angular_material_select__WEBPACK_IMPORTED_MODULE_11__["MatSelectModule"],
                _angular_material_button__WEBPACK_IMPORTED_MODULE_12__["MatButtonModule"],
                _angular_material_radio__WEBPACK_IMPORTED_MODULE_13__["MatRadioModule"]
            ],
            providers: [_services_component_service__WEBPACK_IMPORTED_MODULE_14__["ComponentService"], _services_validation_service__WEBPACK_IMPORTED_MODULE_15__["ValidationService"], _services_data_base_service__WEBPACK_IMPORTED_MODULE_16__["DataBaseService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]],
            entryComponents: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"], _components_input_input_component__WEBPACK_IMPORTED_MODULE_6__["InputComponent"], _components_subinput_subinput_component__WEBPACK_IMPORTED_MODULE_7__["SubinputComponent"],]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/components/input/input.component.css":
/*!******************************************************!*\
  !*** ./src/app/components/input/input.component.css ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "mat-card {\r\n    margin: auto;\r\n    width: 70%;\r\n    margin-bottom: 20px;\r\n    margin-top: 20px;\r\n    border-radius: 20px;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9pbnB1dC9pbnB1dC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksYUFBYTtJQUNiLFdBQVc7SUFDWCxvQkFBb0I7SUFDcEIsaUJBQWlCO0lBQ2pCLG9CQUFvQjtDQUN2QiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvaW5wdXQvaW5wdXQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIm1hdC1jYXJkIHtcclxuICAgIG1hcmdpbjogYXV0bztcclxuICAgIHdpZHRoOiA3MCU7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG4gICAgbWFyZ2luLXRvcDogMjBweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/components/input/input.component.html":
/*!*******************************************************!*\
  !*** ./src/app/components/input/input.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-card>\n  <mat-card-content>\n    <div class=\"container\">\n      <div class=\"row\">\n        <div class=\"col-lg-12\">\n          <mat-form-field>\n            <input matInput placeholder=\"Question\" [formControl]=\"question\" (input)=\"checkValidation()\" type=\"text\"\n              required>\n          </mat-form-field>\n        </div>\n\n        <div class=\"col-lg-12\">\n          <mat-form-field>\n            <mat-select [formControl]=\"inputType\" required>\n              <mat-option placegolder=\"Input Type\" *ngFor=\"let type of inputTypes\" [value]=\"type.value\" (click)=\"checkValidation()\">{{type.value}}</mat-option>\n            </mat-select>\n          </mat-form-field>\n        </div>\n\n        <div class=\"col-lg-3\"></div>\n        <div class=\"col-lg-3\">\n          <button mat-raised-button color=\"primary\" (click)=\"addComponent()\" [disabled]=\"!checkValidation()\">Add Sub\n            Input</button>\n        </div>\n\n        <div class=\"col-lg-3\">\n          <button mat-raised-button color=\"primary\" (click)=\"deleteComponent()\">Delete Input</button>\n        </div>\n        <div class=\"col-lg-3\"></div>\n\n      </div>\n    </div>\n    <ng-template #subViewContainerRef></ng-template>\n  </mat-card-content>\n</mat-card>"

/***/ }),

/***/ "./src/app/components/input/input.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/components/input/input.component.ts ***!
  \*****************************************************/
/*! exports provided: InputComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InputComponent", function() { return InputComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _consts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../consts */ "./src/app/consts.ts");
/* harmony import */ var src_app_services_component_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/component.service */ "./src/app/services/component.service.ts");
/* harmony import */ var src_app_services_validation_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/validation.service */ "./src/app/services/validation.service.ts");






var InputComponent = /** @class */ (function () {
    function InputComponent(_componentService, _validationService) {
        this._componentService = _componentService;
        this._validationService = _validationService;
        this.destroy = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.components = [];
        this.componentsReferences = [];
        this.data = [];
        this.parentComponentsReferences = [];
        this.inputType = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', []);
        this.question = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', []);
        this.inputTypes = _consts__WEBPACK_IMPORTED_MODULE_3__["INPUTTYPES"];
    }
    InputComponent.prototype.ngOnInit = function () {
        this.components.length = 0;
        if (this.data.length > 0) {
            this.generateComponents();
        }
    };
    InputComponent.prototype.addComponent = function () {
        this.componentsReferences = this._componentService.addComponent('SubinputComponent', this._viewContainerReference, this.componentsReferences, this.inputType.value);
    };
    InputComponent.prototype.deleteComponent = function () {
        this._componentService.deleteComponent(this.selfIndex, this.parentViewContainerReference, this.parentComponentsReferences);
    };
    InputComponent.prototype.generateComponents = function () {
        this.componentsReferences = this._componentService.generateComponents('SubinputComponent', this._viewContainerReference, this.componentsReferences, this.data);
    };
    InputComponent.prototype.setData = function () {
        for (var i = 0; i < this.componentsReferences.length; i++) {
            this.components.push(this.componentsReferences[i].instance.setData());
        }
        return { index: this.selfIndex, question: this.question.value, inputType: this.inputType.value, components: this.components };
    };
    InputComponent.prototype.checkValidation = function () {
        for (var i = 0; i < this.componentsReferences.length; i++) {
            this.componentsReferences[i].instance.parentInputType = this.inputType.value;
            this.componentsReferences[i].instance.setConditionTypes();
        }
        return this._validationService.checkValidation(new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormArray"](new Array(this.question, this.inputType)));
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('subViewContainerRef', { read: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"] }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"])
    ], InputComponent.prototype, "_viewContainerReference", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
    ], InputComponent.prototype, "destroy", void 0);
    InputComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-input',
            template: __webpack_require__(/*! ./input.component.html */ "./src/app/components/input/input.component.html"),
            styles: [__webpack_require__(/*! ./input.component.css */ "./src/app/components/input/input.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_component_service__WEBPACK_IMPORTED_MODULE_4__["ComponentService"], src_app_services_validation_service__WEBPACK_IMPORTED_MODULE_5__["ValidationService"]])
    ], InputComponent);
    return InputComponent;
}());



/***/ }),

/***/ "./src/app/components/subinput/subinput.component.css":
/*!************************************************************!*\
  !*** ./src/app/components/subinput/subinput.component.css ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "mat-card {\r\n    margin-bottom: 20px;\r\n    margin-top: 20px;\r\n    border-radius: 20px;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9zdWJpbnB1dC9zdWJpbnB1dC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksb0JBQW9CO0lBQ3BCLGlCQUFpQjtJQUNqQixvQkFBb0I7Q0FDdkIiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL3N1YmlucHV0L3N1YmlucHV0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJtYXQtY2FyZCB7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG4gICAgbWFyZ2luLXRvcDogMjBweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/components/subinput/subinput.component.html":
/*!*************************************************************!*\
  !*** ./src/app/components/subinput/subinput.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-card>\n  <mat-card-content>\n    <div class=\"container\">\n      <div class=\"row\">\n        <div class=\"col-lg-12\">\n          <mat-form-field>\n            <mat-select placeholder=\"Condition\" [formControl]=\"condition\" required>\n              <mat-option *ngFor=\"let condition of conditionTypes\" [value]=\"condition.value\" (click)=\"checkValidation()\">{{condition.value}}</mat-option>\n            </mat-select>\n          </mat-form-field>\n        </div>\n\n        <div class=\"col-lg-12\">\n          <mat-form-field *ngIf=\"this.parentInputType == 'Text' || this.parentInputType == 'Number'\">\n            <input matInput placeholder=\"Answer\" (input)=\"checkValidation()\" type=\"{{this.parentInputType == 'Text' ? 'text' : 'number'}}\"\n              [formControl]=\"answer\" required>\n          </mat-form-field>\n\n          <mat-radio-group *ngIf=\"this.parentInputType == 'Yes/No'\" [formControl]=\"answer\" (change)=\"checkValidation()\"\n            required>\n            <mat-radio-button *ngFor=\"let answer of boolAnswers\" [value]=\"answer.value\">{{answer.value}}</mat-radio-button>\n          </mat-radio-group>\n        </div>\n\n        <div class=\"col-lg-12\">\n          <mat-form-field>\n            <input matInput placeholder=\"Question\" (input)=\"checkValidation()\" type=\"text\" [formControl]=\"question\"\n              required>\n          </mat-form-field>\n        </div>\n\n        <div class=\"col-lg-12\">\n          <mat-form-field>\n            <mat-select placeholder=\"InputType\" [formControl]=\"inputType\" required>\n              <mat-option *ngFor=\"let types of inputTypes\" [value]=\"types.value\" (click)=\"checkValidation()\">{{types.value}}</mat-option>\n            </mat-select>\n          </mat-form-field>\n        </div>\n\n        <div class=\"col-lg-3\"></div>\n        <div class=\"col-lg-3\">\n          <button mat-raised-button color=\"primary\" (click)=\"addComponent()\" [disabled]=\"!checkValidation()\">Add Sub\n            Input</button>\n        </div>\n\n        <div class=\"col-lg-3\">\n          <div class=\"col-lg-3\"></div>\n          <button mat-raised-button color=\"primary\" (click)=\"deleteComponent()\">Delete Input</button>\n        </div>\n\n      </div>\n    </div>\n    <ng-template #subViewContainerRef></ng-template>\n  </mat-card-content>\n</mat-card>"

/***/ }),

/***/ "./src/app/components/subinput/subinput.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/components/subinput/subinput.component.ts ***!
  \***********************************************************/
/*! exports provided: SubinputComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SubinputComponent", function() { return SubinputComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _consts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../consts */ "./src/app/consts.ts");
/* harmony import */ var src_app_services_component_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/component.service */ "./src/app/services/component.service.ts");
/* harmony import */ var src_app_services_validation_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/validation.service */ "./src/app/services/validation.service.ts");






var SubinputComponent = /** @class */ (function () {
    function SubinputComponent(_componentService, _validationService) {
        this._componentService = _componentService;
        this._validationService = _validationService;
        this.answer = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', []);
        this.components = [];
        this.componentsReferences = [];
        this.data = [];
        this.parentComponentsReferences = [];
        this.condition = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', []);
        this.inputType = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', []);
        this.question = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', []);
        this.parentInputType = '';
        this.boolAnswers = _consts__WEBPACK_IMPORTED_MODULE_3__["BOOLANSWERS"];
        this.conditionTypes = _consts__WEBPACK_IMPORTED_MODULE_3__["CONDITIONTYPES"];
        this.inputTypes = _consts__WEBPACK_IMPORTED_MODULE_3__["INPUTTYPES"];
    }
    SubinputComponent.prototype.ngOnInit = function () {
        this.components.length = 0;
        this.setConditionTypes();
        if (this.data.length > 0) {
            this.generateComponents();
        }
    };
    SubinputComponent.prototype.addComponent = function () {
        this.componentsReferences = this._componentService.addComponent('SubinputComponent', this._viewContainerReference, this.componentsReferences, this.inputType.value);
    };
    SubinputComponent.prototype.deleteComponent = function () {
        this._componentService.deleteComponent(this.selfIndex, this.parentViewContainerReference, this.parentComponentsReferences);
    };
    SubinputComponent.prototype.generateComponents = function () {
        this.componentsReferences = this._componentService.generateComponents('SubinputComponent', this._viewContainerReference, this.componentsReferences, this.data);
    };
    SubinputComponent.prototype.setData = function () {
        for (var i = 0; i < this.componentsReferences.length; i++) {
            this.components.push(this.componentsReferences[i].instance.setData());
        }
        return {
            index: this.selfIndex, question: this.question.value, answer: this.answer.value,
            inputType: this.inputType.value, condition: this.condition.value, components: this.components
        };
    };
    SubinputComponent.prototype.setConditionTypes = function () {
        if (this.parentInputType === 'Text' || this.parentInputType === 'Yes/No') {
            this.conditionTypes = this.conditionTypes.slice(0, 1);
        }
    };
    SubinputComponent.prototype.checkValidation = function () {
        for (var i = 0; i < this.componentsReferences.length; i++) {
            this.componentsReferences[i].instance.parentInputType = this.inputType.value;
            this.componentsReferences[i].instance.setConditionTypes();
        }
        return this._validationService.checkValidation(new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormArray"](new Array(this.question, this.inputType, this.answer, this.condition)));
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('subViewContainerRef', { read: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"] }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"])
    ], SubinputComponent.prototype, "_viewContainerReference", void 0);
    SubinputComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-subinput',
            template: __webpack_require__(/*! ./subinput.component.html */ "./src/app/components/subinput/subinput.component.html"),
            styles: [__webpack_require__(/*! ./subinput.component.css */ "./src/app/components/subinput/subinput.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_component_service__WEBPACK_IMPORTED_MODULE_4__["ComponentService"], src_app_services_validation_service__WEBPACK_IMPORTED_MODULE_5__["ValidationService"]])
    ], SubinputComponent);
    return SubinputComponent;
}());



/***/ }),

/***/ "./src/app/consts.ts":
/*!***************************!*\
  !*** ./src/app/consts.ts ***!
  \***************************/
/*! exports provided: INPUTTYPES, CONDITIONTYPES, BOOLANSWERS */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "INPUTTYPES", function() { return INPUTTYPES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CONDITIONTYPES", function() { return CONDITIONTYPES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BOOLANSWERS", function() { return BOOLANSWERS; });
var INPUTTYPES = [
    { value: 'Text' },
    { value: 'Number' },
    { value: 'Yes/No' }
];
var CONDITIONTYPES = [
    { value: 'Equals' },
    { value: 'Greater than' },
    { value: 'Less than' }
];
var BOOLANSWERS = [
    { value: 'Yes' },
    { value: 'No' }
];


/***/ }),

/***/ "./src/app/services/component.service.ts":
/*!***********************************************!*\
  !*** ./src/app/services/component.service.ts ***!
  \***********************************************/
/*! exports provided: ComponentService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComponentService", function() { return ComponentService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ComponentService = /** @class */ (function () {
    function ComponentService(_componentFactoryResolver) {
        this._componentFactoryResolver = _componentFactoryResolver;
    }
    ComponentService.prototype.generateComponents = function (componentName, containerReference, componentsReferences, data) {
        var _loop_1 = function (i) {
            console.log('test');
            var factories = Array.from(this_1._componentFactoryResolver['_factories'].keys());
            var factoryClass = factories.find(function (x) { return x.name === componentName; });
            var factory = this_1._componentFactoryResolver.resolveComponentFactory(factoryClass);
            var componentReference = containerReference.createComponent(factory);
            var currentComponent = componentReference.instance;
            var index = data[i].index;
            componentsReferences.push(componentReference);
            currentComponent.selfIndex = index;
            var filteredData = data.filter(function () { return currentComponent.selfIndex === index; });
            currentComponent.question.value = filteredData[i].question;
            currentComponent.inputType.value = filteredData[i].inputType;
            if (filteredData[i].parentInputType) {
                currentComponent.parentInputType = filteredData[i].parentInputType;
            }
            if (filteredData[i].condition) {
                currentComponent.condition.value = filteredData[i].condition;
            }
            if (filteredData[i].answer) {
                currentComponent.answer.value = filteredData[i].answer;
            }
            if (filteredData[i].components) {
                currentComponent.data = filteredData[i].components;
            }
            currentComponent.selfReference = currentComponent;
            currentComponent.parentComponentsReferences = componentsReferences;
            currentComponent.parentViewContainerReference = containerReference;
        };
        var this_1 = this;
        for (var i = 0; i < data.length; i++) {
            _loop_1(i);
        }
        return componentsReferences;
    };
    ComponentService.prototype.addComponent = function (componentName, containerReference, componentsReferences, inputType) {
        var factories = Array.from(this._componentFactoryResolver['_factories'].keys());
        var factoryClass = factories.find(function (x) { return x.name === componentName; });
        var factory = this._componentFactoryResolver.resolveComponentFactory(factoryClass);
        var componentReference = containerReference.createComponent(factory);
        var currentComponent = componentReference.instance;
        componentsReferences.push(componentReference);
        currentComponent.selfIndex = Date.now() + Math.random();
        currentComponent.selfReference = currentComponent;
        currentComponent.parentComponentsReferences = componentsReferences;
        currentComponent.parentInputType = inputType;
        currentComponent.parentViewContainerReference = containerReference;
        return componentsReferences;
    };
    ComponentService.prototype.deleteComponent = function (index, parentViewContainerRefernce, parentComponentsReferences) {
        parentViewContainerRefernce._view.component.componentsReferences = parentViewContainerRefernce._view.component.componentsReferences.filter(function (x) {
            return x.instance.selfIndex !== index;
        });
        var componentReference = parentComponentsReferences.filter(function (x) {
            return x.instance.selfIndex === index;
        })[0];
        parentViewContainerRefernce.remove(parentViewContainerRefernce.indexOf(componentReference));
    };
    ComponentService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ComponentFactoryResolver"]])
    ], ComponentService);
    return ComponentService;
}());



/***/ }),

/***/ "./src/app/services/data-base.service.ts":
/*!***********************************************!*\
  !*** ./src/app/services/data-base.service.ts ***!
  \***********************************************/
/*! exports provided: DataBaseService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataBaseService", function() { return DataBaseService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var DataBaseService = /** @class */ (function () {
    function DataBaseService() {
    }
    DataBaseService.prototype.openDataBase = function () {
        return new Promise(function (resolve, reject) {
            var request = window.indexedDB.open("database", 1);
            request.onupgradeneeded = function () {
                request.result.createObjectStore('state', { keyPath: 'id' });
            };
            request.onsuccess = function () { return resolve(request.result); };
            request.onerror = function () { return reject(request.error); };
            request.onblocked = function () {
                alert('Blocked');
            };
        });
    };
    DataBaseService.prototype.loadData = function (dataBase) {
        return new Promise(function (resolve, reject) {
            var request = dataBase.transaction('state', 'readonly').objectStore('state').get(1);
            request.onsuccess = function () { return resolve(request.result); };
            request.onerror = function () { return reject(request.error); };
        });
    };
    DataBaseService.prototype.saveData = function (dataBase, data) {
        return new Promise(function (resolve, reject) {
            var request = dataBase.transaction('state', 'readwrite').objectStore('state').add({ 'id': 1, 'data': data });
            request.onsuccess = function () { return resolve(request.result); };
            request.onerror = function () { return reject(request.error); };
        });
    };
    DataBaseService.prototype.updateData = function (dataBase, data) {
        return new Promise(function (resolve, reject) {
            var request = dataBase.transaction('state', 'readwrite').objectStore('state').put({ 'id': 1, 'data': data });
            request.onsuccess = function () { return resolve(request.result); };
            request.onerror = function () { return reject(request.error); };
        });
    };
    DataBaseService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], DataBaseService);
    return DataBaseService;
}());



/***/ }),

/***/ "./src/app/services/validation.service.ts":
/*!************************************************!*\
  !*** ./src/app/services/validation.service.ts ***!
  \************************************************/
/*! exports provided: ValidationService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ValidationService", function() { return ValidationService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ValidationService = /** @class */ (function () {
    function ValidationService() {
    }
    ValidationService.prototype.checkValidation = function (formControls) {
        return formControls.valid;
    };
    ValidationService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ValidationService);
    return ValidationService;
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

module.exports = __webpack_require__(/*! E:\Repos\SkyGateJSCoddingChallenge\FormBuilder\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map