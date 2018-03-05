import { SearchItem } from './../http-promise/http-promise.component';
import { Component, OnInit, Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/switchMap';
import { Http } from '@angular/http';
import { FormControl, ReactiveFormsModule, FormsModule } from '@angular/forms';

@Injectable()
export class SearchServiceWithObservable {
  apiRoot = 'https://itunes.apple.com/search';

  constructor(private http: Http) {
  }

  search(term: string): Observable<SearchItem[]> {
    const url = `${this.apiRoot}?term=${term}&media=music&limit=20`;
    return this.http.get(url).map(response => {
      return response.json().results.map(item => {
        return new SearchItem(item.trackName
                            , item.artistName
                            , item.trackViewUrl
                            , item.artworkUrl30
                            , item.artistId);
      });
    });
  }
}

@Component({
  selector: 'app-http-observable',
  templateUrl: './http-observable.component.html',
  styleUrls: ['./http-observable.component.css'],
  providers: [SearchServiceWithObservable]
})
export class HttpObservableComponent implements OnInit {
  loading: boolean;
  // results: SearchItem[];
  results: Observable<SearchItem[]>;
  searchField: FormControl;

  constructor(public iTunes: SearchServiceWithObservable) {
    // this.results = [];
  }

  ngOnInit() {
    this.searchField = new FormControl();
    this.results = this.searchField.valueChanges
                    .debounceTime(400)
                    .distinctUntilChanged()
                    .switchMap(term => this.iTunes.search(term));
  }

  // This is one way to do it, but it's not using Observables to their full extent
  // because it's still subscribing to Observable and storing the results locally in the component

  // doSearch(term: string) {
  //   this.iTunes.search(term).subscribe(data => {
  //     this.results = data;
  //   });
  // }

  // Skip that by using the async pipe
  doSearch(term: string) {
    this.results = this.iTunes.search(term);
  }
}
