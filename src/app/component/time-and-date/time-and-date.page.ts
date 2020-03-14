import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-time-and-date',
  templateUrl: './time-and-date.page.html',
  styleUrls: ['./time-and-date.page.scss'],
})
export class TimeAndDatePage implements OnInit {
  selectedRows: any[];
  scrollItems: any[];
  showScroll: boolean;
  constructor() { }

  ngOnInit() {
    this.scrollItems = [

    ];
  }

}
