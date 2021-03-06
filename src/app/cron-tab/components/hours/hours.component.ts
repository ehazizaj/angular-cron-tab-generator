import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-hours',
  templateUrl: './hours.component.html'
})
export class HoursComponent implements OnInit {
  @Input() parent: FormGroup;
  isRange = false;
  listHours: Array<number> = [];
  constructor() {}

  ngOnInit() {
    for (let i = 0; i < 24; i++) {
      this.listHours.push(i);
    }
  }

  onRange() {
    this.isRange = true;
    this.parent.get('hours').patchValue({
      hours: this.parent.get('hours').get('range').value.toString(),
    });
  }

  onRadio() {
    this.isRange = false;
    this.parent.get('hours').patchValue({
      range: ''
    });
  }

}
