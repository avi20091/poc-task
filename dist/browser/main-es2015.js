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

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- <app-employee></app-employee> -->\r\n<!-- <app-employee-custom></app-employee-custom> -->\r\n<ul>\r\n    <li><a mat-button href=\"/#/ngrx\">NgRx Example</a></li>\r\n    <li><a mat-button href=\"/#/customMatGrid\">Custom/Reusable Mat Grid</a></li>\r\n    <li class=\"nav-item\" *ngFor=\"let route of existingRoutes$ | async\">\r\n        <a class=\"nav-link\" routerLinkActive=\"active\" [routerLink]=\"route.path\">{{route.displayName | titlecase}}</a>\r\n    </li>\r\n</ul>\r\n<router-outlet></router-outlet>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/custom-grid/employee.component.html":
/*!******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/custom-grid/employee.component.html ***!
  \******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<custom-lib-custom-mat-grid [tableData]=\"tableData1\" [columnHeader]=\"columnHeader1\"></custom-lib-custom-mat-grid>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/employee/employee.component.html":
/*!***************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/employee/employee.component.html ***!
  \***************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<mat-toolbar color=\"primary\">\r\n  <mat-toolbar-row>    \r\n    <span class=\"example-spacer\"></span>\r\n      <button mat-button color=\"accent\" style=\"margin: 0 10px;position: absolute;\" (click)=\"openInsertDialog()\">\r\n        Insert\r\n      </button> &nbsp;\r\n      <button mat-icon-button id=\"theme-selector\" [mat-menu-trigger-for]=\"themeMenu\"\r\n            i18n-matTooltip=\"@@Select-a-theme\" matTooltip=\"Select a theme!\"\r\n            tabindex=\"-1\">\r\n        <mat-icon class=\"auto-flip\">format_color_fill</mat-icon>\r\n      </button>\r\n\r\n      <mat-menu #themeMenu=\"matMenu\">\r\n        <mat-checkbox [checked]=\"isThemeDark\"\r\n                  (click)=\"$event.stopPropagation()\"\r\n                  (change)=\"toggleDarkness()\"\r\n                  class=\"mat-menu-item theme-selector-is-dark\" i18n=\"@@Dark\">Dark\r\n        </mat-checkbox>\r\n      </mat-menu>\r\n\r\n  </mat-toolbar-row>\r\n</mat-toolbar>\r\n\r\n<app-mat-spinner-overlay *ngIf='showSpinner' overlay=\"true\"></app-mat-spinner-overlay>\r\n<table mat-table [dataSource]=\"dataSource\" matSort class=\"mat-elevation-z8\" *ngIf=\"!showSpinner\">\r\n\r\n    <!-- Row Index Column -->\r\n    <ng-container matColumnDef=\"index\">\r\n      <th mat-header-cell *matHeaderCellDef mat-sort-header> Sr.No. </th>\r\n      <td mat-cell *matCellDef=\"let element; let i = index\">{{i+1}}</td>\r\n    </ng-container>\r\n\r\n    <!-- ID Column -->\r\n    <ng-container matColumnDef=\"id\">\r\n      <th mat-header-cell *matHeaderCellDef mat-sort-header> Employee ID </th>\r\n      <td mat-cell *matCellDef=\"let element\"> {{element.id}} </td>\r\n    </ng-container>\r\n  \r\n    <!-- Name Column -->\r\n    <ng-container matColumnDef=\"name\">\r\n      <th mat-header-cell *matHeaderCellDef mat-sort-header> Name </th>\r\n      <td mat-cell *matCellDef=\"let element\"> {{element.name}} </td>\r\n    </ng-container>\r\n  \r\n    <!-- Surname Column -->\r\n    <ng-container matColumnDef=\"surname\">\r\n      <th mat-header-cell *matHeaderCellDef mat-sort-header> Surname </th>\r\n      <td mat-cell *matCellDef=\"let element\"> {{element.surname}} </td>\r\n    </ng-container>\r\n  \r\n    <!-- Department Column -->\r\n    <ng-container matColumnDef=\"dept\">\r\n      <th mat-header-cell *matHeaderCellDef mat-sort-header> Department </th>\r\n      <td mat-cell *matCellDef=\"let element\"> {{element.dept}} </td>\r\n    </ng-container>\r\n\r\n    <!-- Join Date Column -->\r\n    <ng-container matColumnDef=\"joindate\">\r\n      <th mat-header-cell *matHeaderCellDef mat-sort-header> Join Date </th>\r\n      <td mat-cell *matCellDef=\"let element\"> {{element.joindate}} </td>\r\n    </ng-container>\r\n\r\n    <ng-container matColumnDef=\"action\">\r\n      <th mat-header-cell *matHeaderCellDef> Action </th>\r\n      <td mat-cell *matCellDef=\"let element\"> \r\n          <mat-icon aria-hidden=\"false\" aria-label=\"Example delete icon\" (click)=\"openDeleteDialog(element);\">delete</mat-icon> &nbsp;&nbsp;&nbsp;&nbsp;\r\n          <mat-icon aria-hidden=\"false\" aria-label=\"Example edit icon\" id=\"Update\" (click)=\"openUpdateDialog(element);\">edit</mat-icon>\r\n      </td>\r\n    </ng-container>\r\n  \r\n    <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\r\n    <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\" ></tr>\r\n  </table>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/mat-spinner-overlay/mat-spinner-overlay.component.html":
/*!*************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/mat-spinner-overlay/mat-spinner-overlay.component.html ***!
  \*************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ng-container *ngIf=\"overlay;else progressSpinner\">\n    <div class=\"overlay\">\n        <div class=\"center\">\n            <ng-template [ngTemplateOutlet]=\"progressSpinner\"></ng-template>\n        </div>\n    </div>\n    </ng-container>\n    <ng-template #progressSpinner>\n        <mat-spinner class='track'\n         [diameter]=\"diameter\"\n         [mode]=\"mode\" \n         [color]=\"color\"\n         [strokeWidth]=\"strokeWidth\"\n         [value]=\"value\">\n        </mat-spinner>\n    </ng-template>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/delete-dialog/delete-dialog.component.html":
/*!*********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shared/delete-dialog/delete-dialog.component.html ***!
  \*********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div mat-dialog-title>\n    {{title}}\n  </div>\n  \n  <div mat-dialog-content>\n    {{message}}\n  </div>\n  \n  <div mat-dialog-actions align=\"end\">\n    <button mat-raised-button (click)=\"onConfirm()\">Yes</button>&nbsp;&nbsp;\n    <button mat-raised-button (click)=\"onDismiss()\">No</button>\n  </div>\n\n  <!-- <div>\n    <mat-form-field class=\"example-full-width\">\n      <input matInput placeholder=\"Favorite food\" value=\"Sushi\">\n    </mat-form-field>\n  \n    <mat-form-field class=\"example-full-width\">\n      <input matInput placeholder=\"Favorite food\" value=\"Sushi\">\n    </mat-form-field>\n    <mat-form-field class=\"example-full-width\">\n      <input matInput placeholder=\"Favorite food\" value=\"Sushi\">\n    </mat-form-field>\n  </div>\n  <div>\n    <mat-form-field class=\"example-full-width\">\n      <input matInput placeholder=\"Favorite food\" value=\"Sushi\">\n    </mat-form-field>\n  \n    <mat-form-field class=\"example-full-width\">\n      <input matInput placeholder=\"Favorite food\" value=\"Sushi\">\n    </mat-form-field>\n  </div>\n  <div>\n    <mat-form-field class=\"example-full-width\">\n      <input matInput placeholder=\"Favorite food\" value=\"Sushi\">\n    </mat-form-field>\n  </div> -->");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/insert-dialog/insert-dialog.component.html":
/*!*********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shared/insert-dialog/insert-dialog.component.html ***!
  \*********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<h1 mat-dialog-title>{{title}} Data</h1>\n<div mat-dialog-content>\n  <form name=\"insertForm\" [formGroup]=\"insertForm\">\n    <div>\n      <mat-form-field>\n        <mat-label>Name</mat-label>\n        <input matInput type=\"text\" id=\"name\" formControlName=\"name\" \n         [ngClass]=\"{'is-invalid':insertForm.get('name').touched && insertForm.get('name').invalid}\" required>\n      </mat-form-field>\n      <div *ngIf=\"insertForm.get('name').touched && insertForm.get('name').invalid\"  class=\"invalid-feedback\">\n        <div *ngIf=\"insertForm.get('name').errors.required\">Name is required</div>\n        <div *ngIf=\"insertForm.get('name').errors.minlength\">Name must be min 3 chars</div>\n      </div>\n    </div>\n    \n    <div>\n      <mat-form-field>\n        <mat-label>Surname</mat-label>\n        <input matInput type=\"text\" id=\"surname\" formControlName=\"surname\" \n         [ngClass]=\"{'is-invalid':insertForm.get('surname').touched && insertForm.get('surname').invalid}\" required>\n      </mat-form-field>\n      <div *ngIf=\"insertForm.get('surname').touched && insertForm.get('surname').invalid\"  class=\"invalid-feedback\">\n        <div *ngIf=\"insertForm.get('surname').errors.required\">Surname is required</div>\n        <div *ngIf=\"insertForm.get('surname').errors.minlength\">Surname must be min 3 chars</div>\n      </div>\n    </div>\n    \n    <div>\n      <mat-form-field>\n        <mat-label>Department</mat-label>\n        <input matInput type=\"text\" id=\"dept\" formControlName=\"dept\"  \n        [ngClass]=\"{'is-invalid':insertForm.get('dept').touched && insertForm.get('dept').invalid}\" required>\n      </mat-form-field>\n      <div *ngIf=\"insertForm.get('dept').touched && insertForm.get('dept').invalid\"  class=\"invalid-feedback\">\n        <div *ngIf=\"insertForm.get('dept').errors.required\">Department is required</div>\n        <div *ngIf=\"insertForm.get('dept').errors.minlength\">Department must be min 3 chars</div>\n      </div>\n    </div>\n    \n    <div>\n      <mat-form-field>\n        <mat-label>JoinDate</mat-label>\n        <input matInput [matDatepicker]=\"picker\" id=\"joindate\" type=\"text\" formControlName=\"joindate\"  \n        [ngClass]=\"{'is-invalid':insertForm.get('joindate').touched && insertForm.get('joindate').invalid}\" required>\n        <mat-datepicker-toggle matSuffix [for]=\"picker\"></mat-datepicker-toggle>\n        <mat-datepicker #picker></mat-datepicker>\n      </mat-form-field>\n       <div *ngIf=\"insertForm.get('joindate').touched && insertForm.get('joindate').invalid\"  class=\"invalid-feedback\">\n        <div *ngIf=\"insertForm.get('joindate').errors.required\">Join Date is required</div>\n      </div>\n    </div>\n\n    <!-- <div>\n      <mat-form-field>\n        <mat-label>Qualification</mat-label>\n        <mat-select [(ngModel)]=\"selectedValue\" name=\"food\">\n          <mat-option *ngFor=\"let food of foods\" [value]=\"food.value\">\n            {{food.viewValue}}\n          </mat-option>\n        </mat-select>\n      </mat-form-field>\n    </div> -->\n    \n  </form>\n \n</div>\n<div mat-dialog-actions>\n  <button mat-raised-button [mat-dialog-close]=\"data\" (click)=\"onInsertSubmit()\"  *ngIf=\"this.isSubmit\" [disabled]=\"!insertForm.valid\">Submit</button>&nbsp;&nbsp;&nbsp;&nbsp;\n  <button mat-raised-button [mat-dialog-close]=\"data\" (click)=\"onUpdateSubmit()\"  *ngIf=\"this.isUpdate\" [disabled]=\"!insertForm.valid\">Update</button>&nbsp;\n  <button mat-raised-button (click)=\"onNoClick()\">Cancel</button>\n</div>");

/***/ }),

