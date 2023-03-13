import { HttpClient } from '@angular/common/http';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { environment } from 'src/app/environment';
import { DashboardService } from './services/dashboard.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit, OnDestroy {
  base_url: any;
  total: any;
  constructor(private http: HttpClient) {
    if (environment.production_type_bool) {
      this.base_url = environment.server_url;
    } else {
      this.base_url = environment.local_url;
    }
  }

  data: any = [];
  dtOptions: DataTables.Settings = {};
  dtTrigger: Subject<any> = new Subject<any>();

  ngOnInit(): void {
    this.dtOptions = {
      serverSide: true,
      pagingType: 'full_numbers',
      pageLength: 10,
      order: [[0, 'desc']],
      processing: true,
      paging: true,
      ajax: (dataTablesParameters: any, callback) => {
        console.log(dataTablesParameters);
        this.http
          .post<any>(`${this.base_url}/dashboard`, dataTablesParameters, {})
          .subscribe((resp) => {
            this.data = resp.data;
            this.total = resp.recordsTotal;
            callback({
              recordsTotal: resp.recordsTotal,
              recordsFiltered: resp.recordsFiltered,
              data: [],
            });
          });
      },
    };
    //this.callGetData(0, 10);
  }

  // callGetData(page, pageSize) {
  //   this.dashboardServices
  //     .getDashboardListData(page, pageSize)
  //     .subscribe((resp: any) => {
  //       const { recordsTotal, recordsFiltered } = resp;
  //       this.data = resp;
  //       this.dtTrigger.next(null);
  //     });
  // }

  ngOnDestroy(): void {
    this.dtTrigger.unsubscribe();
  }
}
