import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-days',
  templateUrl: './days.component.html'
})
export class DaysComponent implements OnInit {
  @Input() parent: FormGroup;
  isRange = false;
  listDays: Array<number> = [];
  constructor() {}
  ngOnInit() {
    for (let i = 1; i < 32; i++) {
      this.listDays.push(i);
    }
  }
  onRange() {
    this.isRange = true;
    this.parent.get('days').patchValue({
      days: this.parent.get('days').get('range').value.toString(),
    });
  }

  onRadio() {
    this.isRange = false;
    this.parent.get('days').patchValue({
      range: ''
    });
  }

}
