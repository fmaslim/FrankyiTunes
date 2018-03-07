/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { HomeComponent } from './home.component';

// describe(string, function) function defines a Test Suite
// or a collection of individual Test Specs.
describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  // Setup and Teardown
  // Sometimes in order to test a feature, we need to perform some setup. Perhaps it is creating
  // some test objects. Also, we may need to perform some cleanup activities after we have finished testing
  // Perhaps we need to delete some files from the hard drive.

  // Jasmine has several functions to make Setup and Teardown easier
  // BeforeAll, AfterAll, BeforeEach, AfterEach

  // beforeAll - called once, BEFORE all specs in DESCRIBE test suite run.
  // afterAll - called once, AFTER all specs in a test suite are finished.
  // beforeEach - called BEFORE EACH test specification, it function, is run.
  // afterEach - called AFTER EACH test specification has been run.

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  // it(string, function) function defines an individual Test Spec
  // and contains one or more Test Expectations
  it('should create', () => {
    // expect(actual) expression is what we call an Expectation. In conjunction with a Matcher,
    // it describes an expected piece of behavior in the application
    expect(component).toBeTruthy(); // matcher(expected) expression is what we call a Matcher.
    // Matcher does a boolean comparison with the expected value passed in vs the actual value
    // passed to the expect function, if they are false, the spec fails

    // expect(array).toContain(member);
    // expect(fn).toThrow(string);
    // expect(fn).toThrowError(string);
    // expect(instance).toBe(instance);
    // expect(mixed).toBeDefined();
    // expect(mixed).toBeFalsy();
    // expect(mixed).toBeNull();
    // expect(mixed).toBeTruthy();
    // expect(mixed).toBeUndefined();
    // expect(mixed).toEqual(mixed);
    // expect(mixed).toMatch(pattern);
    // expect(number).toBeCloseTo(number, decimalPlaces);
    // expect(number).toBeGreaterThan(number);
    // expect(number).toBeLessThan(number);
    // expect(number).toBeNaN();
    // expect(spy).toHaveBeenCalled();
    // expect(spy).toHaveBeenCalledTimes(number);
    // expect(spy).toHaveBeenCalledWith(...arguments);

  });
});
