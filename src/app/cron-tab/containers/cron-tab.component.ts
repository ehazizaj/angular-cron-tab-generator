import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-cron-tab',
  templateUrl: './cron-tab.component.html',
  styleUrls: [ './cron-tab.component.scss' ]
})
export class CronTabComponent implements OnInit {
  form: FormGroup;
  @Output() cronTab = new EventEmitter<string>();
  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.initForm();
  }

  initForm() {
    this.form = this.fb.group({
      command: ['', Validators.required],
      cronTab: '',
      minutes: this.fb.group({
        min: '*',
        range: ''
      }),
      hours: this.fb.group({
        hours: '*',
        range: ''
      }),
      days: this.fb.group({
        days: '*',
        range: ''
      }),
      months: this.fb.group({
        months: '*',
        range: ''
      }),
      weekday: this.fb.group({
        weekday: '*',
        range: ''
      }),
    });
  }

  submit() {
    const cron =
      this.form.get('minutes').get('min').value + ' '
      + this.form.get('hours').get('hours').value + ' '
      + this.form.get('days').get('days').value + ' '
      + this.form.get('months').get('months').value + ' '
      + this.form.get('weekday').get('weekday').value + ' '
      + this.form.get('command').value;
    this.form.patchValue({
      cronTab: cron
    });
  }
}
