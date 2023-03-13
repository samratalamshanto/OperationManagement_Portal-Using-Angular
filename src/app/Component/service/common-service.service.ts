import { Injectable } from '@angular/core';

import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root',
})
export class CommonServiceService {
  constructor() {}

  private userData = new BehaviorSubject<any>('admin');
  curUserData = this.userData.asObservable();
  changeUserData(thatUserData: any) {
    this.userData.next(thatUserData);
  }

  private errorResponseMsg = new BehaviorSubject<any>('Response Error: ');
  errResponse = this.errorResponseMsg.asObservable();
  setResponseMsg(errMsg: String) {
    this.errorResponseMsg.next(errMsg);
  }

  // private errorResponseMsg: any;

  // getErrorResponseMsg() {
  //   return this.errorResponseMsg;
  // }

  // setErrorResponseMsg(msg: any) {
  //   this.errorResponseMsg = msg;
  // }
}
