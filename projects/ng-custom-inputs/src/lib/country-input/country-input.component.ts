import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ISelectOption } from '../types/select-option.interface';
import { getData } from 'country-list';

@Component({
  selector: 'lib-country-input',
  templateUrl: './country-input.component.html',
  styleUrls: ['./country-input.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CountryInputComponent {
  @Input() form: FormGroup;
  @Input() name: string;
  @Input() placeholder: string;
  @Input() autoFormat: boolean = true;
  @Input() options = [];
  @Output() change: EventEmitter<any> = new EventEmitter();
  @Input() withSearchOption: boolean = true;
  @Input() formAttrName: string = 'formGroup';
  searchText: string = '';
  currentValue: string;
  currentLabel: string;
  currentOption: any;
  @Input() noOptionsAvailableMessage = 'no options available';

  constructor() {
    this.options = getData();
  }

  ngOnInit() {
    if(!this.form.value[this.name]) {
      this.currentOption = { name: "Senegal", code: "SN" };
      this.currentLabel = "Senegal";
      this.currentValue = "Senegal";
      this.form.controls[this.name].setValue(this.currentValue);
    } else {
      this.currentValue = this.form.value[this.name];
      this.currentLabel = this.getCurrentLabel();
    }
  }

  ngOnChanges() {
    this.currentLabel = this.getCurrentLabel();
  }

  changeValue(option: any) {
    const { name } = option;
    this.currentValue = name;
    this.form.controls[this.name].setValue(name);
    this.change.emit(this.currentValue);
    this.currentLabel = name;
    this.currentOption = option;
  }

  getCurrentLabel(): string {
    const found = this.options.find((option: any) => {
      if (String(option.name) === String(this.currentValue)) {
        return option;
      }
    });
    if(found) {
      this.currentOption = found;
      return found.name;
    }
    return null;
  }
   lowercase(str: string) {
    return str.toLowerCase();
   }
}
