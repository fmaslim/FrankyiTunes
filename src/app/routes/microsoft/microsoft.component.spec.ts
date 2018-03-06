/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { MicrosoftComponent } from './microsoft.component';

describe('MicrosoftComponent', () => {
  let component: MicrosoftComponent;
  let fixture: ComponentFixture<MicrosoftComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MicrosoftComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MicrosoftComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
