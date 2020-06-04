import { NgModule } from '@angular/core';
import { ModuleaComponent } from './modulea.component';
import { RouterModule } from '@angular/router';
import { MatTableModule } from '@angular/material/table';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [ModuleaComponent],
  imports: [
    RouterModule.forChild([
    {
        path: '', pathMatch: 'full', component: ModuleaComponent
    }
  ]),MatTableModule,CommonModule
  ],
  exports: [ModuleaComponent]
})
export class ModuleaModule { }
