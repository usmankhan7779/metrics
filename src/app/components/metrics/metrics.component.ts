import { Component, OnInit } from '@angular/core';
declare var $: any;
@Component({
  selector: 'app-metrics',
  templateUrl: './metrics.component.html',
  styleUrls: ['./metrics.component.scss']
})
export class MetricsComponent implements OnInit {

  constructor() { }

  ngOnInit() {

      // $( '#datepicker' ).datepicker();
  }

}
