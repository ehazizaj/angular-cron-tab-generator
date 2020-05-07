import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-command-handle',
  templateUrl: './command-handle.component.html',
  styleUrls: ['./command-handle.component.scss']
})
export class CommandHandleComponent {
  @Input() parent: FormGroup;

  required(name: string) {
    return this.parent.get('handleOutput').get(name).hasError('required') && this.parent.get('handleOutput').get(name).touched;
  }

  pattern(name: string) {
    return this.parent.get('handleOutput').get(name).hasError('pattern') && this.parent.get('handleOutput').get(name).touched;
  }

}
