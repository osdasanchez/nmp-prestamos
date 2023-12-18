import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private _http: HttpClient) {
  }


  getToken() {
    let body = new URLSearchParams();
    let authorizationData = 'Basic ' + btoa('client-id' + ':' + 'client-secret');
    const url = `${this.getUrl()}`;
    body.set('grant_type', 'client_credentials');

    let options = {
      headers: new HttpHeaders({
        'Content-Type': 'application/x-www-form-urlencoded',
        'Authorization': authorizationData
      })

    };


    return this._http.post(url, body.toString(), options);
  }

  private getUrl() {
    return 'http://ec2-23-22-155-52.compute-1.amazonaws.com:9000/oauth2/token'
  }

}
