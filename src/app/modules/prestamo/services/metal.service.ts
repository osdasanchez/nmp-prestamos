import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class MetalService {

  constructor(private _http: HttpClient) {
  }

  getMetales(token: string) {
    const url = `${this.getUrl()}`;
    let options = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      })

    };
    return this._http.get(url, options)
  }

  private getUrl() {
    return 'http://ec2-54-226-150-175.compute-1.amazonaws.com:8080/material/list'
  }

}
