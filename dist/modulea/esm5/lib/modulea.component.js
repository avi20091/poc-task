/**
 * @fileoverview added by tsickle
 * Generated from: lib/modulea.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component } from '@angular/core';
import { MatTableDataSource } from '@angular/material';
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
        this.dataSource = new MatTableDataSource(this.tableData);
    };
    ModuleaComponent.decorators = [
        { type: Component, args: [{
                    selector: 'dynamic-module-custom-mat-grid',
                    template: "\n  <h2>Dynamic Module Works -</h2>\n  <table style=\"width:100%\" mat-table [dataSource]=\"dataSource\" class=\"mat-elevation-z8\">\n\n  <ng-container [matColumnDef]=\"tableData\" *ngFor=\"let tableData of objectKeys(columnHeader)\">\n    <th mat-header-cell *matHeaderCellDef> {{columnHeader[tableData]}}    </th>\n    <td mat-cell *matCellDef=\"let element\"> {{element[tableData] }}</td>\n  </ng-container>\n\n  <tr mat-header-row *matHeaderRowDef=\"objectKeys(columnHeader)\"></tr>\n  <tr mat-row *matRowDef=\"let row; columns: objectKeys(columnHeader);\"></tr>\n</table>\n  "
                }] }
    ];
    /** @nocollapse */
    ModuleaComponent.ctorParameters = function () { return []; };
    return ModuleaComponent;
}());
export { ModuleaComponent };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9kdWxlYS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9tb2R1bGVhLyIsInNvdXJjZXMiOlsibGliL21vZHVsZWEuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxNQUFNLGVBQWUsQ0FBQztBQUNsRCxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUV2RDtJQStCRTtRQWRBLGlCQUFZLEdBQUcsRUFBRSxZQUFZLEVBQUUsWUFBWSxFQUFFLFFBQVEsRUFBRSxZQUFZLEVBQUUsU0FBUyxFQUFFLFFBQVEsRUFBRSxTQUFTLEVBQUUsUUFBUSxFQUFFLENBQUM7UUFFaEgsY0FBUyxHQUFVO1lBQ2pCLEVBQUUsVUFBVSxFQUFFLENBQUMsRUFBRSxNQUFNLEVBQUUsVUFBVSxFQUFFLE9BQU8sRUFBRSxNQUFNLEVBQUUsT0FBTyxFQUFFLEdBQUcsRUFBRTtZQUNwRSxFQUFFLFVBQVUsRUFBRSxDQUFDLEVBQUUsTUFBTSxFQUFFLFFBQVEsRUFBRSxPQUFPLEVBQUUsTUFBTSxFQUFFLE9BQU8sRUFBRSxJQUFJLEVBQUU7WUFDbkUsRUFBRSxVQUFVLEVBQUUsQ0FBQyxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsT0FBTyxFQUFFLEtBQUssRUFBRSxPQUFPLEVBQUUsSUFBSSxFQUFFO1lBQ25FLEVBQUUsVUFBVSxFQUFFLENBQUMsRUFBRSxNQUFNLEVBQUUsV0FBVyxFQUFFLE9BQU8sRUFBRSxNQUFNLEVBQUUsT0FBTyxFQUFFLElBQUksRUFBRTtZQUN0RSxFQUFFLFVBQVUsRUFBRSxDQUFDLEVBQUUsTUFBTSxFQUFFLE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSxFQUFFLE9BQU8sRUFBRSxHQUFHLEVBQUU7WUFDakUsRUFBRSxVQUFVLEVBQUUsQ0FBQyxFQUFFLE1BQU0sRUFBRSxRQUFRLEVBQUUsT0FBTyxFQUFFLE9BQU8sRUFBRSxPQUFPLEVBQUUsR0FBRyxFQUFFO1lBQ25FLEVBQUUsVUFBVSxFQUFFLENBQUMsRUFBRSxNQUFNLEVBQUUsVUFBVSxFQUFFLE9BQU8sRUFBRSxPQUFPLEVBQUUsT0FBTyxFQUFFLEdBQUcsRUFBRTtZQUNyRSxFQUFFLFVBQVUsRUFBRSxDQUFDLEVBQUUsTUFBTSxFQUFFLFFBQVEsRUFBRSxPQUFPLEVBQUUsT0FBTyxFQUFFLE9BQU8sRUFBRSxHQUFHLEVBQUU7WUFDbkUsRUFBRSxVQUFVLEVBQUUsQ0FBQyxFQUFFLE1BQU0sRUFBRSxVQUFVLEVBQUUsT0FBTyxFQUFFLE9BQU8sRUFBRSxPQUFPLEVBQUUsR0FBRyxFQUFFO1lBQ3JFLEVBQUUsVUFBVSxFQUFFLEVBQUUsRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLE9BQU8sRUFBRSxPQUFPLEVBQUUsT0FBTyxFQUFFLElBQUksRUFBRTtTQUNwRSxDQUFDO1FBRUYsZUFBVSxHQUFHLE1BQU0sQ0FBQyxJQUFJLENBQUM7SUFEVCxDQUFDOzs7O0lBSWpCLG1DQUFROzs7SUFBUjtRQUNFLElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxrQkFBa0IsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUM7SUFDM0QsQ0FBQzs7Z0JBckNGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsZ0NBQWdDO29CQUMxQyxRQUFRLEVBQUUsc2tCQVlUO2lCQUNGOzs7O0lBd0JELHVCQUFDO0NBQUEsQUF2Q0QsSUF1Q0M7U0F2QlksZ0JBQWdCOzs7SUFDM0Isd0NBQWdIOztJQUVoSCxxQ0FXRTs7SUFFRixzQ0FBeUI7O0lBQ3pCLHNDQUFXIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE1hdFRhYmxlRGF0YVNvdXJjZSB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnZHluYW1pYy1tb2R1bGUtY3VzdG9tLW1hdC1ncmlkJyxcbiAgdGVtcGxhdGU6IGBcbiAgPGgyPkR5bmFtaWMgTW9kdWxlIFdvcmtzIC08L2gyPlxuICA8dGFibGUgc3R5bGU9XCJ3aWR0aDoxMDAlXCIgbWF0LXRhYmxlIFtkYXRhU291cmNlXT1cImRhdGFTb3VyY2VcIiBjbGFzcz1cIm1hdC1lbGV2YXRpb24tejhcIj5cblxuICA8bmctY29udGFpbmVyIFttYXRDb2x1bW5EZWZdPVwidGFibGVEYXRhXCIgKm5nRm9yPVwibGV0IHRhYmxlRGF0YSBvZiBvYmplY3RLZXlzKGNvbHVtbkhlYWRlcilcIj5cbiAgICA8dGggbWF0LWhlYWRlci1jZWxsICptYXRIZWFkZXJDZWxsRGVmPiB7e2NvbHVtbkhlYWRlclt0YWJsZURhdGFdfX0gICAgPC90aD5cbiAgICA8dGQgbWF0LWNlbGwgKm1hdENlbGxEZWY9XCJsZXQgZWxlbWVudFwiPiB7e2VsZW1lbnRbdGFibGVEYXRhXSB9fTwvdGQ+XG4gIDwvbmctY29udGFpbmVyPlxuXG4gIDx0ciBtYXQtaGVhZGVyLXJvdyAqbWF0SGVhZGVyUm93RGVmPVwib2JqZWN0S2V5cyhjb2x1bW5IZWFkZXIpXCI+PC90cj5cbiAgPHRyIG1hdC1yb3cgKm1hdFJvd0RlZj1cImxldCByb3c7IGNvbHVtbnM6IG9iamVjdEtleXMoY29sdW1uSGVhZGVyKTtcIj48L3RyPlxuPC90YWJsZT5cbiAgYFxufSlcbmV4cG9ydCBjbGFzcyBNb2R1bGVhQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgY29sdW1uSGVhZGVyID0geyAnc3R1ZGVudElEMSc6ICdTdHVkZW50IElEJywgJ2ZuYW1lMSc6ICdGaXJzdCBOYW1lJywgJ3dlaWdodDEnOiAnV2VpZ2h0JywgJ3N5bWJvbDEnOiAnU3ltYm9sJyB9O1xuXG4gIHRhYmxlRGF0YTogYW55W10gPSBbXG4gICAgeyBzdHVkZW50SUQxOiAxLCBmbmFtZTE6ICdIeWRyb2dlbicsIHdlaWdodDE6IDEuMDA3OSwgc3ltYm9sMTogJ0gnIH0sXG4gICAgeyBzdHVkZW50SUQxOiAyLCBmbmFtZTE6ICdIZWxpdW0nLCB3ZWlnaHQxOiA0LjAwMjYsIHN5bWJvbDE6ICdIZScgfSxcbiAgICB7IHN0dWRlbnRJRDE6IDMsIGZuYW1lMTogJ0xpdGhpdW0nLCB3ZWlnaHQxOiA2Ljk0MSwgc3ltYm9sMTogJ0xpJyB9LFxuICAgIHsgc3R1ZGVudElEMTogNCwgZm5hbWUxOiAnQmVyeWxsaXVtJywgd2VpZ2h0MTogOS4wMTIyLCBzeW1ib2wxOiAnQmUnIH0sXG4gICAgeyBzdHVkZW50SUQxOiA1LCBmbmFtZTE6ICdCb3JvbicsIHdlaWdodDE6IDEwLjgxMSwgc3ltYm9sMTogJ0InIH0sXG4gICAgeyBzdHVkZW50SUQxOiA2LCBmbmFtZTE6ICdDYXJib24nLCB3ZWlnaHQxOiAxMi4wMTA3LCBzeW1ib2wxOiAnQycgfSxcbiAgICB7IHN0dWRlbnRJRDE6IDcsIGZuYW1lMTogJ05pdHJvZ2VuJywgd2VpZ2h0MTogMTQuMDA2Nywgc3ltYm9sMTogJ04nIH0sXG4gICAgeyBzdHVkZW50SUQxOiA4LCBmbmFtZTE6ICdPeHlnZW4nLCB3ZWlnaHQxOiAxNS45OTk0LCBzeW1ib2wxOiAnTycgfSxcbiAgICB7IHN0dWRlbnRJRDE6IDksIGZuYW1lMTogJ0ZsdW9yaW5lJywgd2VpZ2h0MTogMTguOTk4NCwgc3ltYm9sMTogJ0YnIH0sXG4gICAgeyBzdHVkZW50SUQxOiAxMCwgZm5hbWUxOiAnTmVvbicsIHdlaWdodDE6IDIwLjE3OTcsIHN5bWJvbDE6ICdOZScgfSxcbiAgXTtcbiAgY29uc3RydWN0b3IoKSB7IH1cbiAgb2JqZWN0S2V5cyA9IE9iamVjdC5rZXlzO1xuICBkYXRhU291cmNlO1xuXG4gIG5nT25Jbml0KCkge1xuICAgIHRoaXMuZGF0YVNvdXJjZSA9IG5ldyBNYXRUYWJsZURhdGFTb3VyY2UodGhpcy50YWJsZURhdGEpOyAgICBcbiAgfVxuXG59XG4iXX0=