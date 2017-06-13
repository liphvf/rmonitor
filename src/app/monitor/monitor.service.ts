import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class MonitorService {

  constructor(private http: Http) { }

  getMoniroes() {
    return ["CPU", "Memória"];
  }

  getMemory() {
    return this.http.get("http://localhost:3000/api/info/memory");

  }

  //   getMemory() {
  //     // var System: any;    
  //     let os = require("os");
  //   return  (os.freemem() / 1024) / 1024
  // }

}
