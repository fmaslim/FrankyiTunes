import { Component, OnInit } from '@angular/core';
import { ProviderChildComponent } from '../provider-child/provider-child.component';

// Know the difference between configuring providers on an NgModule, a component or directive's
// providers property, and a component's viewProviders property.

export class SimpleService {
  value: string;
}

@Component({
  selector: 'app-providers',
  templateUrl: './providers.component.html',
  styleUrls: ['./providers.component.css'],
  viewProviders: [SimpleService]
})
export class ProvidersComponent implements OnInit {
  // simpleService: SimpleService;
  constructor(public service: SimpleService) {
    // this.simpleService = service;
  }

  ngOnInit() {
  }

}

