import { Component, Input } from '@angular/core';
import {
  faUpload,
  faArrowsRotate,
  faChevronCircleRight,
  faTerminal,
  faCheck,
  faForward,
  faL,
} from '@fortawesome/free-solid-svg-icons';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { CasesService } from '../case-service/cases.service';
import { InterceptorInterceptor } from '../../interceptor/interceptor.interceptor';
import { ToastrService } from 'ngx-toastr';
import { CommonServiceService } from '../../service/common-service.service';
@Component({
  selector: 'app-case-common-component',
  templateUrl: './case-common-component.component.html',
  styleUrls: ['./case-common-component.component.css'],
})
export class CaseCommonComponentComponent {
  constructor(
    private caseService: CasesService,
    private toast: ToastrService,
    private CommonServiceService: CommonServiceService
  ) {}

  uploadIcon = faUpload;
  responseIcon = faForward;
  titleIcon = faChevronCircleRight;
  caseIcon = faTerminal;
  resetIcon = faArrowsRotate;

  @Input() childData: any;
  @Input() textInputBool: any;
  @Input() fileInputBool: any;

  fileData = new FormGroup({
    files: new FormControl(''),
  });
  file: any = this.fileData.get('files');

  formMsisdn = new FormGroup({
    msisdn: new FormControl('', [
      Validators.required,
      Validators.pattern('^(880)?1\\d{9}$'),
    ]),
  });

  get msisdn() {
    return this.formMsisdn.get('msisdn');
  }

  fileUploadButtonDisableBool: boolean = true;
  responseTextDivShowBool: boolean = false;
  responseFileDivShowBool: boolean = false;

  responseMsgText: any;
  responseLoadingBoolText: boolean = true;

  responseMsgFile: any;
  responseLoadingBoolFile: boolean = true;

  responseErrorMsg: any;

  showToastForResponseData(resData: any, toastType: any) {
    if (toastType == 'success') {
      this.toast.success(resData, 'Response: ');
    } else if (toastType == 'error') {
      this.toast.error(resData, 'Error Response: ');
    } else if (toastType == 'info') {
      this.toast.info(resData, 'Info Response: ');
    } else {
      this.toast.info(resData, 'Info Response: ');
    }
  }

  setTimeoutForFileData() {
    setTimeout(() => {
      (this.responseFileDivShowBool = false), (this.responseMsgFile = '');
    }, 20000);
  }

  setTimeoutForTextData() {
    setTimeout(() => {
      (this.responseTextDivShowBool = false), (this.responseMsgText = '');
    }, 20000);
  }

  onSubmitMsisdn() {
    this.responseTextDivShowBool = true;
    this.setTimeoutForTextData();

    if (this.childData.url === 'cbs_unbar') {
      this.caseService.unbar(this.formMsisdn.value).subscribe((data: any) => {
        this.responseLoadingBoolText = false;
        this.responseMsgText = data.msg;
        this.showToastForResponseData(this.responseMsgText, 'success');
      });
    } else {
      this.responseLoadingBoolText = false;
      this.responseMsgText = 'Not Connected with Backend....';
      this.showToastForResponseData(this.responseMsgText, 'info');
    }
    this.formMsisdn.reset();
  }

  onEvent(event: any) {
    this.file = event.target.files[0];
    this.fileUploadButtonDisableBool = false;
  }

  onSubmitFile() {
    this.responseFileDivShowBool = true;
    let formData: FormData = new FormData();
    formData.append('file', this.file);
    this.clearFile();

    if (this.childData.url === 'cbs_unbar') {
      this.caseService.unbarBulk(formData).subscribe((data: any) => {
        this.responseLoadingBoolFile = false;
        this.responseMsgFile = data.msg;
        this.setTimeoutForFileData();
        this.showToastForResponseData(this.responseMsgFile, 'success');
      });
    } else if (this.childData.url === 'product_configuration_add') {
      this.caseService.productConfigAdd(formData).subscribe((data: any) => {
        this.responseLoadingBoolFile = false;
        this.responseMsgFile = data.msg;
        this.showToastForResponseData(this.responseMsgFile, 'success');
      });

      this.CommonServiceService.errResponse.subscribe((res: any) => {
        this.responseLoadingBoolFile = false;
        this.responseMsgFile = res;
        this.showToastForResponseData(this.responseMsgFile, 'error');
      });
    } else {
      this.responseLoadingBoolFile = false;
      this.responseMsgFile = 'Not connected with backend....';
      this.showToastForResponseData(this.responseMsgFile, 'info');
    }
    this.setTimeoutForFileData();
    this.fileData.get('files')?.reset();
  }

  resetMsisdn() {
    this.responseTextDivShowBool = false;
    this.formMsisdn.reset();
    this.responseLoadingBoolText = true;
  }

  clearFile() {
    // this.responseFileDivShowBool = false;
    this.fileData.get('files')?.reset();
    this.fileUploadButtonDisableBool = true;
    this.responseLoadingBoolFile = true;
    this.setTimeoutForFileData();
  }

  ngOnChanges() {
    this.resetMsisdn();
    this.clearFile();
    this.responseLoadingBoolText = true;
    this.responseLoadingBoolFile = true;
  }
}