/***/ "./node_modules/tslib/tslib.es6.js":
/*!*****************************************!*\
  !*** ./node_modules/tslib/tslib.es6.js ***!
  \*****************************************/
/*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __createBinding, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault, __classPrivateFieldGet, __classPrivateFieldSet */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function() { return __extends; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function() { return __assign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function() { return __rest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function() { return __decorate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function() { return __param; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function() { return __metadata; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function() { return __awaiter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function() { return __generator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__createBinding", function() { return __createBinding; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function() { return __exportStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function() { return __values; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function() { return __read; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function() { return __spread; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArrays", function() { return __spreadArrays; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function() { return __await; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function() { return __asyncGenerator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function() { return __asyncDelegator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function() { return __asyncValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function() { return __makeTemplateObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function() { return __importStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function() { return __importDefault; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__classPrivateFieldGet", function() { return __classPrivateFieldGet; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__classPrivateFieldSet", function() { return __classPrivateFieldSet; });
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

function __createBinding(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}

function __exportStar(m, exports) {
    for (var p in m) if (p !== "default" && !exports.hasOwnProperty(p)) exports[p] = m[p];
}

function __values(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result.default = mod;
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}

function __classPrivateFieldGet(receiver, privateMap) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to get private field on non-instance");
    }
    return privateMap.get(receiver);
}

function __classPrivateFieldSet(receiver, privateMap, value) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to set private field on non-instance");
    }
    privateMap.set(receiver, value);
    return value;
}


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



const routes = [];
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
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */");

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
/* harmony import */ var _service_router_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./service/router.service */ "./src/app/service/router.service.ts");
/* harmony import */ var _service_module_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./service/module.service */ "./src/app/service/module.service.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");





let AppComponent = class AppComponent {
    constructor(moduleService, routerService) {
        this.moduleService = moduleService;
        this.routerService = routerService;
        this.existingRoutes$ = this.moduleService.loadModules().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(res => res.forEach(x => {
            this.registerRoute(x);
        })));
    }
    registerRoute(moduleToEnable) {
        this.moduleService.loadModuleSystemJS(moduleToEnable).then((exports) => {
            this.routerService.createAndRegisterRoute(moduleToEnable, exports);
        });
    }
};
AppComponent.ctorParameters = () => [
    { type: _service_module_service__WEBPACK_IMPORTED_MODULE_3__["ModuleService"] },
    { type: _service_router_service__WEBPACK_IMPORTED_MODULE_2__["RouterService"] }
];
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")).default]
    })
], AppComponent);



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: createCompiler, AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createCompiler", function() { return createCompiler; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm2015/animations.js");
/* harmony import */ var _components_employee_employee_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/employee/employee.component */ "./src/app/components/employee/employee.component.ts");
/* harmony import */ var _components_custom_grid_employee_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/custom-grid/employee.component */ "./src/app/components/custom-grid/employee.component.ts");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/table */ "./node_modules/@angular/material/esm2015/table.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/sort */ "./node_modules/@angular/material/esm2015/sort.js");
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/checkbox */ "./node_modules/@angular/material/esm2015/checkbox.js");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/card */ "./node_modules/@angular/material/esm2015/card.js");
/* harmony import */ var _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/grid-list */ "./node_modules/@angular/material/esm2015/grid-list.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/progress-spinner */ "./node_modules/@angular/material/esm2015/progress-spinner.js");
/* harmony import */ var _service_employee_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./service/employee.service */ "./src/app/service/employee.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _shared_delete_dialog_delete_dialog_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./shared/delete-dialog/delete-dialog.component */ "./src/app/shared/delete-dialog/delete-dialog.component.ts");
/* harmony import */ var _shared_insert_dialog_insert_dialog_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./shared/insert-dialog/insert-dialog.component */ "./src/app/shared/insert-dialog/insert-dialog.component.ts");
/* harmony import */ var _service_toaster_service__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./service/toaster.service */ "./src/app/service/toaster.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _components_mat_spinner_overlay_mat_spinner_overlay_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./components/mat-spinner-overlay/mat-spinner-overlay.component */ "./src/app/components/mat-spinner-overlay/mat-spinner-overlay.component.ts");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm2015/store.js");
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @ngrx/effects */ "./node_modules/@ngrx/effects/fesm2015/effects.js");
/* harmony import */ var _store_reducers__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./store/reducers */ "./src/app/store/reducers/index.ts");
/* harmony import */ var _store_employee_effects__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./store/employee.effects */ "./src/app/store/employee.effects.ts");
/* harmony import */ var custom_mat_grid__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! custom-mat-grid */ "./node_modules/custom-mat-grid/fesm2015/custom-mat-grid.js");
/* harmony import */ var _app_service_module_service__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ../app/service/module.service */ "./src/app/service/module.service.ts");
/* harmony import */ var _app_service_router_service__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ../app/service/router.service */ "./src/app/service/router.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");


















// import { HttpModule } from '@angular/http';














