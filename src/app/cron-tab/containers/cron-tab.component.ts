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

  constructor(private fb: FormBuilder) {}

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
    this.getOutputHandle().valueChanges
      .subscribe(value => this.setValidation(value));
  }

  setValidation(handle: string): void {
    const file = this.getOutputHandleFile();
    const email = this.getOutputHandleEmail();
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


  get(parent: string, child: string) {
    return this.form.get(parent).get(child).value;
  }

  getMinutes() {
    return this.get('minutes', 'min');
  }

  getHours() {
    return this.get('hours', 'hours');
  }

  getDays() {
    return this.get('days', 'days');
  }

  getCommand() {
    return this.form.get('command').value;
  }

  getMonths() {
    return this.get('months', 'months');
  }

  getCronTab() {
    return this.form.get('cronTab').value;
  }

  getWeekdays() {
    return this.get('weekday', 'weekday');
  }

  getOutputHandle() {
    return this.get('handleOutput', 'handle');
  }

  getOutputHandleFile() {
    return this.get('handleOutput', 'file');
  }


  getOutputHandleEmail() {
    return this.get('handleOutput', 'email');
  }

  cronGen() {
    return   this.getMinutes() + ' '
      + this.getHours() + ' '
      + this.getDays() + ' '
      + this.getMonths() + ' '
      + this.getWeekdays() + ' '
      + this.getCommand() + ' ';
  }

  submit() {
    const handleOutput = this.getOutputHandle();
    switch (handleOutput) {
      case '>/dev/null 2>&1' : {
        const cron = this.cronGen() + handleOutput;
        this.form.patchValue({
          cronTab: cron
        });
        break;
      }
      case '>' : {
        const cron = this.cronGen()  + handleOutput + ' ' + this.getOutputHandleFile();
        this.form.patchValue({
          cronTab: cron
        });
        break;
      }

      case 'MAILTO=' : {
        const cron =
          handleOutput + '"' + this.getOutputHandleEmail() + '"' + ' ' + this.cronGen();
        this.form.patchValue({
          cronTab: cron
        });
        break;
      }
    }
    window.scroll(0, 0);
  }


}
