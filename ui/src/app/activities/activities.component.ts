import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-activities',
  templateUrl: './activities.component.html',
  styleUrls: ['./activities.component.scss']
})
export class ActivitiesComponent implements OnInit {

  clicksOnInit = localStorage.getItem('clicks');

  constructor() { }

  ngOnInit(): void {
  }

  clicked() {
    const clicks = localStorage.getItem('clicks');

    clicks != null
      ? localStorage.setItem('clicks', (parseInt(clicks) + 1) + '')
      : localStorage.setItem('clicks', '1');
  }
}