function createCompiler(compilerFactory) {
    return compilerFactory.createCompiler();
}
let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
            _components_employee_employee_component__WEBPACK_IMPORTED_MODULE_6__["EmployeeComponent"],
            _components_custom_grid_employee_component__WEBPACK_IMPORTED_MODULE_7__["CustomEmployeeComponent"],
            _shared_delete_dialog_delete_dialog_component__WEBPACK_IMPORTED_MODULE_18__["DeleteDialogComponent"],
            _shared_insert_dialog_insert_dialog_component__WEBPACK_IMPORTED_MODULE_19__["InsertDialogComponent"],
            _components_mat_spinner_overlay_mat_spinner_overlay_component__WEBPACK_IMPORTED_MODULE_22__["MatSpinnerOverlayComponent"]
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"].withServerTransition({ appId: 'serverApp' }),
            _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__["BrowserAnimationsModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__["NoopAnimationsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_9__["ReactiveFormsModule"],
            _angular_material_table__WEBPACK_IMPORTED_MODULE_8__["MatTableModule"],
            _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_13__["MatGridListModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_14__["MatIconModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_14__["MatSnackBarModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_14__["MatToolbarModule"],
            _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_11__["MatCheckboxModule"],
            _angular_material_card__WEBPACK_IMPORTED_MODULE_12__["MatCardModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_14__["MatFormFieldModule"],
            _angular_material_sort__WEBPACK_IMPORTED_MODULE_10__["MatSortModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_14__["MatDialogModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_14__["MatInputModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_14__["MatRadioModule"],
            _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_15__["MatProgressSpinnerModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_17__["HttpClientModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_14__["MatDatepickerModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_14__["MatNativeDateModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_14__["MatMenuModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_14__["MatTooltipModule"],
            _ngrx_store__WEBPACK_IMPORTED_MODULE_23__["StoreModule"].forRoot(_store_reducers__WEBPACK_IMPORTED_MODULE_25__["reducers"]),
            _ngrx_effects__WEBPACK_IMPORTED_MODULE_24__["EffectsModule"].forRoot([_store_employee_effects__WEBPACK_IMPORTED_MODULE_26__["EmployeeEffects"]]),
            custom_mat_grid__WEBPACK_IMPORTED_MODULE_27__["CustomMatGridModule"],
            // HttpModule,
            _angular_router__WEBPACK_IMPORTED_MODULE_30__["RouterModule"].forRoot([
                {
                    path: '', redirectTo: '', pathMatch: 'full'
                },
                {
                    path: 'ngrx', component: _components_employee_employee_component__WEBPACK_IMPORTED_MODULE_6__["EmployeeComponent"]
                },
                {
                    path: 'customMatGrid', component: _components_custom_grid_employee_component__WEBPACK_IMPORTED_MODULE_7__["CustomEmployeeComponent"]
                },
                {
                    path: 'dynamicModuleLoader', component: _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]
                }
            ], { useHash: true })
        ],
        providers: [_service_employee_service__WEBPACK_IMPORTED_MODULE_16__["EmployeeService"], _service_toaster_service__WEBPACK_IMPORTED_MODULE_20__["ToasterService"], _angular_common__WEBPACK_IMPORTED_MODULE_21__["DatePipe"], _app_service_module_service__WEBPACK_IMPORTED_MODULE_28__["ModuleService"], _app_service_router_service__WEBPACK_IMPORTED_MODULE_29__["RouterService"],
            { provide: _angular_core__WEBPACK_IMPORTED_MODULE_2__["COMPILER_OPTIONS"], useValue: {}, multi: true },
            { provide: _angular_core__WEBPACK_IMPORTED_MODULE_2__["CompilerFactory"], useClass: _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_31__["JitCompilerFactory"], deps: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["COMPILER_OPTIONS"]] },
            { provide: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Compiler"], useFactory: createCompiler, deps: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["CompilerFactory"]] },
            { provide: _angular_common__WEBPACK_IMPORTED_MODULE_21__["LocationStrategy"], useClass: _angular_common__WEBPACK_IMPORTED_MODULE_21__["HashLocationStrategy"] }],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]],
        entryComponents: [_shared_delete_dialog_delete_dialog_component__WEBPACK_IMPORTED_MODULE_18__["DeleteDialogComponent"], _shared_insert_dialog_insert_dialog_component__WEBPACK_IMPORTED_MODULE_19__["InsertDialogComponent"]],
        exports: [_angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_15__["MatProgressSpinnerModule"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/components/custom-grid/employee.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/components/custom-grid/employee.component.ts ***!
  \**************************************************************/
/*! exports provided: CustomEmployeeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomEmployeeComponent", function() { return CustomEmployeeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let CustomEmployeeComponent = class CustomEmployeeComponent {
    constructor() {
        this.columnHeader1 = { 'studentID1': 'Student ID', 'fname1': 'First Name', 'weight1': 'Weight', 'symbol1': 'Symbol' };
        this.tableData1 = [
            { studentID1: 1, fname1: 'Hydrogen', weight1: 1.0079, symbol1: 'H' },
            { studentID1: 2, fname1: 'Helium', weight1: 4.0026, symbol1: 'He' },
            { studentID1: 3, fname1: 'Lithium', weight1: 6.941, symbol1: 'Li' },
            { studentID1: 4, fname1: 'Beryllium', weight1: 9.0122, symbol1: 'Be' },
            { studentID1: 5, fname1: 'Boron', weight1: 10.811, symbol1: 'B' },
            { studentID1: 6, fname1: 'Carbon', weight1: 12.0107, symbol1: 'C' },
            { studentID1: 7, fname1: 'Nitrogen', weight1: 14.0067, symbol1: 'N' },
            { studentID1: 8, fname1: 'Oxygen', weight1: 15.9994, symbol1: 'O' },
            { studentID1: 9, fname1: 'Fluorine', weight1: 18.9984, symbol1: 'F' },
            { studentID1: 10, fname1: 'Neon', weight1: 20.1797, symbol1: 'Ne' },
        ];
    }
};
CustomEmployeeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-employee-custom',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./employee.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/custom-grid/employee.component.html")).default
    })
], CustomEmployeeComponent);



/***/ }),

/***/ "./src/app/components/employee/employee.component.scss":
/*!*************************************************************!*\
  !*** ./src/app/components/employee/employee.component.scss ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("table {\n  width: 100%;\n}\n\nth.mat-sort-header-sorted {\n  color: black;\n}\n\n.spacer {\n  flex: 1 1 auto;\n}\n\n::ng-deep .mat-progress-spinner circle, .mat-spinner circle {\n  stroke: #6ebe49;\n}\n\n::ng-deep .mat-progress-spinner circle {\n  fill: transparent;\n  transform-origin: center;\n  transition: stroke-dashoffset 225ms linear !important;\n}\n\n::ng-deep .mat-progress-spinner.mat-progress-spinner-indeterminate-animation[mode=indeterminate] circle {\n  transition-property: stroke !important;\n  -webkit-animation-duration: 4s !important;\n          animation-duration: 4s !important;\n  -webkit-animation-timing-function: cubic-bezier(0.35, 0, 0.25, 1) !important;\n          animation-timing-function: cubic-bezier(0.35, 0, 0.25, 1) !important;\n  -webkit-animation-iteration-count: infinite !important;\n          animation-iteration-count: infinite !important;\n}\n\n.example-icon {\n  padding: 0 14px;\n}\n\n.example-spacer {\n  flex: 1 1 auto;\n}\n\n.theme-selectors-container {\n  width: 190px;\n  margin: 0 8px;\n}\n\nbutton.theme-selector {\n  width: 80px;\n  height: 80px;\n}\n\ndiv.theme-primary {\n  width: 70px;\n  height: 70px;\n  border-radius: 50%;\n}\n\ndiv.theme-accent {\n  width: 25px;\n  height: 25px;\n  position: absolute;\n  bottom: 0;\n  left: 0;\n}\n\ndiv.theme-warn {\n  width: 15px;\n  height: 15px;\n  position: absolute;\n  bottom: 7%;\n  left: 20%;\n  transform: rotate(45deg);\n}\n\n.theme-check {\n  color: white;\n  font-size: 3.2em;\n}\n\n.theme-selector-is-dark {\n  font-weight: bold;\n  font-size: 1.2em;\n}\n\n.center {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9lbXBsb3llZS9DOlxcVXNlcnNcXGhwXFxEb3dubG9hZHNcXENydWRQT0MgKDEpXFxDcnVkUE9DL3NyY1xcYXBwXFxjb21wb25lbnRzXFxlbXBsb3llZVxcZW1wbG95ZWUuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2NvbXBvbmVudHMvZW1wbG95ZWUvZW1wbG95ZWUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxXQUFBO0FDQ0o7O0FERUU7RUFDRSxZQUFBO0FDQ0o7O0FEQ0U7RUFDRSxjQUFBO0FDRUo7O0FEQ0U7RUFDRSxlQUFBO0FDRUo7O0FEQUU7RUFDRSxpQkFBQTtFQUNBLHdCQUFBO0VBQ0EscURBQUE7QUNHSjs7QUREQTtFQUNFLHNDQUFBO0VBQ0EseUNBQUE7VUFBQSxpQ0FBQTtFQUNBLDRFQUFBO1VBQUEsb0VBQUE7RUFDQSxzREFBQTtVQUFBLDhDQUFBO0FDSUY7O0FEREE7RUFDRSxlQUFBO0FDSUY7O0FEREE7RUFDRSxjQUFBO0FDSUY7O0FESUE7RUFDQyxZQUFBO0VBQ0EsYUFBQTtBQ0REOztBRElBO0VBVEMsV0FVYztFQVRkLFlBQUE7QUNTRDs7QURHQTtFQWJDLFdBY2M7RUFiZCxZQUFBO0VBY0Esa0JBQUE7QUNDRDs7QURFQTtFQWxCQyxXQW1CYztFQWxCZCxZQUFBO0VBbUJBLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLE9BQUE7QUNFRDs7QURDQTtFQXpCQyxXQTBCYztFQXpCZCxZQUFBO0VBMEJBLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLFNBQUE7RUFDQSx3QkFBQTtBQ0dEOztBREFBO0VBQ0MsWUFBQTtFQUNBLGdCQUFBO0FDR0Q7O0FEREE7RUFDQyxpQkFBQTtFQUNBLGdCQUFBO0FDSUQ7O0FERkE7RUFDQyxrQkFBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0VBQ0EsZ0NBQUE7QUNLRCIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvZW1wbG95ZWUvZW1wbG95ZWUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJ0YWJsZSB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICB9XHJcbiAgXHJcbiAgdGgubWF0LXNvcnQtaGVhZGVyLXNvcnRlZCB7XHJcbiAgICBjb2xvcjogYmxhY2s7XHJcbiAgfVxyXG4gIC5zcGFjZXIge1xyXG4gICAgZmxleDogMSAxIGF1dG87XHJcbiAgfVxyXG4gIFxyXG4gIDo6bmctZGVlcCAubWF0LXByb2dyZXNzLXNwaW5uZXIgY2lyY2xlLCAubWF0LXNwaW5uZXIgY2lyY2xlIHtcclxuICAgIHN0cm9rZTogIzZlYmU0OTtcclxuICB9XHJcbiAgOjpuZy1kZWVwIC5tYXQtcHJvZ3Jlc3Mtc3Bpbm5lciBjaXJjbGUge1xyXG4gICAgZmlsbDogdHJhbnNwYXJlbnQ7XHJcbiAgICB0cmFuc2Zvcm0tb3JpZ2luOiBjZW50ZXI7XHJcbiAgICB0cmFuc2l0aW9uOiBzdHJva2UtZGFzaG9mZnNldCAyMjVtcyBsaW5lYXIgIWltcG9ydGFudDtcclxufVxyXG46Om5nLWRlZXAgLm1hdC1wcm9ncmVzcy1zcGlubmVyLm1hdC1wcm9ncmVzcy1zcGlubmVyLWluZGV0ZXJtaW5hdGUtYW5pbWF0aW9uW21vZGU9aW5kZXRlcm1pbmF0ZV0gY2lyY2xlIHtcclxuICB0cmFuc2l0aW9uLXByb3BlcnR5OiBzdHJva2UgIWltcG9ydGFudDtcclxuICBhbmltYXRpb24tZHVyYXRpb246IDRzICFpbXBvcnRhbnQ7XHJcbiAgYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogY3ViaWMtYmV6aWVyKC4zNSwwLC4yNSwxKSAhaW1wb3J0YW50O1xyXG4gIGFuaW1hdGlvbi1pdGVyYXRpb24tY291bnQ6IGluZmluaXRlICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5leGFtcGxlLWljb24ge1xyXG4gIHBhZGRpbmc6IDAgMTRweDtcclxufVxyXG5cclxuLmV4YW1wbGUtc3BhY2VyIHtcclxuICBmbGV4OiAxIDEgYXV0bztcclxufVxyXG5cclxuQG1peGluIHNpemUoJHdpZHRoLCAkaGVpZ2h0OiBudWxsKSB7XHJcblx0d2lkdGg6ICR3aWR0aDtcclxuXHRoZWlnaHQ6IGlmKCRoZWlnaHQ9PW51bGwsICR3aWR0aCwgJGhlaWdodCk7XHJcbn1cclxuXHJcbi50aGVtZS1zZWxlY3RvcnMtY29udGFpbmVye1xyXG5cdHdpZHRoOiAxOTBweDtcclxuXHRtYXJnaW46IDAgOHB4O1xyXG59XHJcblxyXG5idXR0b24udGhlbWUtc2VsZWN0b3Ige1xyXG5cdEBpbmNsdWRlIHNpemUoODBweCk7XHJcbn1cclxuXHJcbmRpdi50aGVtZS1wcmltYXJ5IHtcclxuXHRAaW5jbHVkZSBzaXplKDcwcHgpO1xyXG5cdGJvcmRlci1yYWRpdXM6IDUwJTtcclxufVxyXG5cclxuZGl2LnRoZW1lLWFjY2VudCB7XHJcblx0QGluY2x1ZGUgc2l6ZSgyNXB4KTtcclxuXHRwb3NpdGlvbjogYWJzb2x1dGU7XHJcblx0Ym90dG9tOiAwO1xyXG5cdGxlZnQ6IDA7XHJcbn1cclxuXHJcbmRpdi50aGVtZS13YXJuIHtcclxuXHRAaW5jbHVkZSBzaXplKDE1cHgpO1xyXG5cdHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuXHRib3R0b206IDclO1xyXG5cdGxlZnQ6IDIwJTtcclxuXHR0cmFuc2Zvcm06IHJvdGF0ZSg0NWRlZyk7XHJcbn1cclxuXHJcbi50aGVtZS1jaGVjayB7XHJcblx0Y29sb3I6IHdoaXRlO1xyXG5cdGZvbnQtc2l6ZTogMy4yZW07XHJcbn1cclxuLnRoZW1lLXNlbGVjdG9yLWlzLWRhcmsge1xyXG5cdGZvbnQtd2VpZ2h0OiBib2xkO1xyXG5cdGZvbnQtc2l6ZTogMS4yZW07XHJcbn1cclxuLmNlbnRlciB7XHJcblx0cG9zaXRpb246IGFic29sdXRlO1xyXG5cdHRvcDogNTAlO1xyXG5cdGxlZnQ6IDUwJTtcclxuXHR0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcclxufSIsInRhYmxlIHtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbnRoLm1hdC1zb3J0LWhlYWRlci1zb3J0ZWQge1xuICBjb2xvcjogYmxhY2s7XG59XG5cbi5zcGFjZXIge1xuICBmbGV4OiAxIDEgYXV0bztcbn1cblxuOjpuZy1kZWVwIC5tYXQtcHJvZ3Jlc3Mtc3Bpbm5lciBjaXJjbGUsIC5tYXQtc3Bpbm5lciBjaXJjbGUge1xuICBzdHJva2U6ICM2ZWJlNDk7XG59XG5cbjo6bmctZGVlcCAubWF0LXByb2dyZXNzLXNwaW5uZXIgY2lyY2xlIHtcbiAgZmlsbDogdHJhbnNwYXJlbnQ7XG4gIHRyYW5zZm9ybS1vcmlnaW46IGNlbnRlcjtcbiAgdHJhbnNpdGlvbjogc3Ryb2tlLWRhc2hvZmZzZXQgMjI1bXMgbGluZWFyICFpbXBvcnRhbnQ7XG59XG5cbjo6bmctZGVlcCAubWF0LXByb2dyZXNzLXNwaW5uZXIubWF0LXByb2dyZXNzLXNwaW5uZXItaW5kZXRlcm1pbmF0ZS1hbmltYXRpb25bbW9kZT1pbmRldGVybWluYXRlXSBjaXJjbGUge1xuICB0cmFuc2l0aW9uLXByb3BlcnR5OiBzdHJva2UgIWltcG9ydGFudDtcbiAgYW5pbWF0aW9uLWR1cmF0aW9uOiA0cyAhaW1wb3J0YW50O1xuICBhbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBjdWJpYy1iZXppZXIoMC4zNSwgMCwgMC4yNSwgMSkgIWltcG9ydGFudDtcbiAgYW5pbWF0aW9uLWl0ZXJhdGlvbi1jb3VudDogaW5maW5pdGUgIWltcG9ydGFudDtcbn1cblxuLmV4YW1wbGUtaWNvbiB7XG4gIHBhZGRpbmc6IDAgMTRweDtcbn1cblxuLmV4YW1wbGUtc3BhY2VyIHtcbiAgZmxleDogMSAxIGF1dG87XG59XG5cbi50aGVtZS1zZWxlY3RvcnMtY29udGFpbmVyIHtcbiAgd2lkdGg6IDE5MHB4O1xuICBtYXJnaW46IDAgOHB4O1xufVxuXG5idXR0b24udGhlbWUtc2VsZWN0b3Ige1xuICB3aWR0aDogODBweDtcbiAgaGVpZ2h0OiA4MHB4O1xufVxuXG5kaXYudGhlbWUtcHJpbWFyeSB7XG4gIHdpZHRoOiA3MHB4O1xuICBoZWlnaHQ6IDcwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbn1cblxuZGl2LnRoZW1lLWFjY2VudCB7XG4gIHdpZHRoOiAyNXB4O1xuICBoZWlnaHQ6IDI1cHg7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYm90dG9tOiAwO1xuICBsZWZ0OiAwO1xufVxuXG5kaXYudGhlbWUtd2FybiB7XG4gIHdpZHRoOiAxNXB4O1xuICBoZWlnaHQ6IDE1cHg7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYm90dG9tOiA3JTtcbiAgbGVmdDogMjAlO1xuICB0cmFuc2Zvcm06IHJvdGF0ZSg0NWRlZyk7XG59XG5cbi50aGVtZS1jaGVjayB7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgZm9udC1zaXplOiAzLjJlbTtcbn1cblxuLnRoZW1lLXNlbGVjdG9yLWlzLWRhcmsge1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgZm9udC1zaXplOiAxLjJlbTtcbn1cblxuLmNlbnRlciB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiA1MCU7XG4gIGxlZnQ6IDUwJTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG59Il19 */");

/***/ }),

/***/ "./src/app/components/employee/employee.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/components/employee/employee.component.ts ***!
  \***********************************************************/
/*! exports provided: EmployeeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmployeeComponent", function() { return EmployeeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/sort */ "./node_modules/@angular/material/esm2015/sort.js");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/table */ "./node_modules/@angular/material/esm2015/table.js");
/* harmony import */ var src_app_service_employee_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/service/employee.service */ "./src/app/service/employee.service.ts");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm2015/dialog.js");
/* harmony import */ var src_app_shared_delete_dialog_delete_dialog_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/shared/delete-dialog/delete-dialog.component */ "./src/app/shared/delete-dialog/delete-dialog.component.ts");
/* harmony import */ var src_app_shared_insert_dialog_insert_dialog_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/shared/insert-dialog/insert-dialog.component */ "./src/app/shared/insert-dialog/insert-dialog.component.ts");
/* harmony import */ var src_app_service_toaster_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/service/toaster.service */ "./src/app/service/toaster.service.ts");
/* harmony import */ var _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/cdk/overlay */ "./node_modules/@angular/cdk/esm2015/overlay.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm2015/store.js");











