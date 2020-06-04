(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/material'), require('@angular/router'), require('@angular/material/table'), require('@angular/common')) :
    typeof define === 'function' && define.amd ? define('modulea', ['exports', '@angular/core', '@angular/material', '@angular/router', '@angular/material/table', '@angular/common'], factory) :
    (global = global || self, factory(global.modulea = {}, global.ng.core, global.ng.material, global.ng.router, global.ng.material.table, global.ng.common));
}(this, (function (exports, core, material, router, table, common) { 'use strict';

    /**
     * @fileoverview added by tsickle
     * Generated from: lib/modulea.service.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var ModuleaService = /** @class */ (function () {
        function ModuleaService() {
        }
        ModuleaService.decorators = [
            { type: core.Injectable, args: [{
                        providedIn: 'root'
                    },] }
        ];
        /** @nocollapse */
        ModuleaService.ctorParameters = function () { return []; };
        /** @nocollapse */ ModuleaService.ngInjectableDef = core.ɵɵdefineInjectable({ factory: function ModuleaService_Factory() { return new ModuleaService(); }, token: ModuleaService, providedIn: "root" });
        return ModuleaService;
    }());

    /**
     * @fileoverview added by tsickle
     * Generated from: lib/modulea.component.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var ModuleaComponent = /** @class */ (function () {
        function ModuleaComponent() {
            this.columnHeader = { 'studentID1': 'Student ID', 'fname1': 'First Name', 'weight1': 'Weight', 'symbol1': 'Symbol' };
            this.tableData = [
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
            this.objectKeys = Object.keys;
        }
        /**
         * @return {?}
         */
        ModuleaComponent.prototype.ngOnInit = /**
         * @return {?}
         */
        function () {
            this.dataSource = new material.MatTableDataSource(this.tableData);
        };
        ModuleaComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'dynamic-module-custom-mat-grid',
                        template: "\n  <h2>Dynamic Module Works -</h2>\n  <table style=\"width:100%\" mat-table [dataSource]=\"dataSource\" class=\"mat-elevation-z8\">\n\n  <ng-container [matColumnDef]=\"tableData\" *ngFor=\"let tableData of objectKeys(columnHeader)\">\n    <th mat-header-cell *matHeaderCellDef> {{columnHeader[tableData]}}    </th>\n    <td mat-cell *matCellDef=\"let element\"> {{element[tableData] }}</td>\n  </ng-container>\n\n  <tr mat-header-row *matHeaderRowDef=\"objectKeys(columnHeader)\"></tr>\n  <tr mat-row *matRowDef=\"let row; columns: objectKeys(columnHeader);\"></tr>\n</table>\n  "
                    }] }
        ];
        /** @nocollapse */
        ModuleaComponent.ctorParameters = function () { return []; };
        return ModuleaComponent;
    }());
    if (false) {
        /** @type {?} */
        ModuleaComponent.prototype.columnHeader;
        /** @type {?} */
        ModuleaComponent.prototype.tableData;
        /** @type {?} */
        ModuleaComponent.prototype.objectKeys;
        /** @type {?} */
        ModuleaComponent.prototype.dataSource;
    }

    /**
     * @fileoverview added by tsickle
     * Generated from: lib/modulea.module.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var ModuleaModule = /** @class */ (function () {
        function ModuleaModule() {
        }
        ModuleaModule.decorators = [
            { type: core.NgModule, args: [{
                        declarations: [ModuleaComponent],
                        imports: [
                            router.RouterModule.forChild([
                                {
                                    path: '', pathMatch: 'full', component: ModuleaComponent
                                }
                            ]), table.MatTableModule, common.CommonModule
                        ],
                        exports: [ModuleaComponent]
                    },] }
        ];
        return ModuleaModule;
    }());

    exports.ModuleaComponent = ModuleaComponent;
    exports.ModuleaModule = ModuleaModule;
    exports.ModuleaService = ModuleaService;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=modulea.umd.js.map
