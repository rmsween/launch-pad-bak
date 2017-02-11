import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import 'rxjs/Rx';
@Injectable()
export class HttpService {

  constructor(private http: Http) { }
  getData() {
    return this.http.get('https://launch-pad-157621.firebaseio.com/title.json')
        .map((response: Response) => response.json());
  }
  sendData(launch: any) {
    const body = JSON.stringify(launch);
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.post('https://launch-pad-157621.firebaseio.com/launches.json', body, {
      headers: headers
    })
      .map((data: Response) => data.json() );
  }
  getLaunchesFromServer() {
    return this.http.get('https://launch-pad-157621.firebaseio.com/launches.json').map((response: Response) => response.json());
  }
}
