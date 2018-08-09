import { Injectable } from '@angular/core';
import { Headers, Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

@Injectable()

export class ResultTableService {
    constructor(
        private _http: Http
    ) { }
    public getStudentData() {
        const url = 'http://localhost:4200/assets/data.json';
        return this._http.get(url);


    }
}
