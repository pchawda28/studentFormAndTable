import { Component, OnInit } from '@angular/core';
import { ResultTableService } from './result-table.service';
import { columnDef } from '../../assets/columnDef';

@Component({
  selector: 'app-result-table',
  templateUrl: './result-table.component.html',
  styleUrls: ['./result-table.component.css']
})
export class ResultTableComponent implements OnInit {
  studentData: any;
  columnDef;
  cols: any[];
  defaultSortOrder;

  constructor(
    private _resultTableService: ResultTableService
  ) { }

  ngOnInit() {
    this.defaultSortOrder = 1;
    this._resultTableService.getStudentData().subscribe((data) => {
      this.studentData = JSON.parse(data['_body']);
      console.log("hello data ", this.studentData);
      //console.log(typeof data);
    });
    //this.modifyStudentData();
    setTimeout(() => {
      if (this.studentData) {


        for (let i = 0; i < this.studentData.length; i++) {
          let mathMarks = Number(this.studentData[i]["marks"]["Maths"]);
          let englishMarks = Number(this.studentData[i]["marks"]["English"]);
          let scienceMarks = Number(this.studentData[i]["marks"]["Science"]);

          this.studentData[i].totalMarks = mathMarks + englishMarks + scienceMarks;


          if (mathMarks < 20 || englishMarks < 20 || scienceMarks < 20) {
            this.studentData[i].status = "Fail"
            console.log("failed", this.studentData[i]["name"]);
          }
          else {
            this.studentData[i].status = "Pass"
          }

        }
      }

      console.log("printing msarks", this.studentData);
    }, 300);
  }
}
