import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http: HttpClient) {

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
  //   const s = this.http.post(this.baseUrl + 'network/joining-request-list/' + id + '/approve/', {})
  //     .pipe(
  //       tap(_ => {
  //       }, error => {
  //         this.handleResponseError(error)
  //       })
  //     );
  //   return s;
  // }
}
