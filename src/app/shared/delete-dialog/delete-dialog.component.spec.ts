import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { DeleteDialogComponent, DeleteDialogModel } from './delete-dialog.component';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { MatDialogModule } from '@angular/material';
import { of } from 'rxjs';
import { EmployeeService } from 'src/app/service/employee.service';
import { provideMockStore, MockStore } from '@ngrx/store/testing';
import { ToasterService } from 'src/app/service/toaster.service';
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

describe('DeleteDialogComponent', () => {
  let component: DeleteDialogComponent;
  let fixture: ComponentFixture<DeleteDialogComponent>;
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
    close: () => {}
  };

  const initialState = {employeeLoaded: false};
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeleteDialogComponent ],
      imports: [BrowserModule, MatDialogModule],
      providers: [{provide: MatDialogRef, useValue: mockDialogRef },
                  {provide: EmployeeService, useValue: mockEmployeeService},
                  {provide: ToasterService, useValue: mockToast},
                  { provide: MAT_DIALOG_DATA, useValue: {} },
                  provideMockStore({ initialState })],
      schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteDialogComponent);
    component = fixture.componentInstance;
    const dialog = new DeleteDialogModel('Delete', 'Record will be deleted', 1);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should confirm delete', () => {
    const mockDialogRef = TestBed.get(MatDialogRef);
    const spyClose = spyOn(mockDialogRef, 'close');
    component.onConfirm();
    expect(spyClose).toHaveBeenCalledWith(true);
  });

  it('should cancel delete', () => {
    const mockDialogRef = TestBed.get(MatDialogRef);
    const spyClose = spyOn(mockDialogRef, 'close');
    component.onDismiss();
    expect(spyClose).toHaveBeenCalledWith(false);
  });
});

