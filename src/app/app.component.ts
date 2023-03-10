import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'custom-form';
  form: FormGroup;
  constructor() {
    this.form = new FormGroup({
      country: new FormControl()
    })
  }
}
