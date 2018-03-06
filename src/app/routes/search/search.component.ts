import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  data: string;
  term1: string;
  term2: string;

  constructor(private route: ActivatedRoute, private router: Router) {
    this.route.params.subscribe(params => {
      this.data = params['term'];
      this.term1 = params['first'];
      this.term2 = params['last'];
      console.log(params);
    });
  }

  ngOnInit() {
  }

  onSearch(term: string) {
    this.router.navigate(['search', {term: term}]);
  }

}
