// import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs';
import { tap, filter } from 'rxjs/operators';
import { Http, Headers, Response } from '@angular/http';


import 'rxjs/add/operator/map';
import { Injectable, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

// import { Observable } from 'rxjs';
 
// import { HttpService } from '../services/http-service';
import { Router, RouterModule, ActivatedRoute } from '@angular/router';
import 'rxjs/add/operator/map';
import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  decoded;
  constructor(private https: HttpClient, private _https: Http) {

  }
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'

    })
    
  }
 
  get_user() {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this._https.get('https://api.cube.cechinel.com.br:8080/CuboMaximoWebApp/rest/auth/getTag/' +'CUBO-4ddfb88b-6244-4708-9441-663e947f2c93', { headers: headers });
}
  time;
  exp_time;
  token;
  login(username: string, password: string) {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    // headers.append('ClientTag', 'd9e64666-3699-4eee-9451-bc1e7f9e92dd');
    return this._https.post('https://api.cube.cechinel.com.br:8080/CuboMaximoWebApp/rest/auth/',
      JSON.stringify({ username: username, password: password }), {headers:headers})
      .pipe(tap(response => {
        let decodedToken = response['token'];

    let user = { userid: decodedToken.user_id, username: decodedToken.username, token: response['token'] };
 
    

      localStorage.setItem('loged_in', '1');

      localStorage.setItem('currentUser', user.token);
     
  }))
  }
// Sample GET request
  // getNetworkRequestStatus(): Observable<any> {
  //   return this.http.get(this.baseUrl + 'network/request-status/')
  //     .pipe(
  //       tap(_ => {
  //       }, error => {
  //         console.log(error);
  //       })
  //     );
  // }
  //
  //

  // Sample post
  // ApproveRequest(id): Observable<any> {
  //   const s = this.http.post('network/joining-request-list/' + id + '/approve/', {})
  //     .pipe(
  //       tap(_ => {
  //       }, error => {
  //         this.handleResponseError(error)
  //       })
  //     );
  //   return s;
  // }
}
