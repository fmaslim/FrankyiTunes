import { Component, OnInit, Injectable } from '@angular/core';
import { ActivatedRoute, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, CanActivateChild, CanDeactivate } from '@angular/router';
import { FormControl } from '@angular/forms';

@Injectable()
export class AlwaysAuthGuard implements CanActivate {

  // Guard function parameters
  // To help in determining whether or not a guard should accept or deny access if the guard passes,
  // the guard function can be passed certain arguments
  // 1. component: Component - the component itself
  // 2. route: ActivatedRouteSnapshot - the future route that will be activated if the guard passes,
  //    we can use its params property to extract the route params
  // 3. state: RouteStateSnapshot - the future RouterState if the guard passes, we can find the URL
  //    we are trying to navigate to from the URL property

  // canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | Observable<boolean> | Promise<boolean> {
  //   throw new Error("Method not implemented.");
  // }

  canActivate() {
    console.log('AlwaysAuthGuard');
    return false;
  }
}

export class UserService {
  isLoggedIn(): boolean {
    return false;
  }
}

@Injectable()
export class OnlyLoggedInUserGuard implements CanActivate {

  constructor(private userService: UserService) {
  }

  canActivate() {
    console.log('OnlyLoggedInUser');
    if (this.userService.isLoggedIn()) {
      return true;
    } else {
      window.alert('You don\'t have permission to view this page');
      return false;
    }
  }
}

@Injectable()
export class AlwaysAuthChildrenGuard implements CanActivateChild {
  canActivateChild() {
    console.log('AlwaysAuthChildrenGuard');
    alert('You don\'t have permission to access this page');
    return false;
  }
}

// This type of guard is used to warn people if they are navigating away from a page where
// they have some unsaved changes
@Injectable()
export class UnsearchedTermGuard implements CanDeactivate<HomeComponent> {
  canDeactivate(component: HomeComponent,
                route: ActivatedRouteSnapshot,
                state: RouterStateSnapshot) {
    return component.canDeactivate() || confirm('Are you sure?');
  }
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  data: any;
  searchField: FormControl;

  constructor(private route: ActivatedRoute) {
    this.searchField = new FormControl();
    this.route.params.subscribe(params => {
      this.data = params['id'];
      console.log(params);
    });
  }

  ngOnInit() {
  }

  canDeactivate() {
    return this.searchField.value !== '';
  }

}
