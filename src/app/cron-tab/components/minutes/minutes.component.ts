import { Component, Input, NgZone, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-minutes',
  templateUrl: './minutes.component.html'
})
export class MinutesComponent implements OnInit {
  @Input() parent: FormGroup;
  isRange = false;
  listMinuti: Array<number> = [];

  constructor(private zone: NgZone) {}
  ngOnInit() {
    this.zone.runOutsideAngular(() => {
      for (let i = 0; i < 60; i++) {
        setTimeout(() => this.listMinuti.push(i));
      }
      this.zone.run(() => {
        setTimeout(() => this.listMinuti, 500);
      });
    });
  }

  // onMinutiRange() {
  //   this.parent.get('minutes').patchValue({
  //     min: this.parent.get('minutes').get('range').value.toString(),
  //   });
  //   this.isRange = true;
  // }
  //
  // onMinutiRadio() {
  //   this.isRange = false;
  //   this.parent.get('minutes').patchValue({
  //     range: ''
  //   });
  // }

}
