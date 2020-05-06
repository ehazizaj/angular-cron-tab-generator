import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-months',
  templateUrl: './months.component.html'
})
export class MonthsComponent {
  @Input() parent: FormGroup;
  isRange = false;
}
