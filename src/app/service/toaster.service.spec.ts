import { TestBed } from '@angular/core/testing';

import { ToasterService } from './toaster.service';
import { MatSnackBar, MatSnackBarConfig } from '@angular/material';
import { Overlay } from '@angular/cdk/overlay';
describe('ToasterService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [MatSnackBar, Overlay]
  }));

  it('should be created', () => {
    const service: ToasterService = TestBed.get(ToasterService);
    expect(service).toBeTruthy();
  });

  it('should show Toaster', () => {
    const service: ToasterService = TestBed.get(ToasterService);
    const snackBarservice: MatSnackBar = TestBed.get(MatSnackBar);
    const spyOpen = spyOn(snackBarservice, 'open');
    const panelClass = 'open';
    const msg = 'Saved Successfully.';
    const mockConfig = new MatSnackBarConfig();
    mockConfig.verticalPosition = 'top',
    mockConfig.horizontalPosition = 'center';
    mockConfig.duration = 5000;
    mockConfig.panelClass = [panelClass];
    service.showToaster(msg, panelClass);
    expect(spyOpen).toHaveBeenCalledWith(msg, 'CLOSE', mockConfig);

    // test when panel class is array object.
    const panelClasses = ['open'];
    mockConfig.panelClass = panelClasses;
    service.showToaster(msg, panelClasses);
    expect(spyOpen).toHaveBeenCalledWith(msg, 'CLOSE', mockConfig);

  });
});
