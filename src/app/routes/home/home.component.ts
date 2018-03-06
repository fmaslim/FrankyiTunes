import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  data: any;

  constructor(private route: ActivatedRoute) {
    this.route.params.subscribe(params => {
      this.data = params['id'];
      console.log(params);
    });
  }

  ngOnInit() {
  }

}
