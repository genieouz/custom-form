import { NgModule } from '@angular/core';
import { NgCustomInputsComponent } from './ng-custom-inputs.component';
import { CountryInputComponent } from './country-input/country-input.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DropdownModule } from './directives/dropdown/dropdown.module';
import { MatIconModule } from '@angular/material/icon';
import { FilterPipeModule } from './pipes/filter-pipe/filter-pipe.module';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';


@NgModule({
  declarations: [
    NgCustomInputsComponent,
    CountryInputComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    DropdownModule,
    MatIconModule,
    FilterPipeModule,
    FlexLayoutModule
  ],
  exports: [
    NgCustomInputsComponent,
    CountryInputComponent
  ]
})
export class NgCustomInputsModule { }
