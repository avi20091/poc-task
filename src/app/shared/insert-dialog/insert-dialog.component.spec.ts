import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InsertDialogComponent } from './insert-dialog.component';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { MatDialogModule } from '@angular/material';
import { of } from 'rxjs';
import { EmployeeService } from 'src/app/service/employee.service';
import { provideMockStore, MockStore } from '@ngrx/store/testing';
import { ToasterService } from 'src/app/service/toaster.service';
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { DatePipe } from '@angular/common';
import { Store } from '@ngrx/store';

let store: MockStore;
const mockListEmployee = [
  { empID: 1, empName: 'Pramod Sharma', bankName: "HDFC Bank", branch: 'Mumbai' },
  { empID: 2, empName: 'Satish Diwan', bankName: "ICICI Bank", branch: 'Pune' },
  { empID: 3, empName: 'Sachin Pandey', bankName: "IDFC Bank", branch: 'Hyderabad' },
  { empID: 4, empName: 'Nitin Naik', bankName: "Yes Bank", branch: 'Kolhapur' },
  { empID: 5, empName: 'Amrut Joshi', bankName: "Axis Bank", branch: 'Delhi' },
  { empID: 6, empName: 'Ajit Patil', bankName: "City Bank", branch: 'Surat' }
];

const mockEmployeeService = {
  getEmployee: jasmine.createSpy('getEmployee').and.returnValue(of(mockListEmployee))
};

const mockToast = {
  showToaster: (msg, panelClass) => { }
};

const mockDialogRef = {
  close: () => { }
};

const initialState = { employeeLoaded: false };
describe('InsertDialogComponent', () => {
  let component: InsertDialogComponent;
  let fixture: ComponentFixture<InsertDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [InsertDialogComponent],
      imports: [BrowserModule, MatDialogModule],
      providers: [{ provide: MatDialogRef, useValue: mockDialogRef },
      { provide: EmployeeService, useValue: mockEmployeeService },
      { provide: ToasterService, useValue: mockToast },
      { provide: MAT_DIALOG_DATA, useValue: {} },
        DatePipe,
      provideMockStore({ initialState })],
      schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InsertDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should insert record', () => {
    const mockStore = TestBed.get(Store);
    const spyClose = spyOn(mockStore, 'dispatch');
    component.insertForm.patchValue({
      name: 'Manohar',
      surname: 'Mone',
      dept: 'SW',
      joindate: '06/09/2018'
    });
    component.onInsertSubmit();
    expect(spyClose).toHaveBeenCalled();
  });

  it('should update record', () => {
    const mockStore = TestBed.get(Store);
    const spyClose = spyOn(mockStore, 'dispatch');
    component.elem = { id: 1 };
    component.insertForm.patchValue({
      name: 'Manohar',
      surname: 'Mone',
      dept: 'SW',
      joindate: '06/09/2018'
    });
    component.onUpdateSubmit();
    expect(spyClose).toHaveBeenCalled();
  });

  it('should close the dialog', () => {
    const mockDialogRef = TestBed.get(MatDialogRef);
    const spyClose = spyOn(mockDialogRef, 'close');
    component.onNoClick();
    expect(spyClose).toHaveBeenCalled();
  });
});

describe('#InsertDialogComponent Update', () => {
  let component: InsertDialogComponent;
  let fixture: ComponentFixture<InsertDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [InsertDialogComponent],
      imports: [BrowserModule, MatDialogModule],
      providers: [{ provide: MatDialogRef, useValue: mockDialogRef },
      { provide: EmployeeService, useValue: mockEmployeeService },
      { provide: ToasterService, useValue: mockToast },
      { provide: MAT_DIALOG_DATA, useValue: {} },
        DatePipe,
      provideMockStore({ initialState })],
      schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InsertDialogComponent);
    component = fixture.componentInstance;
    component.data = {
      title: 'Update',
      elem: {
        name: 'Manohar',
        surname: 'Mone',
        dept: 'SW',
        joindate: '06/09/2018'
      }
    }
    fixture.detectChanges();
  });

  it('should open as update', () => {
    expect(component).toBeTruthy();
    expect(component.insertForm.get('name').value).toEqual('Manohar');
    expect(component.insertForm.get('surname').value).toEqual('Mone');
    expect(component.insertForm.get('dept').value).toEqual('SW');
    expect(component.insertForm.get('joindate').value).toEqual('06/09/2018');
  });

});

  describe('#InsertDialogComponent Update', () => {
    let component: InsertDialogComponent;
    let fixture: ComponentFixture<InsertDialogComponent>;
  
    beforeEach(async(() => {
      TestBed.configureTestingModule({
        declarations: [InsertDialogComponent],
        imports: [BrowserModule, MatDialogModule],
        providers: [{ provide: MatDialogRef, useValue: mockDialogRef },
        { provide: EmployeeService, useValue: mockEmployeeService },
        { provide: ToasterService, useValue: mockToast },
        { provide: MAT_DIALOG_DATA, useValue: {} },
          DatePipe,
        provideMockStore({ initialState })],
        schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA]
      })
        .compileComponents();
    }));
  
    beforeEach(() => {
      fixture = TestBed.createComponent(InsertDialogComponent);
      component = fixture.componentInstance;
      component.data = {
        title: 'Update',
        elem: undefined
      }
      fixture.detectChanges();
    });
  
    it('should open as update without element', () => {
      expect(component).toBeTruthy();
      expect(component.insertForm.get('name').value).toEqual('');
      expect(component.insertForm.get('surname').value).toEqual('');
      expect(component.insertForm.get('dept').value).toEqual('');
      expect(component.insertForm.get('joindate').value).toEqual('');
    });
  
});
