import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';


@Component({
  selector: 'app-student-form',
  templateUrl: './student-form.component.html',
  styleUrls: ['./student-form.component.css']
})
export class StudentFormComponent implements OnInit {
  hide: boolean = false;
  studentForm: FormGroup;
  constructor() { }

  ngOnInit() {
    this.studentForm = new FormGroup({
      firstName: new FormControl('', [Validators.pattern(/^[A-Za-z]+$/)]),
      lastName: new FormControl('', [Validators.pattern(/^[A-Za-z]+$/)]),
      class: new FormControl('', [Validators.pattern(/^[0-9a-zA-Z]+$/)]),
      year: new FormControl('', [this.yearValidate]),
      percentage: new FormControl('', [this.percentValidate]),
    });
    var student: boolean = false;
  }

  onSubmit() {
    this.hide = true;
  }

  yearValidate(control) {
    if (control.value > 2017 || control.value < 0) {
      return { 'yearMsg': 'Enter a valid passing year before 2018' };
    }
  }
  percentValidate(control) {
    if (control.value < 0) {
      return { 'percentMsg': 'Enter valid percentage' };
    }
  }
}
