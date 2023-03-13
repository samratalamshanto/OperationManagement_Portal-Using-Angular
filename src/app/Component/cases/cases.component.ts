import { Component } from '@angular/core';
import { Router } from '@angular/router';
import {
  faList,
  faArrowTurnRight,
  faListCheck,
} from '@fortawesome/free-solid-svg-icons';
import { CommonServiceService } from '../service/common-service.service';

@Component({
  selector: 'app-cases',
  templateUrl: './cases.component.html',
  styleUrls: ['./cases.component.css'],
})
export class CasesComponent {
  constructor(
    public router: Router,
    private cmnService: CommonServiceService
  ) {}
  userData = 'sas';
  ngOnInit() {}
  caseTitleIcon = faListCheck;
  childComponentArrowIcon = faArrowTurnRight;

  listChildData: any = [
    {
      id: 0,
      case: 'CBS Bar Unbar',
      url: 'cbs_unbar',
      title: 'Unbar MSISDN',
      buttonData: 'Unbar',
      type: 'both',
      buttonDisable: true,
    },
    {
      id: 1,
      case: 'Product Configuration Add',
      url: 'product_configuration_add',
      title: 'Product Configuration',
      buttonData: 'Reactivate',
      type: 'file',
      buttonDisable: false,
    },

    {
      id: 2,
      case: 'Lost Phone Order',
      url: 'lost_phone_order',
      title: 'Order Processing',
      buttonData: 'Change',
      type: 'text',
      buttonDisable: true,
    },
    {
      id: 3,
      case: 'Update CRM Routing',
      url: 'crm_routing',
      title: 'Update CRM',
      buttonData: 'Update',
      type: 'file',
      buttonDisable: true,
    },
    {
      id: 4,
      case: 'Recycle Unbar',
      url: 'recyle_unbar',
      title: 'Recycle',
      buttonData: 'Unbar',
      type: 'text',
      buttonDisable: true,
    },
    {
      id: 5,
      case: 'Change IMSI Status',
      url: 'change_imsi_status',
      title: 'Change Status',
      buttonData: 'Change',
      type: 'text',
      buttonDisable: true,
    },
    {
      id: 6,
      case: 'Yet to Incorporate',
      url: 'yet_to_incorporate',
      title: 'Incorporate MSISDN',
      buttonData: 'Incorporate',
      type: 'both',
      buttonDisable: true,
    },
    {
      id: 7,
      case: 'Postpaid Reactivation',
      url: 'postpaid_reactivation',
      title: 'Reactivation',
      buttonData: 'Reactivate',
      type: 'text',
      buttonDisable: true,
    },
    {
      id: 8,
      case: 'Postpaid Reinitiate',
      url: 'postpaid_reinitiate',
      title: 'Reinitiate',
      buttonData: 'Reactivate',
      type: 'text',
      buttonDisable: true,
    },
    {
      id: 9,
      case: 'Prepaid Reinitiate',
      url: 'prepaid_reinitiate',
      title: 'Reinitiate',
      buttonData: 'Reinitiate',
      type: 'text',
      buttonDisable: false,
    },
    {
      id: 10,
      case: 'Reactivation Button',
      url: 'reactivation_button',
      title: 'Reactivate Button',
      buttonData: 'Reactivate',
      type: 'text',
      buttonDisable: false,
    },

    {
      id: 11,
      case: 'Terminate MSISDN',
      url: 'terminate_msisdn',
      title: 'Terminate',
      buttonData: 'Terminate',
      type: 'text',
      buttonDisable: true,
    },
    {
      id: 12,
      case: 'Lost Phone Unbarring',
      url: 'lost_phone_unbarring',
      title: 'Unbar MSISDN',
      buttonData: 'Unbar',
      type: 'text',
      buttonDisable: true,
    },
  ];
  childData: any = this.listChildData[0];
  iconInChildComponentUrl: string = 'cbs_unbar';
  textInputBool: any =
    this.childData.type === 'both' || this.childData.type === 'text';
  fileInputBool: any =
    this.childData.type === 'both' || this.childData.type === 'file';

  onClick(Id: any) {
    this.childData = this.listChildData[Id];
    this.iconInChildComponentUrl = this.childData.url;
    this.textInputBool =
      this.childData.type === 'both' || this.childData.type === 'text';
    this.fileInputBool =
      this.childData.type === 'both' || this.childData.type === 'file';
  }
}