const THEME_DARKNESS_SUFFIX = `-dark`;
let EmployeeComponent = class EmployeeComponent {
    constructor(store, empservice, dialog, toasterService, overlayContainer) {
        this.store = store;
        this.empservice = empservice;
        this.dialog = dialog;
        this.toasterService = toasterService;
        this.overlayContainer = overlayContainer;
        this.themes = [
            "deeppurple-amber",
            "indigo-pink",
            "pink-bluegrey",
            "purple-green",
        ];
        this.isThemeDark = false;
        this.displayedColumns = ['index', 'id', 'name', 'surname', 'dept', 'joindate', 'action'];
        this.showSpinner = true;
        this.setTheme('indigo-pink', false);
    }
    setTheme(theme, darkness = null) {
        if (darkness === null)
            darkness = this.isThemeDark;
        else if (this.isThemeDark === darkness) {
            if (this.activeTheme === theme)
                return;
        }
        else
            this.isThemeDark = darkness;
        this.activeTheme = theme;
        const cssClass = darkness === true ? theme + THEME_DARKNESS_SUFFIX : theme;
        const classList = this.overlayContainer.getContainerElement().classList;
        if (classList.contains(this.activeThemeCssClass))
            classList.replace(this.activeThemeCssClass, cssClass);
        else
            classList.add(cssClass);
        this.activeThemeCssClass = cssClass;
    }
    toggleDarkness() {
        this.setTheme(this.activeTheme, !this.isThemeDark);
    }
    set content(sort) {
        if (this.dataSource) {
            this.dataSource.sort = sort;
        }
    }
    ngOnInit() {
        this.getEmployeeDetails();
    }
    getEmployeeDetails() {
        this.empservice.getEmployee().subscribe(res => {
            this.showSpinner = false;
            this.result = res;
            this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatTableDataSource"](this.result);
        });
    }
    openDeleteDialog(element) {
        const message = "Are you sure to delete this row ?";
        const title = "Delete Row";
        const dialogRef = this.dialog.open(src_app_shared_delete_dialog_delete_dialog_component__WEBPACK_IMPORTED_MODULE_6__["DeleteDialogComponent"], {
            minWidth: "400px",
            disableClose: true,
            data: { title: title, message: message, id: element.id }
        });
        dialogRef.afterClosed().subscribe(dialogResult => {
            if (dialogResult) {
                let successMessage = 'Record Deleted Successfully...!!!';
                this.toasterService.showToaster(successMessage, 'ok');
                this.showSpinner = false;
                this.getEmployeeDetails();
            }
        });
    }
    openInsertDialog() {
        const title = "Insert";
        const dialogRef = this.dialog.open(src_app_shared_insert_dialog_insert_dialog_component__WEBPACK_IMPORTED_MODULE_7__["InsertDialogComponent"], {
            width: '250px',
            data: { title: title }
        });
        dialogRef.afterClosed().subscribe(result => {
            console.log('The dialog was closed');
            if (result) {
                let successMessage = 'Record Inserted Successfully...!!!';
                this.toasterService.showToaster(successMessage, 'ok');
                this.showSpinner = false;
                this.getEmployeeDetails();
            }
        });
    }
    openUpdateDialog(element) {
        const title = "Update";
        const dialogRef = this.dialog.open(src_app_shared_insert_dialog_insert_dialog_component__WEBPACK_IMPORTED_MODULE_7__["InsertDialogComponent"], {
            width: '250px',
            data: { title: title, elem: element }
        });
        dialogRef.afterClosed().subscribe(result => {
            console.log('The dialog was closed');
            if (result) {
                let successMessage = 'Record Updated Successfully...!!!';
                this.toasterService.showToaster(successMessage, 'ok');
                this.showSpinner = false;
                this.getEmployeeDetails();
            }
        });
    }
};
EmployeeComponent.ctorParameters = () => [
    { type: _ngrx_store__WEBPACK_IMPORTED_MODULE_10__["Store"] },
    { type: src_app_service_employee_service__WEBPACK_IMPORTED_MODULE_4__["EmployeeService"] },
    { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__["MatDialog"] },
    { type: src_app_service_toaster_service__WEBPACK_IMPORTED_MODULE_8__["ToasterService"] },
    { type: _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_9__["OverlayContainer"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"])('class')
], EmployeeComponent.prototype, "activeThemeCssClass", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material_sort__WEBPACK_IMPORTED_MODULE_2__["MatSort"], { static: false })
], EmployeeComponent.prototype, "content", null);
EmployeeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-employee',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./employee.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/employee/employee.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./employee.component.scss */ "./src/app/components/employee/employee.component.scss")).default]
    })
], EmployeeComponent);



