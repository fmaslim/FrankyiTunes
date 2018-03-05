import { Component, OnInit, Injectable } from '@angular/core';
import { Jsonp } from '@angular/http';
import { SearchItem } from '../http-promise/http-promise.component';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/switchMap';

@Injectable()
export class SearchServiceWithJsonp {
  apiRoot = 'https://itunes.apple.com/search';

  constructor(private jsonp: Jsonp) {
  }

  search(term: string) {
    const url = `${this.apiRoot}?term=${term}&media=music&limit=20&callback=JSONP_CALLBACK`;
    return this.jsonp.request(url).map(response => {
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
  selector: 'app-http-jsonp',
  templateUrl: './http-jsonp.component.html',
  styleUrls: ['./http-jsonp.component.css'],
  providers: [SearchServiceWithJsonp]
})
export class HttpJsonpComponent implements OnInit {
  searchField: FormControl;
  results: Observable<SearchItem[]>;
  loading: boolean;

  constructor(private iTunes: SearchServiceWithJsonp) { }

  ngOnInit() {
    this.searchField = new FormControl();
    this.results = this.searchField.valueChanges
                                  .debounceTime(400)
                                  .distinctUntilChanged()
                                  .do(_ => this.loading = true)
                                  .switchMap(term => this.iTunes.search(term))
                                  .do(() => this.loading = false);
  }

}
