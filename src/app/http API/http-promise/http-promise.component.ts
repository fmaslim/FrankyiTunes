import { Http } from '@angular/http';
import { Component, OnInit, Injectable } from '@angular/core';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class SearchServiceWithPromise {
  apiRoot = 'https://itunes.apple.com/search';
  results: SearchItem[];
  loading: boolean;

  constructor(private http: Http) {
    this.results = [];
    this.loading = false;
  }

  search(term: string) {
    const promise = new Promise((resolve, reject) => {
      // TODO: handle resolve and reject
      const url = `${this.apiRoot}?term=${term}&media=music&limit=20`;
      this.http.get(url).toPromise().then(response => {
        this.results = response.json().results.map(item => {
          return new SearchItem(
            item.trackName,
            item.artistName,
            item.trackViewUrl,
            item.artworkUrl30,
            item.artistId
          );
        });
        // this.results = response.json().results;
        resolve();
      },
      err => {
        reject(err);
      }
    );

      // When the http response arrives from the iTunes API, we can finish the processing and call resolve()
    });

    return promise;
  }

}

export class SearchItem {
  constructor(public name: string
            , public artist: string
            , public link: string
            , public thumbnail: string
            , public artistId: string) {

  }
}

@Component({
  selector: 'app-http-promise',
  templateUrl: './http-promise.component.html',
  styleUrls: ['./http-promise.component.css'],
  providers: [SearchServiceWithPromise]
})
export class HttpPromiseComponent implements OnInit {
  loading = false;

  constructor(public iTunes: SearchServiceWithPromise) {
  }

  ngOnInit() {
  }

  doSearch(term: string) {
    this.loading = true;
    this.iTunes.search(term).then(() => {
      this.loading = false;
    });
  }
}
