import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'monitor',
  templateUrl: './monitor.component.html',
  styleUrls: ['./monitor.component.css']
})
export class MonitorComponent implements OnInit {

  title: string;
  monitores: string[] = ["CPU", "Memória"]

  constructor() {
    this.title = "Meu monitor"
  }

  ngOnInit() {
  }

}
