import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpFormComponent } from './emp-form.component';
import { MatIconModule, MatSnackBarModule, MatInputModule, MatDialogModule, MatRadioModule,
  MatToolbarModule, MatFormFieldModule, MatDatepickerModule, MatNativeDateModule,
  MatMenuModule, MatTooltipModule, MatTableModule, MatSliderModule, MatSelectModule, MatAutocompleteModule, MatButtonToggleModule } from '@angular/material';
import { MatSortModule } from '@angular/material/sort';
import { MatDialog } from '@angular/material/dialog';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner'
//import { MatSpinnerOverlayComponent } from '../mat-spinner-overlay/mat-spinner-overlay.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule, NoopAnimationsModule } from '@angular/platform-browser/animations';

describe('EmpFormComponent', () => {
  let component: EmpFormComponent;
  let fixture: ComponentFixture<EmpFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmpFormComponent ],
      imports: [MatIconModule, MatSnackBarModule, MatInputModule, MatDialogModule, MatRadioModule, MatToolbarModule, MatFormFieldModule, MatDatepickerModule, MatNativeDateModule, MatMenuModule, MatTooltipModule,
        MatTableModule,
        FormsModule,
        ReactiveFormsModule,
        MatSortModule,
        MatCheckboxModule,
        MatButtonToggleModule,
        MatMenuModule, 
        MatTooltipModule, 
        MatAutocompleteModule, 
        MatSelectModule, 
        MatSliderModule,
        MatCardModule,
        MatGridListModule,
        MatProgressSpinnerModule,
        HttpClientTestingModule,
        BrowserAnimationsModule,
        NoopAnimationsModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmpFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
