import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-command',
  templateUrl: './command.component.html',
  styleUrls: ['./command.component.scss']
})
export class CommandComponent {
  @Input() parent: FormGroup;

  required(name: string) {
    return this.parent.get(name).hasError('required') && this.parent.get(name).touched;
  }


}
