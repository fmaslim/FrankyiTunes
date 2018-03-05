import { Component, OnInit } from '@angular/core';
import { Http, HttpModule, URLSearchParams } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-http',
  templateUrl: './http.component.html',
  styleUrls: ['./http.component.css'],
  providers: []
})
export class HttpComponent implements OnInit {
  apiRoot = 'http://httpbin.org';
  getData: string;
  postData: string;
  putData: string;
  deleteData: string;

  getAsPromiseData: string;

  constructor(private http: Http) { }

  ngOnInit() {
  }

  doGet() {
    const url = `${this.apiRoot}/get`;
    this.http.get(url).subscribe(data => this.getData = data.text());
  }

  doPost() {
    // const url = `${this.apiRoot}/post`;
    // const payload = { foo: 'foo', moo: 'moo' };
    // const params = new URLSearchParams();
    // params.set('limit', '25');
    // this.http.post(url, {payload}).subscribe(response => this.postData = response.text());

    const url = `${this.apiRoot}/post`;
    const payload = {foo: 'foo', moo: 'moo'};
    this.http.post(url, {payload}).subscribe(response => this.postData = response.text());
  }

  doPut() {
    const url = `${this.apiRoot}/put`;
    const payload = {foo: 'foo', moo: 'moo'};
    this.http.put(url, {payload}).subscribe(data => this.putData = data.text());
  }

  doDelete() {
    const url = `${this.apiRoot}/delete`;
    this.http.delete(url).subscribe(data => this.deleteData = data.text());
  }

  doGetAsPromise() {
    const url = `${this.apiRoot}/get`;
    this.http.get(url).toPromise().then(response => this.getAsPromiseData = response.text());
  }

  handleError() {
  }
}
