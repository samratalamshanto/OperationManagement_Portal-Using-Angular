import { Component } from '@angular/core';
import {
  faUserCircle,
  faHouse,
  faIdCard,
  faRightFromBracket,
  faBarsStaggered,
  faBoltLightning,
  faDashboard,
  faBars,
} from '@fortawesome/free-solid-svg-icons';
import { AuthService } from '../auth/service/auth.service';
import { CommonServiceService } from '../service/common-service.service';
import { JwtHelperService } from '@auth0/angular-jwt';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent {
  constructor(
    private authService: AuthService,
    private cmnService: CommonServiceService,
    private toast: ToastrService,
    private router: Router
  ) {}
  userData: any;
  userName: any;
  decodedToken: any;
  tokenData: any = localStorage.getItem('token');

  helperJwt = new JwtHelperService();

  ngOnInit() {
    this.cmnService.curUserData.subscribe((res) => (this.userData = res));

    this.decodedToken = this.helperJwt.decodeToken(this.tokenData);
    this.userName = this.decodedToken.sub;
    // console.log('hola ' + this.userData.username);
  }
  barsIcon: any = faBars;
  userIcon: any = faUserCircle;
  houseIcon: any = faHouse;
  profileIcon: any = faIdCard;
  logoutIcon: any = faRightFromBracket;
  casesIcon: any = faBarsStaggered;
  actionIcon: any = faBoltLightning;
  dashboardIcon: any = faDashboard;
  isCollapsed = false;
  routerUrl = this.router.url;
  navbarComponentList: any = [
    {
      id: 0,
      componentName: 'Cases',
      iconName: faBarsStaggered,
      href: '/cases',
    },
    {
      id: 1,
      componentName: 'Actions',
      iconName: faBoltLightning,
      href: '/action',
    },
    {
      id: 2,
      componentName: 'Dashboard',
      iconName: faDashboard,
      href: '/dashboard',
    },
  ];

  logout() {
    this.toast.success('Logged Out !!!');
    this.authService.logout();
  }
}
