import { Iinfo } from './Iinfo';
import { MonitorService } from './monitor.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { BaseChartDirective } from "ng2-charts";

@Component({
  selector: 'monitor',
  templateUrl: './monitor.component.html',
  styleUrls: ['./monitor.component.css']
})
export class MonitorComponent implements OnInit {
  @ViewChild(BaseChartDirective)
  public chart: BaseChartDirective

  info: Iinfo;
  memory: number
  cpuLoad: number
  disk: any
  network: any
  errMessage: string = "";
  monitores: string[];

  constructor(private monitorService: MonitorService) {
  }

  // lineChart
  public lineChartData: Array<any> = [
    { data: [], label: 'Memória' },
    { data: [], label: 'CPU' },
    // { data: [], label: 'DISK' },
    // { data: [], label: 'NET' },
  ];
  public lineChartLabels: Array<any> = [];
  public lineChartOptions: any = {
    responsive: true
  };
  public lineChartColors: Array<any> = [
    { // grey
      backgroundColor: 'rgba(148,159,177,0.2)',
      borderColor: 'rgba(148,159,177,1)',
      pointBackgroundColor: 'rgba(148,159,177,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(148,159,177,0.8)'
    },
    { // dark grey
      backgroundColor: 'rgba(77,83,96,0.2)',
      borderColor: 'rgba(77,83,96,1)',
      pointBackgroundColor: 'rgba(77,83,96,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(77,83,96,1)'
    }, { // dark grey
      backgroundColor: 'rgba(77,83,96,0.2)',
      borderColor: 'rgba(77,83,96,1)',
      pointBackgroundColor: 'rgba(77,83,96,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(77,83,96,1)'
    }, { // dark grey
      backgroundColor: 'rgba(77,83,96,0.2)',
      borderColor: 'rgba(77,83,96,1)',
      pointBackgroundColor: 'rgba(77,83,96,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(77,83,96,1)'
    }
  ];
  public lineChartLegend: boolean = true;
  public lineChartType: string = 'line';

  public addToChart(memory: number, cpu: number, disk: any, net: any): void {
    let _lineChartData = this.lineChartData;
    _lineChartData[0].data.push(memory);
    _lineChartData[1].data.push(cpu);
    // _lineChartData[2].data.push(disk);
    // _lineChartData[3].data.push(net);

    let quantidadePontos: number = 30;

    if (_lineChartData[0].data.length < quantidadePontos) {
      this.lineChartLabels.push('');
    }

    while (_lineChartData[0].data.length > quantidadePontos) {
      _lineChartData[0].data.shift();
      console.log(_lineChartData[0].data);
    }
    while (_lineChartData[1].data.length > quantidadePontos) {
      _lineChartData[1].data.shift();
    }

    this.lineChartData = _lineChartData;

    this.chart.chart.update();
  }

  // events
  public chartClicked(e: any): void {
    console.log(e);
  }

  public chartHovered(e: any): void {
    console.log(e);
  }

  ngOnInit() {

    setInterval(() => {

      this.monitorService.getInfo().subscribe(
        response => {
          this.info = response;
          // this.info.Network.rx_sec = this.info.Network.rx_sec / 1024
          this.memory = Math.trunc((response.Memory.active / response.Memory.total) * 100);
          this.cpuLoad = Math.trunc(response.CpuLoad.currentload);
          this.disk = (response.FsStats.tx_sec / 1024).toFixed(2);
          this.network = (response.Network.rx_sec / 1024).toFixed(2);
          this.addToChart(this.memory, response.CpuLoad.currentload, this.disk, this.network);
        }
      );


    }, 1000);

  }

}
