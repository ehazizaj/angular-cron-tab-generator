import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-minutes',
  templateUrl: './minutes.component.html'
})
export class MinutesComponent implements OnInit {
  @Input() parent: FormGroup;
  isRange = false;
  listMinuti: Array<number> = [];

  constructor() {}
  ngOnInit() {
      for (let i = 0; i < 60; i++) {
       this.listMinuti.push(i);
      }
  }
  onRange() {
    this.isRange = true;
    this.parent.get('minutes').patchValue({
      min: this.parent.get('minutes').get('range').value.toString(),
    });
  }

  onRadio() {
    this.isRange = false;
    this.parent.get('minutes').patchValue({
      range: ''
    });
  }

}