/***/ }),

/***/ "./src/app/components/mat-spinner-overlay/mat-spinner-overlay.component.scss":
/*!***********************************************************************************!*\
  !*** ./src/app/components/mat-spinner-overlay/mat-spinner-overlay.component.scss ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".center {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translateX(-50%) translateY(-50%);\n}\n\n.overlay {\n  height: 100vh;\n  width: 100%;\n  background-color: rgba(0, 0, 0, 0.286);\n  z-index: 10;\n  top: 0;\n  left: 0;\n  position: fixed;\n}\n\n:host ::ng-deep .track circle {\n  stroke-opacity: 0.3 !important;\n}\n\n.spacer {\n  flex: 1 1 auto;\n}\n\n::ng-deep .mat-progress-spinner circle, .mat-spinner circle {\n  stroke: #6ebe49;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9tYXQtc3Bpbm5lci1vdmVybGF5L0M6XFxVc2Vyc1xcaHBcXERvd25sb2Fkc1xcQ3J1ZFBPQyAoMSlcXENydWRQT0Mvc3JjXFxhcHBcXGNvbXBvbmVudHNcXG1hdC1zcGlubmVyLW92ZXJsYXlcXG1hdC1zcGlubmVyLW92ZXJsYXkuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2NvbXBvbmVudHMvbWF0LXNwaW5uZXItb3ZlcmxheS9tYXQtc3Bpbm5lci1vdmVybGF5LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksa0JBQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtFQUdBLDRDQUFBO0FDQ0o7O0FERUE7RUFDRSxhQUFBO0VBQ0EsV0FBQTtFQUNBLHNDQUFBO0VBQ0EsV0FBQTtFQUNBLE1BQUE7RUFDQSxPQUFBO0VBQ0EsZUFBQTtBQ0NGOztBRENBO0VBQ0UsOEJBQUE7QUNFRjs7QURDQTtFQUNFLGNBQUE7QUNFRjs7QURDQTtFQUNFLGVBQUE7QUNFRiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbWF0LXNwaW5uZXItb3ZlcmxheS9tYXQtc3Bpbm5lci1vdmVybGF5LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNlbnRlciB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDUwJTtcclxuICAgIGxlZnQ6IDUwJTtcclxuICAgIC1tb3otdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpIHRyYW5zbGF0ZVkoLTUwJSk7XHJcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKSB0cmFuc2xhdGVZKC01MCUpO1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpIHRyYW5zbGF0ZVkoLTUwJSk7XHJcbn1cclxuXHJcbi5vdmVybGF5e1xyXG4gIGhlaWdodDoxMDB2aDtcclxuICB3aWR0aDoxMDAlO1xyXG4gIGJhY2tncm91bmQtY29sb3I6cmdiYSgwLCAwLCAwLCAwLjI4Nik7XHJcbiAgei1pbmRleDogICAgMTA7XHJcbiAgdG9wOiAgICAgICAgMDsgXHJcbiAgbGVmdDogICAgICAgMDsgXHJcbiAgcG9zaXRpb246ICAgZml4ZWQ7XHJcbn1cclxuOmhvc3QgOjpuZy1kZWVwIC50cmFjayBjaXJjbGV7ICAgICAgIFxyXG4gIHN0cm9rZS1vcGFjaXR5OiAwLjMgIWltcG9ydGFudDtcclxufVxyXG5cclxuLnNwYWNlciB7XHJcbiAgZmxleDogMSAxIGF1dG87XHJcbn1cclxuXHJcbjo6bmctZGVlcCAubWF0LXByb2dyZXNzLXNwaW5uZXIgY2lyY2xlLCAubWF0LXNwaW5uZXIgY2lyY2xlIHtcclxuICBzdHJva2U6ICM2ZWJlNDk7XHJcbn0iLCIuY2VudGVyIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDUwJTtcbiAgbGVmdDogNTAlO1xuICAtbW96LXRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKSB0cmFuc2xhdGVZKC01MCUpO1xuICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKSB0cmFuc2xhdGVZKC01MCUpO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSkgdHJhbnNsYXRlWSgtNTAlKTtcbn1cblxuLm92ZXJsYXkge1xuICBoZWlnaHQ6IDEwMHZoO1xuICB3aWR0aDogMTAwJTtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjI4Nik7XG4gIHotaW5kZXg6IDEwO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbn1cblxuOmhvc3QgOjpuZy1kZWVwIC50cmFjayBjaXJjbGUge1xuICBzdHJva2Utb3BhY2l0eTogMC4zICFpbXBvcnRhbnQ7XG59XG5cbi5zcGFjZXIge1xuICBmbGV4OiAxIDEgYXV0bztcbn1cblxuOjpuZy1kZWVwIC5tYXQtcHJvZ3Jlc3Mtc3Bpbm5lciBjaXJjbGUsIC5tYXQtc3Bpbm5lciBjaXJjbGUge1xuICBzdHJva2U6ICM2ZWJlNDk7XG59Il19 */");

