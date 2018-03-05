import { Component, OnInit } from '@angular/core';
import { Http, HttpModule, URLSearchParams, Headers, RequestOptions } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import 'rxjs/add/operator/toPromise';

@Component({
  selector: 'app-http',
  templateUrl: './http.component.html',
  styleUrls: ['./http.component.css'],
  providers: []
})
export class HttpComponent implements OnInit {
  apiRoot = 'http://httpbin.org';
  getData: any; // In order to show HTTP response data as JSON, need to use type 'any' instead of string
  postData: any;
  putData: any;
  deleteData: any;

  getAsPromiseData: any;
  getAsPromiseErrorData: any;
  getWithHeadersData: any;

  constructor(private http: Http) { }

  ngOnInit() {
  }

  doGet() {
    const url = `${this.apiRoot}/get`;
    this.http.get(url).subscribe(data => this.getData = data.json());
  }

  doPost() {
    const url = `${this.apiRoot}/post`;
    const payload = {foo: 'foo', moo: 'moo'};
    this.http.post(url, {payload}).subscribe(response => this.postData = response.json());
  }

  doPut() {
    const url = `${this.apiRoot}/put`;
    const payload = {foo: 'foo', moo: 'moo'};
    this.http.put(url, {payload}).subscribe(data => this.putData = data.json());
  }

  doDelete() {
    const url = `${this.apiRoot}/delete`;
    this.http.delete(url).subscribe(data => this.deleteData = data.json());
  }

  doGetAsPromise() {
    const url = `${this.apiRoot}/get`;
    this.http.get(url).toPromise().then(response => this.getAsPromiseData = response.json());
  }

  doGetAsPromiseError() {
    const url = `${this.apiRoot}/post`;
    this.http.get(url).toPromise().then(
      response => this.getAsPromiseErrorData = response.json(),
      err => this.getAsPromiseErrorData = `${err.status}` + '. ' + `${err.statusText}`
    );
  }

  doGetWithHeaders() {
    const url = `${this.apiRoot}/get`;
    const headers = new Headers();
    headers.append('Authorization', btoa('username:password'));
    const options = new RequestOptions();
    options.headers = headers;

    this.http.get(url, options).subscribe(
      response => {
        this.getWithHeadersData = response.json();
      },
      err => this.getWithHeadersData = `${err.status}` + ', ' + `${err.statusText}`
    );
  }

  handleError() {
  }
}
