import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/app/environment';

@Injectable({
  providedIn: 'root',
})
export class CasesService {
  base_url: any;
  constructor(private http: HttpClient) {
    if (environment.production_type_bool) {
      this.base_url = environment.server_url;
    } else {
      this.base_url = environment.local_url;
    }
  }

  unbar(msisdn: any) {
    return this.http.post(`${this.base_url}/cbs-bar`, msisdn);
  }
  prepaidReinitiate(msisdn: any) {
    return this.http.post(`${this.base_url}/prepaid-reinitiate`, msisdn);
  }

  //file
  unbarBulk(file: any) {
    return this.http.post(`${this.base_url}/cbs-bar/bulk`, file);
  }

  productConfigAdd(file: any) {
    return this.http.post(`${this.base_url}/product-configuration-add`, file);
  }

  yetToIncorporate(file: any) {
    return this.http.post(`${this.base_url}/incorporate-msisdn`, file);
  }
}
