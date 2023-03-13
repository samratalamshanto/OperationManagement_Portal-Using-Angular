import { Component, Inject, OnInit } from '@angular/core';
import { ROUTER_CONFIGURATION, ROUTER_INITIALIZER } from '@angular/router';
import { AuthComponent } from '../auth/auth.component';
import { CommonServiceService } from '../service/common-service.service';
import { JwtModule, JwtHelperService } from '@auth0/angular-jwt';
import { HttpClientModule } from '@angular/common/http';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
})
export class ProfileComponent implements OnInit {
  // userData: any;
  userName: any;
  email: any;
  role: any;
  token: any;

  helperJwt = new JwtHelperService();
  decodeToken: any;

  constructor(
    private cmnService: CommonServiceService,
    private toast: ToastrService
  ) {}

  ngOnInit() {
    // this.cmnService.curUserData.subscribe((res) => (this.userData = res));
    // console.log('hola ' + this.userData.username);
    this.token = localStorage.getItem('token');
    this.decodeToken = this.helperJwt.decodeToken(this.token);
    this.email = this.decodeToken.userDetails.email || null;
    this.userName = this.decodeToken.userDetails.username || null;
    this.role = this.decodeToken.userDetails.authorities[0].authority || null;
  }

  // showMsg() {
  //   this.toast.info('Profile Component', 'Holaaaa', {});
  // }
}
