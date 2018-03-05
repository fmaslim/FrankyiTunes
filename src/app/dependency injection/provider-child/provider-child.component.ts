import { Component, OnInit } from '@angular/core';
import { SimpleService } from '../providers/providers.component';

@Component({
  selector: 'app-provider-child',
  templateUrl: './provider-child.component.html',
  styleUrls: ['./provider-child.component.css'],
  providers: []
})
export class ProviderChildComponent implements OnInit {
  simpleService: SimpleService;
  constructor(private service: SimpleService) {
    this.simpleService = service;
  }

  ngOnInit() {
  }

}
