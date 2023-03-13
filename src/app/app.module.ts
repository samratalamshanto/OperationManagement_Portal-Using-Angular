import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthComponent } from './Component/auth/auth.component';
import { CasesComponent } from './Component/cases/cases.component';
import { CaseCommonComponentComponent } from './Component/cases/case-common-component/case-common-component.component';
import { ProfileComponent } from './Component/profile/profile.component';
import { NavbarComponent } from './Component/navbar/navbar.component';
import { InterceptorInterceptor } from './Component/interceptor/interceptor.interceptor';
import { DashboardComponent } from './Component/dashboard/dashboard.component';
import { ActionComponent } from './Component/action/action.component';
import { ToastrModule } from 'ngx-toastr';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './Component/footer/footer.component';
import { DataTablesModule } from 'angular-datatables';
@NgModule({
  declarations: [
    AppComponent,
    AuthComponent,
    CasesComponent,
    CaseCommonComponentComponent,
    ProfileComponent,
    NavbarComponent,
    DashboardComponent,
    ActionComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FontAwesomeModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    NgbModule,
    CommonModule,
    DataTablesModule,
    ToastrModule.forRoot({
      positionClass: 'toast-top-right',
      preventDuplicates: true,
      progressBar: true,
      progressAnimation: 'decreasing',
      closeButton: true,
    }),
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: InterceptorInterceptor,
      multi: true,
    },
    CaseCommonComponentComponent,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
