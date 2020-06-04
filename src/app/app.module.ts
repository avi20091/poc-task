import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CompilerFactory, COMPILER_OPTIONS, Compiler } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule, NoopAnimationsModule } from '@angular/platform-browser/animations';
import { EmployeeComponent } from './components/employee/employee.component';
import { CustomEmployeeComponent } from './components/custom-grid/employee.component';
import { MatTableModule } from '@angular/material/table';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatSort, MatSortHeader, MatSortModule } from '@angular/material/sort';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatIconModule, MatSnackBarModule, MatInputModule, MatDialogModule, MatRadioModule, MatToolbarModule, MatFormFieldModule, MatDatepickerModule, MatNativeDateModule, MatMenuModule, MatTooltipModule, MatAutocompleteModule, MatSelectModule, MatSliderModule, MatButtonToggleModule, MatButtonModule } from '@angular/material';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner'
import { EmployeeService } from './service/employee.service';
import { HttpClientModule } from '@angular/common/http';
// import { HttpModule } from '@angular/http';
import { DeleteDialogComponent } from './shared/delete-dialog/delete-dialog.component';
import { InsertDialogComponent } from './shared/insert-dialog/insert-dialog.component';
import { ToasterService } from './service/toaster.service';
import { DatePipe, LocationStrategy, HashLocationStrategy } from '@angular/common';
import { MatSpinnerOverlayComponent } from './components/mat-spinner-overlay/mat-spinner-overlay.component';

import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { reducers, metaReducers } from './store/reducers';
import { EmployeeEffects } from './store/employee.effects';

import { CustomMatGridModule } from 'custom-mat-grid'

import { ModuleService } from '../app/service/module.service';
import { RouterService } from '../app/service/router.service';
import { RouterModule } from '@angular/router';
import { JitCompilerFactory } from '@angular/platform-browser-dynamic';
import { EmpFormComponent } from './components/emp-form/emp-form.component';

export function createCompiler(compilerFactory: CompilerFactory) {
  return compilerFactory.createCompiler();
}
@NgModule({
  declarations: [
    AppComponent,
    EmployeeComponent,
    CustomEmployeeComponent,
    DeleteDialogComponent,
    InsertDialogComponent,
    MatSpinnerOverlayComponent,
    EmpFormComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    BrowserAnimationsModule,
    MatInputModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatCheckboxModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatRadioModule,
    MatSliderModule,
    MatSelectModule,
    MatAutocompleteModule,
    MatGridListModule,
    MatCardModule,
    MatNativeDateModule,
    FormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NoopAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    MatTableModule,
    MatGridListModule,
    MatIconModule,
    MatSnackBarModule,
    MatToolbarModule,
    MatCheckboxModule,
    MatCardModule,
    MatFormFieldModule,
    MatSortModule,
    MatDialogModule,
    MatInputModule,
    MatRadioModule,
    MatProgressSpinnerModule,
    HttpClientModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatMenuModule,
    MatTooltipModule,
    StoreModule.forRoot(reducers),
    EffectsModule.forRoot([EmployeeEffects]),
    CustomMatGridModule,
    // HttpModule,
    RouterModule.forRoot([
      {
        path: '', redirectTo: '', pathMatch: 'full'
      },
      {
        path: 'ngrx', component: EmployeeComponent
      },
      {
        path: 'empform', component: EmpFormComponent
      },
      {
        path: 'customMatGrid', component: CustomEmployeeComponent
      },
      {
        path: 'dynamicModuleLoader', component: AppComponent
      }
    ], {useHash: true})
  ],
  providers: [EmployeeService, MatDatepickerModule, ToasterService, DatePipe, ModuleService, RouterService,
    { provide: COMPILER_OPTIONS, useValue: {}, multi: true },
    { provide: CompilerFactory, useClass: JitCompilerFactory, deps: [COMPILER_OPTIONS] },
    { provide: Compiler, useFactory: createCompiler, deps: [CompilerFactory] },
    { provide: LocationStrategy, useClass: HashLocationStrategy }],
  bootstrap: [AppComponent],
  entryComponents: [DeleteDialogComponent, InsertDialogComponent],
  exports: [MatProgressSpinnerModule]
})
export class AppModule { }
