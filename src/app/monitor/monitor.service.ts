import { Iinfo } from './Iinfo';
import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

@Injectable()
export class MonitorService {

  constructor(private http: Http) { }

  getInfo(): Observable<Iinfo> {
    return this.http.get("http://127.0.0.1:3000/api/info/memory", { headers: this.getHeaders()}).map((res: Response) => <Iinfo> res.json());

  }

  private getHeaders() {
    // I included these headers because otherwise FireFox
    // will request text/html
    let headers = new Headers();
    headers.append('Accept', 'application/json');
    return headers;
  }

}
