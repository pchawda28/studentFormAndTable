import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { StudentFormComponent } from './student-form/student-form.component';
import { ResultTableComponent } from './result-table/result-table.component';

const routes: Routes = [
  { path: 'studentForm', component: StudentFormComponent },
  { path: 'studentResultBoard', component: ResultTableComponent },
  { path: '', redirectTo: 'studentResultBoard', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]

})
export class AppRoutingModule { }
