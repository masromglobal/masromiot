import { Placeholder } from '@angular/compiler/src/i18n/i18n_ast';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss'],
})
export class InputComponent  {
@Input() type: string;
@Input() placeholder: string;

  constructor() { }

 
}