/***/ }),

/***/ "./src/app/components/mat-spinner-overlay/mat-spinner-overlay.component.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/components/mat-spinner-overlay/mat-spinner-overlay.component.ts ***!
  \*********************************************************************************/
/*! exports provided: MatSpinnerOverlayComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatSpinnerOverlayComponent", function() { return MatSpinnerOverlayComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let MatSpinnerOverlayComponent = class MatSpinnerOverlayComponent {
    constructor() {
        this.value = 100;
        this.diameter = 100;
        this.mode = "indeterminate";
        this.strokeWidth = 10;
        this.overlay = false;
        this.color = "primary";
    }
    ngOnInit() {
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], MatSpinnerOverlayComponent.prototype, "value", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], MatSpinnerOverlayComponent.prototype, "diameter", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], MatSpinnerOverlayComponent.prototype, "mode", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], MatSpinnerOverlayComponent.prototype, "strokeWidth", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], MatSpinnerOverlayComponent.prototype, "overlay", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], MatSpinnerOverlayComponent.prototype, "color", void 0);
MatSpinnerOverlayComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-mat-spinner-overlay',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./mat-spinner-overlay.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/mat-spinner-overlay/mat-spinner-overlay.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./mat-spinner-overlay.component.scss */ "./src/app/components/mat-spinner-overlay/mat-spinner-overlay.component.scss")).default]
    })
], MatSpinnerOverlayComponent);



/***/ }),

/***/ "./src/app/service/employee.service.ts":
/*!*********************************************!*\
  !*** ./src/app/service/employee.service.ts ***!
  \*********************************************/
/*! exports provided: EmployeeService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmployeeService", function() { return EmployeeService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");





let EmployeeService = class EmployeeService {
    constructor(http, zone) {
        this.http = http;
        this.zone = zone;
        this.baseurlLocal = "http://localhost:3000";
        this.httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                'Content-Type': 'application/text',
                'Access-Control-Allow-Origin': '*',
                'responseType': 'text/html'
            })
        };
    }
    errorHandle(error) {
        let errorMessage = '';
        if (error.error instanceof ErrorEvent) {
            console.log(error);
            // Get client-side error
            if (error.error.status == 0 || error.error.status == -1) {
                errorMessage = 'Unreachable : Server connection failed';
            }
            else {
                errorMessage = error.error.message;
            }
        }
        else {
            // Get server-side error
            if (error.status == 0 || error.status == -1) {
                errorMessage = 'Unreachable : Server connection failed';
            }
            else {
                if (error.error.message && error.error.message !== "") {
                    errorMessage = `Error : ${error.error.message}`;
                }
                else {
                    errorMessage = `Error : Bad Request`;
                }
            }
        }
        //this.zone.run(() => this.toasterService.showToaster(errorMessage, 'snackbar-error'));
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["throwError"])(errorMessage);
    }
    getEmployee() {
        return this.http.get(this.baseurlLocal + '/data')
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(res => res), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(error => {
            return this.errorHandle(error);
        }));
    }
    getDeleteEmployee(id) {
        return this.http.delete(this.baseurlLocal + '/data/' + id)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(res => res), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(error => {
            return this.errorHandle(error);
        }));
    }
    getInsertEmployee(parameters) {
        return this.http.post(this.baseurlLocal + '/data/', parameters)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(res => res), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(error => {
            return this.errorHandle(error);
        }));
    }
    getUpdateEmployee(id, parameters) {
        return this.http.put(this.baseurlLocal + '/data/' + id, parameters, {})
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(res => res), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(error => {
            return this.errorHandle(error);
        }));
    }
};
EmployeeService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"] }
];
EmployeeService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], EmployeeService);



/***/ }),

/***/ "./src/app/service/module.service.ts":
/*!*******************************************!*\
  !*** ./src/app/service/module.service.ts ***!
  \*******************************************/
/*! exports provided: ModuleService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModuleService", function() { return ModuleService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var rxjs_add_operator_map__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/add/operator/map */ "./node_modules/rxjs-compat/_esm2015/add/operator/map.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _clr_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @clr/angular */ "./node_modules/@clr/angular/fesm2015/clr-angular.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm2015/animations.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/table */ "./node_modules/@angular/material/esm2015/table.js");

// import { Http } from '@angular/http';



// Needed for the new modules







