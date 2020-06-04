/**
 * @fileoverview added by tsickle
 * Generated from: lib/modulea.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component } from '@angular/core';
import { MatTableDataSource } from '@angular/material';
export class ModuleaComponent {
    constructor() {
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
    ngOnInit() {
        this.dataSource = new MatTableDataSource(this.tableData);
    }
}
ModuleaComponent.decorators = [
    { type: Component, args: [{
                selector: 'dynamic-module-custom-mat-grid',
                template: `
  <h2>Dynamic Module Works -</h2>
  <table style="width:100%" mat-table [dataSource]="dataSource" class="mat-elevation-z8">

  <ng-container [matColumnDef]="tableData" *ngFor="let tableData of objectKeys(columnHeader)">
    <th mat-header-cell *matHeaderCellDef> {{columnHeader[tableData]}}    </th>
    <td mat-cell *matCellDef="let element"> {{element[tableData] }}</td>
  </ng-container>

  <tr mat-header-row *matHeaderRowDef="objectKeys(columnHeader)"></tr>
  <tr mat-row *matRowDef="let row; columns: objectKeys(columnHeader);"></tr>
</table>
  `
            }] }
];
/** @nocollapse */
ModuleaComponent.ctorParameters = () => [];
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9kdWxlYS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9tb2R1bGVhLyIsInNvdXJjZXMiOlsibGliL21vZHVsZWEuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxNQUFNLGVBQWUsQ0FBQztBQUNsRCxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQWtCdkQsTUFBTSxPQUFPLGdCQUFnQjtJQWUzQjtRQWRBLGlCQUFZLEdBQUcsRUFBRSxZQUFZLEVBQUUsWUFBWSxFQUFFLFFBQVEsRUFBRSxZQUFZLEVBQUUsU0FBUyxFQUFFLFFBQVEsRUFBRSxTQUFTLEVBQUUsUUFBUSxFQUFFLENBQUM7UUFFaEgsY0FBUyxHQUFVO1lBQ2pCLEVBQUUsVUFBVSxFQUFFLENBQUMsRUFBRSxNQUFNLEVBQUUsVUFBVSxFQUFFLE9BQU8sRUFBRSxNQUFNLEVBQUUsT0FBTyxFQUFFLEdBQUcsRUFBRTtZQUNwRSxFQUFFLFVBQVUsRUFBRSxDQUFDLEVBQUUsTUFBTSxFQUFFLFFBQVEsRUFBRSxPQUFPLEVBQUUsTUFBTSxFQUFFLE9BQU8sRUFBRSxJQUFJLEVBQUU7WUFDbkUsRUFBRSxVQUFVLEVBQUUsQ0FBQyxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsT0FBTyxFQUFFLEtBQUssRUFBRSxPQUFPLEVBQUUsSUFBSSxFQUFFO1lBQ25FLEVBQUUsVUFBVSxFQUFFLENBQUMsRUFBRSxNQUFNLEVBQUUsV0FBVyxFQUFFLE9BQU8sRUFBRSxNQUFNLEVBQUUsT0FBTyxFQUFFLElBQUksRUFBRTtZQUN0RSxFQUFFLFVBQVUsRUFBRSxDQUFDLEVBQUUsTUFBTSxFQUFFLE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSxFQUFFLE9BQU8sRUFBRSxHQUFHLEVBQUU7WUFDakUsRUFBRSxVQUFVLEVBQUUsQ0FBQyxFQUFFLE1BQU0sRUFBRSxRQUFRLEVBQUUsT0FBTyxFQUFFLE9BQU8sRUFBRSxPQUFPLEVBQUUsR0FBRyxFQUFFO1lBQ25FLEVBQUUsVUFBVSxFQUFFLENBQUMsRUFBRSxNQUFNLEVBQUUsVUFBVSxFQUFFLE9BQU8sRUFBRSxPQUFPLEVBQUUsT0FBTyxFQUFFLEdBQUcsRUFBRTtZQUNyRSxFQUFFLFVBQVUsRUFBRSxDQUFDLEVBQUUsTUFBTSxFQUFFLFFBQVEsRUFBRSxPQUFPLEVBQUUsT0FBTyxFQUFFLE9BQU8sRUFBRSxHQUFHLEVBQUU7WUFDbkUsRUFBRSxVQUFVLEVBQUUsQ0FBQyxFQUFFLE1BQU0sRUFBRSxVQUFVLEVBQUUsT0FBTyxFQUFFLE9BQU8sRUFBRSxPQUFPLEVBQUUsR0FBRyxFQUFFO1lBQ3JFLEVBQUUsVUFBVSxFQUFFLEVBQUUsRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLE9BQU8sRUFBRSxPQUFPLEVBQUUsT0FBTyxFQUFFLElBQUksRUFBRTtTQUNwRSxDQUFDO1FBRUYsZUFBVSxHQUFHLE1BQU0sQ0FBQyxJQUFJLENBQUM7SUFEVCxDQUFDOzs7O0lBSWpCLFFBQVE7UUFDTixJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksa0JBQWtCLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDO0lBQzNELENBQUM7OztZQXJDRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLGdDQUFnQztnQkFDMUMsUUFBUSxFQUFFOzs7Ozs7Ozs7Ozs7R0FZVDthQUNGOzs7Ozs7SUFFQyx3Q0FBZ0g7O0lBRWhILHFDQVdFOztJQUVGLHNDQUF5Qjs7SUFDekIsc0NBQVciLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTWF0VGFibGVEYXRhU291cmNlIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdkeW5hbWljLW1vZHVsZS1jdXN0b20tbWF0LWdyaWQnLFxuICB0ZW1wbGF0ZTogYFxuICA8aDI+RHluYW1pYyBNb2R1bGUgV29ya3MgLTwvaDI+XG4gIDx0YWJsZSBzdHlsZT1cIndpZHRoOjEwMCVcIiBtYXQtdGFibGUgW2RhdGFTb3VyY2VdPVwiZGF0YVNvdXJjZVwiIGNsYXNzPVwibWF0LWVsZXZhdGlvbi16OFwiPlxuXG4gIDxuZy1jb250YWluZXIgW21hdENvbHVtbkRlZl09XCJ0YWJsZURhdGFcIiAqbmdGb3I9XCJsZXQgdGFibGVEYXRhIG9mIG9iamVjdEtleXMoY29sdW1uSGVhZGVyKVwiPlxuICAgIDx0aCBtYXQtaGVhZGVyLWNlbGwgKm1hdEhlYWRlckNlbGxEZWY+IHt7Y29sdW1uSGVhZGVyW3RhYmxlRGF0YV19fSAgICA8L3RoPlxuICAgIDx0ZCBtYXQtY2VsbCAqbWF0Q2VsbERlZj1cImxldCBlbGVtZW50XCI+IHt7ZWxlbWVudFt0YWJsZURhdGFdIH19PC90ZD5cbiAgPC9uZy1jb250YWluZXI+XG5cbiAgPHRyIG1hdC1oZWFkZXItcm93ICptYXRIZWFkZXJSb3dEZWY9XCJvYmplY3RLZXlzKGNvbHVtbkhlYWRlcilcIj48L3RyPlxuICA8dHIgbWF0LXJvdyAqbWF0Um93RGVmPVwibGV0IHJvdzsgY29sdW1uczogb2JqZWN0S2V5cyhjb2x1bW5IZWFkZXIpO1wiPjwvdHI+XG48L3RhYmxlPlxuICBgXG59KVxuZXhwb3J0IGNsYXNzIE1vZHVsZWFDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICBjb2x1bW5IZWFkZXIgPSB7ICdzdHVkZW50SUQxJzogJ1N0dWRlbnQgSUQnLCAnZm5hbWUxJzogJ0ZpcnN0IE5hbWUnLCAnd2VpZ2h0MSc6ICdXZWlnaHQnLCAnc3ltYm9sMSc6ICdTeW1ib2wnIH07XG5cbiAgdGFibGVEYXRhOiBhbnlbXSA9IFtcbiAgICB7IHN0dWRlbnRJRDE6IDEsIGZuYW1lMTogJ0h5ZHJvZ2VuJywgd2VpZ2h0MTogMS4wMDc5LCBzeW1ib2wxOiAnSCcgfSxcbiAgICB7IHN0dWRlbnRJRDE6IDIsIGZuYW1lMTogJ0hlbGl1bScsIHdlaWdodDE6IDQuMDAyNiwgc3ltYm9sMTogJ0hlJyB9LFxuICAgIHsgc3R1ZGVudElEMTogMywgZm5hbWUxOiAnTGl0aGl1bScsIHdlaWdodDE6IDYuOTQxLCBzeW1ib2wxOiAnTGknIH0sXG4gICAgeyBzdHVkZW50SUQxOiA0LCBmbmFtZTE6ICdCZXJ5bGxpdW0nLCB3ZWlnaHQxOiA5LjAxMjIsIHN5bWJvbDE6ICdCZScgfSxcbiAgICB7IHN0dWRlbnRJRDE6IDUsIGZuYW1lMTogJ0Jvcm9uJywgd2VpZ2h0MTogMTAuODExLCBzeW1ib2wxOiAnQicgfSxcbiAgICB7IHN0dWRlbnRJRDE6IDYsIGZuYW1lMTogJ0NhcmJvbicsIHdlaWdodDE6IDEyLjAxMDcsIHN5bWJvbDE6ICdDJyB9LFxuICAgIHsgc3R1ZGVudElEMTogNywgZm5hbWUxOiAnTml0cm9nZW4nLCB3ZWlnaHQxOiAxNC4wMDY3LCBzeW1ib2wxOiAnTicgfSxcbiAgICB7IHN0dWRlbnRJRDE6IDgsIGZuYW1lMTogJ094eWdlbicsIHdlaWdodDE6IDE1Ljk5OTQsIHN5bWJvbDE6ICdPJyB9LFxuICAgIHsgc3R1ZGVudElEMTogOSwgZm5hbWUxOiAnRmx1b3JpbmUnLCB3ZWlnaHQxOiAxOC45OTg0LCBzeW1ib2wxOiAnRicgfSxcbiAgICB7IHN0dWRlbnRJRDE6IDEwLCBmbmFtZTE6ICdOZW9uJywgd2VpZ2h0MTogMjAuMTc5Nywgc3ltYm9sMTogJ05lJyB9LFxuICBdO1xuICBjb25zdHJ1Y3RvcigpIHsgfVxuICBvYmplY3RLZXlzID0gT2JqZWN0LmtleXM7XG4gIGRhdGFTb3VyY2U7XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgdGhpcy5kYXRhU291cmNlID0gbmV3IE1hdFRhYmxlRGF0YVNvdXJjZSh0aGlzLnRhYmxlRGF0YSk7ICAgIFxuICB9XG5cbn1cbiJdfQ==