import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-week-days',
  templateUrl: './week-days.component.html'
})
export class WeekDaysComponent {
  @Input() parent: FormGroup;
  isRange = false;

}
