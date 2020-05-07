import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-week-days',
  templateUrl: './week-days.component.html'
})
export class WeekDaysComponent {
  @Input() parent: FormGroup;
  isRange = false;
  listWeekDays = [
    { id: '0', name: 'Sunday' },
    { id: '1', name: 'Monday' },
    { id: '2', name: 'Tuesday' },
    { id: '3', name: 'Wednesday' },
    { id: '4', name: 'Thursday' },
    { id: '5', name: 'Friday' },
    { id: '6', name: 'Saturday' },
  ];

  onRange() {
    this.isRange = true;
    this.parent.get('weekday').patchValue({
      weekday: this.parent.get('weekday').get('range').value.toString(),
    });
  }

  onRadio() {
    this.isRange = false;
    this.parent.get('weekday').patchValue({
      range: ''
    });
  }
}
