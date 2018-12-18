import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import { InputComponent } from './components/input/input.component';
import { SubinputComponent } from './components/subinput/subinput.component';

import {MatCardModule} from '@angular/material/card';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';
import {MatButtonModule} from '@angular/material/button';
import {MatRadioModule} from '@angular/material/radio';

import { ComponentService } from './services/component.service';
import { ValidationService } from './services/validation.service';
import { DataBaseService } from './services/data-base.service';

@NgModule({
  declarations: [
    AppComponent,
    InputComponent,
    SubinputComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatButtonModule,
    MatRadioModule
  ],
  providers: [ComponentService, ValidationService, DataBaseService],
  bootstrap: [AppComponent],
  entryComponents: [InputComponent, SubinputComponent]
})
export class AppModule { }
