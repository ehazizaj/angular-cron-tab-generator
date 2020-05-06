import { Component, Input, NgZone, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-hours',
  templateUrl: './hours.component.html'
})
export class HoursComponent implements OnInit {
  @Input() parent: FormGroup;
  isRange = false;
  listHours: Array<number> = [];
  constructor(private zone: NgZone) {}

  ngOnInit() {
    this.zone.runOutsideAngular(() => {
      for (let i = 0; i < 24; i++) {
        setTimeout(() => this.listHours.push(i));
      }
      this.zone.run(() => {
        setTimeout(() => this.listHours, 500);
      });
    });
  }

}
