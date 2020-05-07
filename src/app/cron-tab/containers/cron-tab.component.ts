import { ChangeDetectionStrategy, Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-cron-tab',
  templateUrl: './cron-tab.component.html',
  styleUrls: [ './cron-tab.component.scss' ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CronTabComponent implements OnInit {
  form: FormGroup;
  @Output() cronTab = new EventEmitter<string>();

  constructor(private fb: FormBuilder) {
  }

  ngOnInit() {
    this.initForm();
    this.subscribeToValue();
  }

  initForm() {
    this.form = this.fb.group({
      command: [ '', Validators.required ],
      cronTab: '',
      handleOutput: this.fb.group({
        handle: '>/dev/null 2>&1',
        file: '',
        email: ''
      }),
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

  subscribeToValue() {
    this.form.get('handleOutput').get('handle').valueChanges
      .subscribe(value => this.setNotification(value));
  }

  setNotification(handle: string): void {

    const file = this.form.get('handleOutput').get('file');
    const email = this.form.get('handleOutput').get('email');

    switch (handle) {
      case '>': {
        file.enable();
        file.setValidators([ Validators.required ]);
        email.disable();
        email.clearValidators();
        break;
      }
      case 'MAILTO=': {
        email.enable();
        email.setValidators([ Validators.required, Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$') ]);
        file.disable();
        file.clearValidators();
        break;
      }
      case '>/dev/null 2>&1': {
        email.disable();
        file.disable();
        email.clearValidators();
        file.clearValidators();
        break;
      }
      default: {
        file.clearValidators();
        email.clearValidators();
        break;
      }
    }
  }

  submit() {
    const handleOutput = this.form.get('handleOutput').get('handle').value;
    switch (handleOutput) {
      case '>/dev/null 2>&1' : {
        const cron =
          this.form.get('minutes').get('min').value + ' '
          + this.form.get('hours').get('hours').value + ' '
          + this.form.get('days').get('days').value + ' '
          + this.form.get('months').get('months').value + ' '
          + this.form.get('weekday').get('weekday').value + ' '
          + this.form.get('command').value + ' '
          + handleOutput;
        this.form.patchValue({
          cronTab: cron
        });
        break;
      }
      case '>' : {
        const cron =
          this.form.get('minutes').get('min').value + ' '
          + this.form.get('hours').get('hours').value + ' '
          + this.form.get('days').get('days').value + ' '
          + this.form.get('months').get('months').value + ' '
          + this.form.get('weekday').get('weekday').value + ' '
          + this.form.get('command').value + ' '
          + handleOutput + ' '
          + this.form.get('handleOutput').get('file').value;
        this.form.patchValue({
          cronTab: cron
        });
        break;
      }

      case 'MAILTO=' : {
        const cron =
          handleOutput + '"' + this.form.get('handleOutput').get('email').value + '"' + ' '
          + this.form.get('minutes').get('min').value + ' '
          + this.form.get('hours').get('hours').value + ' '
          + this.form.get('days').get('days').value + ' '
          + this.form.get('months').get('months').value + ' '
          + this.form.get('weekday').get('weekday').value + ' '
          + this.form.get('command').value;
        this.form.patchValue({
          cronTab: cron
        });
        break;
      }
    }
    window.scroll(0, 0);
  }

}
