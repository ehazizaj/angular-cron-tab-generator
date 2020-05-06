import { Component, Input, NgZone, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-days',
  templateUrl: './days.component.html'
})
export class DaysComponent implements OnInit {
  @Input() parent: FormGroup;
  isRange = false;
  listDays: Array<number> = [];
  constructor(private zone: NgZone) {}
  ngOnInit() {
    this.zone.runOutsideAngular(() => {
      for (let i = 1; i < 32; i++) {
        setTimeout(() => this.listDays.push(i));
      }
      this.zone.run(() => {
        setTimeout(() => this.listDays, 500);
      });
    });
  }

}
