import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse,
} from '@angular/common/http';
import { catchError, Observable, throwError } from 'rxjs';
import { AuthService } from '../auth/service/auth.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { CaseCommonComponentComponent } from '../cases/case-common-component/case-common-component.component';
import { CommonServiceService } from '../service/common-service.service';

@Injectable()
export class InterceptorInterceptor implements HttpInterceptor {
  // static getErrorMsg(): any {
  //   throw new Error('Method not implemented.');
  // }
  static errorMsg: any;

  static getErrorMsg(): any {
    return InterceptorInterceptor.errorMsg;
  }
  constructor(
    private authservice: AuthService,
    private router: Router,
    private toast: ToastrService,
    private caseCommonComponent: CaseCommonComponentComponent,
    private CommonServiceService: CommonServiceService
  ) {}

  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    const token = this.authservice.getToken();

    if (token) {
      request = request.clone({
        setHeaders: { Authorization: `Bearer ${token}` },
      });
    }
    return next.handle(request).pipe(
      catchError((err: any) => {
        if (err instanceof HttpErrorResponse) {
          if (err.status === 401) {
            alert('Token expired. Please login again.');
            this.router.navigate(['/login']);
          } else if (err.status === 500) {
            var err;
            if (err.error.msg) {
              err = err.error.msg;
            } else {
              err = 'error';
            }

            this.CommonServiceService.setResponseMsg(err);

            this.toast.error(err.error.msg, 'Error!!!');
            console.log(err.error.msg);
            InterceptorInterceptor.errorMsg = err.error.msg;

            this.caseCommonComponent.setTimeoutForFileData();
            this.caseCommonComponent.setTimeoutForTextData();
          }
        }
        return throwError(() => {
          this.toast.error('error occurred.', 'Error!!!');
          new Error('some other error occurred.');
        });
      })
    );
  }
}
