import { MonitorService } from './monitor.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'monitor',
  templateUrl: './monitor.component.html',
  styleUrls: ['./monitor.component.css']
})
export class MonitorComponent implements OnInit {

  memoria: number;
  monitores: string[];

  constructor(private monitorService: MonitorService) {
    this.memoria = 0
    this.monitores = this.monitorService.getMoniroes();
  }

  mudarValor(){
    // while (0 == 0) {
      this.memoria = +1;
    // }
  }

  ngOnInit() {
  }

}
