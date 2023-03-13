import { Component, ViewChild, AfterViewInit } from '@angular/core';
import { from } from 'rxjs';
import { AuthComponent } from './Component/auth/auth.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'om-portal';
  userData: any;
  data = 'test';

  @ViewChild(AuthComponent) authChild: any;

  ngAfterViewInit() {}

  constructor() {}

  onInit() {}

  getUserData(thatUser: any) {
    this.userData = thatUser;
    // console.log('Hola: ', this.userData);
  }
}
