import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MatSpinnerOverlayComponent } from './mat-spinner-overlay.component';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner'
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { BrowserAnimationsModule, NoopAnimationsModule } from '@angular/platform-browser/animations';


describe('MatSpinnerOverlayComponent', () => {
  let component: MatSpinnerOverlayComponent;
  let fixture: ComponentFixture<MatSpinnerOverlayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MatSpinnerOverlayComponent ],
      imports: [
        MatProgressSpinnerModule,
        HttpClientTestingModule,
        BrowserAnimationsModule,
        NoopAnimationsModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MatSpinnerOverlayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
