import { Injectable } from '@angular/core';

@Injectable()
export class MonitorService {
  

  constructor() { }

  getMoniroes() {
    return ["CPU", "Memória"];
  }

  //   getMemory() {
  //     // var System: any;    
  //     let os = require("os");
  //   return  (os.freemem() / 1024) / 1024
  // }

}
