import { OnInit } from '@angular/core';
export declare class ModuleaComponent implements OnInit {
    columnHeader: {
        'studentID1': string;
        'fname1': string;
        'weight1': string;
        'symbol1': string;
    };
    tableData: any[];
    constructor();
    objectKeys: {
        (o: object): string[];
        (o: {}): string[];
    };
    dataSource: any;
    ngOnInit(): void;
}
