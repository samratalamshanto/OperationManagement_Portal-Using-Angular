import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/app/environment';

@Injectable({
  providedIn: 'root',
})
export class DashboardService {
  base_url: any;
  constructor(private http: HttpClient) {
    if (environment.production_type_bool) {
      this.base_url = environment.server_url;
    } else {
      this.base_url = environment.local_url;
    }
    //console.log(this.base_url);
  }

  getDashboardListData(page: any, pageSize: any) {
    return this.http.get(
      `${this.base_url}/dashboard?page=${page}&pageSize=${pageSize}`
    );
  }
}
