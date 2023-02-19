import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgCustomInputsModule } from 'projects/ng-custom-inputs/src/public-api';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FilterPipeModule } from 'projects/ng-custom-inputs/src/lib/pipes/filter-pipe/filter-pipe.module';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    NgCustomInputsModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    FilterPipeModule,
    FlexLayoutModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