let ModuleService = class ModuleService {
    constructor(compiler, http) {
        this.compiler = compiler;
        this.http = http;
        this.source = `http://${window.location.host}/`;
        console.log(compiler);
    }
    loadModules() {
        return this.http.get("./assets/modules.json");
    }
    loadModule(moduleInfo) {
        let url = this.source + moduleInfo.location;
        return this.http.get(url).
            //map(res => res.text()).
            map(source => {
            const exports = {}; // this will hold module exports
            const modules = {
                '@angular/core': _angular_core__WEBPACK_IMPORTED_MODULE_2__,
                '@angular/common': _angular_common__WEBPACK_IMPORTED_MODULE_4__,
                '@angular/router': _angular_router__WEBPACK_IMPORTED_MODULE_5__,
                '@angular/platform-browser/animations': _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_7__,
                '@clr/angular': _clr_angular__WEBPACK_IMPORTED_MODULE_6__,
                '@angular/material': _angular_material__WEBPACK_IMPORTED_MODULE_8__,
                '@angular/material/table': _angular_material_table__WEBPACK_IMPORTED_MODULE_9__
            };
            // shim 'require' and eval
            const require = (module) => modules[module];
            eval(source);
            // Need to check if there is another solution for eval as this is described as 'Evil'
            this.compiler.compileModuleAndAllComponentsSync(exports[`${moduleInfo.moduleName}`]);
            //console.log(exports); // disabled as this object is cleared anyway
            return exports;
        });
    }
    loadModuleSystemJS(moduleInfo) {
        let url = this.source + moduleInfo.location;
        SystemJS.set('@angular/core', SystemJS.newModule(_angular_core__WEBPACK_IMPORTED_MODULE_2__));
        SystemJS.set('@angular/common', SystemJS.newModule(_angular_common__WEBPACK_IMPORTED_MODULE_4__));
        SystemJS.set('@angular/router', SystemJS.newModule(_angular_router__WEBPACK_IMPORTED_MODULE_5__));
        SystemJS.set('@angular/platform-browser/animations', SystemJS.newModule(_angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_7__));
        SystemJS.set('@clr/angular', SystemJS.newModule(_clr_angular__WEBPACK_IMPORTED_MODULE_6__));
        SystemJS.set('@angular/material', SystemJS.newModule(_angular_material__WEBPACK_IMPORTED_MODULE_8__));
        SystemJS.set('@angular/material/table', SystemJS.newModule(_angular_material_table__WEBPACK_IMPORTED_MODULE_9__));
        // now, import the new module
        return SystemJS.import(`${url}`).then((module) => {
            console.log(module);
            return this.compiler.compileModuleAndAllComponentsAsync(module[`${moduleInfo.moduleName}`]).then(compiled => {
                console.log(compiled);
                return module;
            });
        });
    }
};
ModuleService.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Compiler"] },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }
];
ModuleService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])()
], ModuleService);



/***/ }),

/***/ "./src/app/service/router.service.ts":
/*!*******************************************!*\
  !*** ./src/app/service/router.service.ts ***!
  \*******************************************/
/*! exports provided: RouterService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RouterService", function() { return RouterService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");




let RouterService = class RouterService {
    constructor(router, compiler) {
        this.router = router;
        this.compiler = compiler;
        this.existingRoutes = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"](this.routes);
    }
    get routes() {
        var routesToReturn = this.router.config;
        return routesToReturn.filter(x => x.path !== "");
    }
    createAndRegisterRoute(moduleToRegister, exports) {
        let route = {
            path: moduleToRegister.path,
            loadChildren: () => exports[`${moduleToRegister.moduleName}`]
        };
        this.registerRoute(route);
    }
    routeIsRegistered(path) {
        return this.router.config.filter(r => r.path === path).length > 0;
    }
    registerRoute(route) {
        if (this.routeIsRegistered(route.path))
            return;
        this.router.config.push(route);
        this.updateRouteConfig(this.router.config);
    }
    unRegisterRoute(path) {
        console.log("Unregister", path);
        this.updateRouteConfig(this.router.config.filter(route => route.path !== path));
    }
    updateRouteConfig(config) {
        this.router.resetConfig(config);
        this.existingRoutes.next(this.routes);
    }
};
RouterService.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Compiler"] }
];
RouterService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({ providedIn: 'root' })
], RouterService);



/***/ }),

/***/ "./src/app/service/toaster.service.ts":
/*!********************************************!*\
  !*** ./src/app/service/toaster.service.ts ***!
  \********************************************/
/*! exports provided: ToasterService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ToasterService", function() { return ToasterService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");



let ToasterService = class ToasterService {
    constructor(snackBar) {
        this.snackBar = snackBar;
        this.showToaster = (msg, panelClass) => {
            let config = new _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSnackBarConfig"]();
            config.verticalPosition = 'top',
                config.horizontalPosition = 'center';
            config.duration = 5000;
            if (typeof panelClass == 'string') {
                panelClass = [panelClass];
            }
            config.panelClass = panelClass,
                this.snackBar.open(msg, "CLOSE", config);
        };
    }
};
ToasterService.ctorParameters = () => [
    { type: _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSnackBar"] }
];
ToasterService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], ToasterService);



/***/ }),

/***/ "./src/app/shared/delete-dialog/delete-dialog.component.scss":
/*!*******************************************************************!*\
  !*** ./src/app/shared/delete-dialog/delete-dialog.component.scss ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9kZWxldGUtZGlhbG9nL2RlbGV0ZS1kaWFsb2cuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/shared/delete-dialog/delete-dialog.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/shared/delete-dialog/delete-dialog.component.ts ***!
  \*****************************************************************/
/*! exports provided: DeleteDialogComponent, DeleteDialogModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeleteDialogComponent", function() { return DeleteDialogComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeleteDialogModel", function() { return DeleteDialogModel; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_service_employee_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/service/employee.service */ "./src/app/service/employee.service.ts");
/* harmony import */ var src_app_service_toaster_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/service/toaster.service */ "./src/app/service/toaster.service.ts");
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/sort */ "./node_modules/@angular/material/esm2015/sort.js");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/table */ "./node_modules/@angular/material/esm2015/table.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm2015/store.js");
/* harmony import */ var src_app_store_employee_actions__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/store/employee.actions */ "./src/app/store/employee.actions.ts");









let DeleteDialogComponent = class DeleteDialogComponent {
    constructor(store, dialogRef, data, empservice, toasterService) {
        this.store = store;
        this.dialogRef = dialogRef;
        this.data = data;
        this.empservice = empservice;
        this.toasterService = toasterService;
        // Update view with given values
        this.title = data.title;
        this.message = data.message;
        this.id = data.id;
    }
    ngOnInit() {
    }
    getEmployeeDetails() {
        this.empservice.getEmployee().subscribe(res => {
            this.result = res;
            this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_6__["MatTableDataSource"](this.result);
            this.dataSource.sort = this.sort;
        });
    }
    onConfirm() {
        let employeeId = this.id;
        this.store.dispatch(src_app_store_employee_actions__WEBPACK_IMPORTED_MODULE_8__["employeeActionTypes"].deleteEmployee({ employeeId }));
        this.getEmployeeDetails();
        this.dialogRef.close(true);
    }
    onDismiss() {
        this.dialogRef.close(false);
    }
};
DeleteDialogComponent.ctorParameters = () => [
    { type: _ngrx_store__WEBPACK_IMPORTED_MODULE_7__["Store"] },
    { type: _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"] },
    { type: DeleteDialogModel, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Inject"], args: [_angular_material__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"],] }] },
    { type: src_app_service_employee_service__WEBPACK_IMPORTED_MODULE_3__["EmployeeService"] },
    { type: src_app_service_toaster_service__WEBPACK_IMPORTED_MODULE_4__["ToasterService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"])(_angular_material_sort__WEBPACK_IMPORTED_MODULE_5__["MatSort"], { static: true })
], DeleteDialogComponent.prototype, "sort", void 0);
DeleteDialogComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'app-delete-dialog',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./delete-dialog.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/delete-dialog/delete-dialog.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./delete-dialog.component.scss */ "./src/app/shared/delete-dialog/delete-dialog.component.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](2, Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"]))
], DeleteDialogComponent);

/**
 * Class to represent confirm dialog model.
 *
 * It has been kept here to keep it as part of shared component.
 */
class DeleteDialogModel {
    constructor(title, message, id) {
        this.title = title;
        this.message = message;
        this.id = id;
    }
}


/***/ }),

