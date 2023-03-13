import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import {
  faEyeSlash,
  faEye,
  faUser,
  faLock,
  faRightToBracket,
  faUsers,
  faKey,
  faIndent,
} from '@fortawesome/free-solid-svg-icons';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthService } from './service/auth.service';
import { Router } from '@angular/router';
import { CommonServiceService } from '../service/common-service.service';
import { ToastrService } from 'ngx-toastr';
import { JwtHelperService } from '@auth0/angular-jwt';
@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css'],
})
export class AuthComponent implements OnInit {
  constructor(
    private authService: AuthService,
    private router: Router,
    private cmnService: CommonServiceService,
    private toast: ToastrService
  ) {}
  helperJwt = new JwtHelperService();
  userName: any;
  ngOnInit(): void {}
  usersIcon = faUsers;
  keyIcon = faKey;
  reddotLogo: string =
    '../../../assets/picture/reddotlogo-removebg-preview.png';

  @Output() userDataEvent = new EventEmitter<any>();

  formData = new FormGroup({
    username: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required]),
  });

  onSubmit() {
    //need to send formData.value data
    console.log(this.formData.value);
    this.authService.login(this.formData.value).subscribe((res: any) => {
      localStorage.setItem('token', res.accessToken);
      this.router.navigate(['/cases']);
      this.userName = res.username;
      this.toast.success('Logged In !!!', `Welcome ${this.userName}..`);
      // console.log(res);
      this.userDataEvent.emit(res);
      this.cmnService.changeUserData(res);
    });
  }
}
