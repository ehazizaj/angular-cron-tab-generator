import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-months',
  templateUrl: './months.component.html'
})
export class MonthsComponent {
  @Input() parent: FormGroup;
  isRange = false;
  listMonths = [
    { id: '1', name: 'January' },
    { id: '2', name: 'February' },
    { id: '3', name: 'March' },
    { id: '4', name: 'April' },
    { id: '5', name: 'May' },
    { id: '6', name: 'June' },
    { id: '7', name: 'July' },
    { id: '8', name: 'August' },
    { id: '9', name: 'September' },
    { id: '10', name: 'October' },
    { id: '11', name: 'November' },
    { id: '12', name: 'December' },
    ];
  onRange() {
    this.isRange = true;
    this.parent.get('months').patchValue({
      months: this.parent.get('months').get('range').value.toString(),
    });
  }

  onRadio() {
    this.isRange = false;
    this.parent.get('months').patchValue({
      range: ''
    });
  }
}
