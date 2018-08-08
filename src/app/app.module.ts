import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, NgForm, ReactiveFormsModule } from '@angular/forms'; 
// Third party modules
import { DataTableModule  } from 'primeng/primeng';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ResultTableComponent } from './result-table/result-table.component';
import { ResultTableService } from './result-table/result-table.service';
import { HttpModule, JsonpModule, Http, XHRBackend, RequestOptions } from '@angular/http';
import { RouterModule } from '@angular/router';
import { StudentFormComponent } from './student-form/student-form.component';


@NgModule({
  declarations: [
    AppComponent,
    ResultTableComponent,
    StudentFormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    DataTableModule,
    HttpModule,
    RouterModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [
    ResultTableService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