/***/ "./src/app/shared/insert-dialog/insert-dialog.component.scss":
/*!*******************************************************************!*\
  !*** ./src/app/shared/insert-dialog/insert-dialog.component.scss ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("::ng-deep .invalid-feedback {\n  display: block !important;\n  width: 100%;\n  font-size: 10px;\n  color: #dc3545;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL2luc2VydC1kaWFsb2cvQzpcXFVzZXJzXFxocFxcRG93bmxvYWRzXFxDcnVkUE9DICgxKVxcQ3J1ZFBPQy9zcmNcXGFwcFxcc2hhcmVkXFxpbnNlcnQtZGlhbG9nXFxpbnNlcnQtZGlhbG9nLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9zaGFyZWQvaW5zZXJ0LWRpYWxvZy9pbnNlcnQtZGlhbG9nLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0kseUJBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtFQUNBLGNBQUE7QUNDSiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9pbnNlcnQtZGlhbG9nL2luc2VydC1kaWFsb2cuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6Om5nLWRlZXAgLmludmFsaWQtZmVlZGJhY2sge1xyXG4gICAgZGlzcGxheTogYmxvY2sgIWltcG9ydGFudDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgZm9udC1zaXplOiAxMHB4O1xyXG4gICAgY29sb3I6ICNkYzM1NDU7XHJcbn0iLCI6Om5nLWRlZXAgLmludmFsaWQtZmVlZGJhY2sge1xuICBkaXNwbGF5OiBibG9jayAhaW1wb3J0YW50O1xuICB3aWR0aDogMTAwJTtcbiAgZm9udC1zaXplOiAxMHB4O1xuICBjb2xvcjogI2RjMzU0NTtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/shared/insert-dialog/insert-dialog.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/shared/insert-dialog/insert-dialog.component.ts ***!
  \*****************************************************************/
/*! exports provided: InsertDialogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InsertDialogComponent", function() { return InsertDialogComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm2015/dialog.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var src_app_service_employee_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/service/employee.service */ "./src/app/service/employee.service.ts");
/* harmony import */ var src_app_service_toaster_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/service/toaster.service */ "./src/app/service/toaster.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/table */ "./node_modules/@angular/material/esm2015/table.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm2015/store.js");
/* harmony import */ var _store_employee_actions__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./../../store/employee.actions */ "./src/app/store/employee.actions.ts");










let InsertDialogComponent = class InsertDialogComponent {
    constructor(store, dialogRef, datepipe, data, empservice, toasterService) {
        this.store = store;
        this.dialogRef = dialogRef;
        this.datepipe = datepipe;
        this.data = data;
        this.empservice = empservice;
        this.toasterService = toasterService;
        this.isUpdate = false;
        this.isSubmit = true;
        this.isAdded = false;
        this.showSpinner = true;
        this.insertForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroup"]({
            name: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].minLength(3)]),
            surname: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].minLength(3)]),
            dept: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].minLength(3)]),
            joindate: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]),
        });
    }
    ngOnInit() {
        this.title = this.data.title;
        if (this.title == "Update") {
            this.isUpdate = true;
            this.isSubmit = false;
            this.elem = this.data.elem;
            if (this.elem) {
                this.insertForm.get('name').setValue(this.elem.name);
                this.insertForm.get('surname').setValue(this.elem.surname);
                this.insertForm.get('dept').setValue(this.elem.dept);
                this.insertForm.get('joindate').setValue(this.elem.joindate);
            }
        }
    }
    onNoClick() {
        this.dialogRef.close();
    }
    onInsertSubmit() {
        const employee = {
            id: 0,
            name: this.insertForm.controls['name'].value,
            surname: this.insertForm.controls['surname'].value,
            dept: this.insertForm.controls['dept'].value,
            joindate: this.insertForm.controls['joindate'].value
        };
        this.store.dispatch(Object(_store_employee_actions__WEBPACK_IMPORTED_MODULE_9__["createEmployee"])({ employee }));
        this.getEmployeeDetails();
    }
    onUpdateSubmit() {
        const update = {
            id: this.elem.id,
            changes: {
                name: this.insertForm.controls['name'].value,
                surname: this.insertForm.controls['surname'].value,
                dept: this.insertForm.controls['dept'].value,
                joindate: this.insertForm.controls['joindate'].value
            }
        };
        this.store.dispatch(Object(_store_employee_actions__WEBPACK_IMPORTED_MODULE_9__["updateEmployee"])({ update }));
        this.getEmployeeDetails();
    }
    getEmployeeDetails() {
        this.empservice.getEmployee().subscribe(res => {
            this.showSpinner = false;
            this.result = res;
            this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_7__["MatTableDataSource"](this.result);
        });
    }
};
InsertDialogComponent.ctorParameters = () => [
    { type: _ngrx_store__WEBPACK_IMPORTED_MODULE_8__["Store"] },
    { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"] },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_6__["DatePipe"] },
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"],] }] },
    { type: src_app_service_employee_service__WEBPACK_IMPORTED_MODULE_4__["EmployeeService"] },
    { type: src_app_service_toaster_service__WEBPACK_IMPORTED_MODULE_5__["ToasterService"] }
];
InsertDialogComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-insert-dialog',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./insert-dialog.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/insert-dialog/insert-dialog.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./insert-dialog.component.scss */ "./src/app/shared/insert-dialog/insert-dialog.component.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](3, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"]))
], InsertDialogComponent);



/***/ }),

/***/ "./src/app/store/employee.actions.ts":
/*!*******************************************!*\
  !*** ./src/app/store/employee.actions.ts ***!
  \*******************************************/
/*! exports provided: createEmployee, deleteEmployee, updateEmployee, employeeActionTypes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createEmployee", function() { return createEmployee; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deleteEmployee", function() { return deleteEmployee; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateEmployee", function() { return updateEmployee; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "employeeActionTypes", function() { return employeeActionTypes; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm2015/store.js");


const createEmployee = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["createAction"])('[Create Employee Component] Create Employee', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["props"])());
const deleteEmployee = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["createAction"])('[Employee List Operations] Delete Employee', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["props"])());
const updateEmployee = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["createAction"])('[Employee List Operations] Update Employee', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["props"])());
const employeeActionTypes = {
    createEmployee,
    deleteEmployee,
    updateEmployee
};


/***/ }),

/***/ "./src/app/store/employee.effects.ts":
/*!*******************************************!*\
  !*** ./src/app/store/employee.effects.ts ***!
  \*******************************************/
/*! exports provided: EmployeeEffects */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmployeeEffects", function() { return EmployeeEffects; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _employee_actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./employee.actions */ "./src/app/store/employee.actions.ts");
/* harmony import */ var _service_employee_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../service/employee.service */ "./src/app/service/employee.service.ts");
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngrx/effects */ "./node_modules/@ngrx/effects/fesm2015/effects.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");







let EmployeeEffects = class EmployeeEffects {
    constructor(employeeService, actions$, router) {
        this.employeeService = employeeService;
        this.actions$ = actions$;
        this.router = router;
        this.createEmployee$ = Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_3__["createEffect"])(() => this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_3__["ofType"])(_employee_actions__WEBPACK_IMPORTED_MODULE_1__["employeeActionTypes"].createEmployee), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["concatMap"])((action) => this.employeeService.getInsertEmployee(action.employee))), { dispatch: false });
        this.deleteEmployee$ = Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_3__["createEffect"])(() => this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_3__["ofType"])(_employee_actions__WEBPACK_IMPORTED_MODULE_1__["employeeActionTypes"].deleteEmployee), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["concatMap"])((action) => this.employeeService.getDeleteEmployee(action.employeeId))), { dispatch: false });
        this.updateEmployee$ = Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_3__["createEffect"])(() => this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_3__["ofType"])(_employee_actions__WEBPACK_IMPORTED_MODULE_1__["employeeActionTypes"].updateEmployee), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["concatMap"])((action) => this.employeeService.getUpdateEmployee(action.update.id, action.update.changes))), { dispatch: false });
    }
};
EmployeeEffects.ctorParameters = () => [
    { type: _service_employee_service__WEBPACK_IMPORTED_MODULE_2__["EmployeeService"] },
    { type: _ngrx_effects__WEBPACK_IMPORTED_MODULE_3__["Actions"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"] }
];
EmployeeEffects = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_5__["Injectable"])()
], EmployeeEffects);



/***/ }),

/***/ "./src/app/store/reducers/index.ts":
/*!*****************************************!*\
  !*** ./src/app/store/reducers/index.ts ***!
  \*****************************************/
/*! exports provided: reducers, metaReducers */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "reducers", function() { return reducers; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "metaReducers", function() { return metaReducers; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../environments/environment */ "./src/environments/environment.ts");


const reducers = {};
const metaReducers = !_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production ? [] : [];


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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
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

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");






if (_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["enableProdMode"])();
}
document.addEventListener('DOMContentLoaded', () => {
    Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_4__["AppModule"])
        .catch(err => console.error(err));
});


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\hp\Downloads\CrudPOC (1)\CrudPOC\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map