import { MonitorService } from './monitor.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'monitor',
  templateUrl: './monitor.component.html',
  styleUrls: ['./monitor.component.css']
})
export class MonitorComponent implements OnInit {

  memoria: any;
  monitores: string[];

  constructor(private monitorService: MonitorService) {
    this.memoria = 0
    this.monitores = this.monitorService.getMoniroes();
  }

  ngOnInit() {

    setInterval(() => {this.memoria = this.monitorService.getMemory()}, 100);
  }

}
