import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeComponent } from './employee.component';
import { MatTableModule } from '@angular/material/table';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatIconModule, MatSnackBarModule, MatInputModule, MatDialogModule, MatRadioModule,
         MatToolbarModule, MatFormFieldModule, MatDatepickerModule, MatNativeDateModule,
         MatMenuModule, MatTooltipModule } from '@angular/material';
import { MatSortModule } from '@angular/material/sort';
import { MatDialog } from '@angular/material/dialog';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner'
import { MatSpinnerOverlayComponent } from '../mat-spinner-overlay/mat-spinner-overlay.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { EmployeeService } from 'src/app/service/employee.service';
import { of } from 'rxjs';
import { BrowserAnimationsModule, NoopAnimationsModule } from '@angular/platform-browser/animations';
import { ToasterService } from 'src/app/service/toaster.service';
import { StoreModule } from '@ngrx/store';
import { reducers, metaReducers } from '../../store/reducers';

describe('EmployeeComponent', () => {
  let component: EmployeeComponent;
  let fixture: ComponentFixture<EmployeeComponent>;

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

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [EmployeeComponent, MatSpinnerOverlayComponent],
      imports: [MatIconModule, MatSnackBarModule, MatInputModule, MatDialogModule, MatRadioModule, MatToolbarModule, MatFormFieldModule, MatDatepickerModule, MatNativeDateModule, MatMenuModule, MatTooltipModule,
        MatTableModule,
        FormsModule,
        ReactiveFormsModule,
        MatSortModule,
        MatCheckboxModule,
        MatCardModule,
        MatGridListModule,
        MatProgressSpinnerModule,
        HttpClientTestingModule,
        BrowserAnimationsModule,
        NoopAnimationsModule,
        StoreModule.forRoot(reducers)
      ],
      providers: [{provide: EmployeeService, useValue: mockEmployeeService}]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should toggle from normal to  dark theme', () => {
    component.activeTheme = 'indigo-pink';
    component.isThemeDark = true;
    component.toggleDarkness();
    expect(component.isThemeDark).toBeFalsy();
  });

  it('should toggle from dark theme to normal theme', () => {
    component.activeTheme = 'indigo-pink';
    component.isThemeDark = true;
    component.toggleDarkness();
    expect(component.isThemeDark).toBeFalsy();
  });

  it('should set indigo-pink theme when no dark theme is selected', () => {
    component.activeTheme = 'indigo-pink';
    component.setTheme(component.activeTheme);
    expect(component.activeThemeCssClass).toEqual('indigo-pink');
  });

  it('should open dialog and confirm delete record', () => {
    const mockMDDialod = TestBed.get(MatDialog);
    const mockToasterService = TestBed.get(ToasterService);
    spyOn(mockMDDialod, 'open').and.returnValue({
      afterClosed: () => of(true)
    });
    const spyShowToaster = spyOn(mockToasterService, 'showToaster');
    const mockElement = {id: 'row1'};
    const successMessage = 'Record Deleted Successfully...!!!'
    component.openDeleteDialog(mockElement);
    expect(spyShowToaster).toHaveBeenCalledWith(successMessage, 'ok');
  });

  it('should open dialog and cancel delete record', () => {
    const mockMDDialod = TestBed.get(MatDialog);
    const mockToasterService = TestBed.get(ToasterService);
    spyOn(mockMDDialod, 'open').and.returnValue({
      afterClosed: () => of(false)
    });
    const spyShowToaster = spyOn(mockToasterService, 'showToaster');
    const mockElement = {id: 'row1'};
    const successMessage = 'Record Deleted Successfully...!!!'
    component.openDeleteDialog(mockElement);
    expect(spyShowToaster).not.toHaveBeenCalledWith(successMessage, 'ok');
  });

  it('should open dialog and confirm insert record', () => {
    const mockMDDialod = TestBed.get(MatDialog);
    const mockToasterService = TestBed.get(ToasterService);
    spyOn(mockMDDialod, 'open').and.returnValue({
      afterClosed: () => of(true)
    });
    const spyShowToaster = spyOn(mockToasterService, 'showToaster');
    const successMessage = 'Record Inserted Successfully...!!!'
    component.openInsertDialog();
    expect(spyShowToaster).toHaveBeenCalledWith(successMessage, 'ok');
  });

  it('should open dialog and cancel insert record', () => {
    const mockMDDialod = TestBed.get(MatDialog);
    const mockToasterService = TestBed.get(ToasterService);
    spyOn(mockMDDialod, 'open').and.returnValue({
      afterClosed: () => of(false)
    });
    const spyShowToaster = spyOn(mockToasterService, 'showToaster');
    const successMessage = 'Record Inserted Successfully...!!!'
    component.openInsertDialog();
    expect(spyShowToaster).not.toHaveBeenCalledWith(successMessage, 'ok');
  });

  it('should open dialog and update the record', () => {
    const mockMDDialod = TestBed.get(MatDialog);
    const mockToasterService = TestBed.get(ToasterService);
    spyOn(mockMDDialod, 'open').and.returnValue({
      afterClosed: () => of(true)
    });
    const spyShowToaster = spyOn(mockToasterService, 'showToaster');
    const mockElement = {id: 'row1'};
    const successMessage = 'Record Updated Successfully...!!!'
    component.openUpdateDialog(mockElement);
    expect(spyShowToaster).toHaveBeenCalledWith(successMessage, 'ok');
  });

  it('should open dialog and cancel the update of record', () => {
    const mockMDDialod = TestBed.get(MatDialog);
    const mockToasterService = TestBed.get(ToasterService);
    spyOn(mockMDDialod, 'open').and.returnValue({
      afterClosed: () => of(false)
    });
    const spyShowToaster = spyOn(mockToasterService, 'showToaster');
    const mockElement = {id: 'row1'};
    const successMessage = 'Record Updated Successfully...!!!'
    component.openUpdateDialog(mockElement);
    expect(spyShowToaster).not.toHaveBeenCalledWith(successMessage, 'ok');
  });
});

