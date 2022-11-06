import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControlComponent } from './form-control/form-control.component';
import { ReactiveFormsModule } from '@angular/forms';
import { InputComponent } from './form-control/base/input.component';
import { TextInputModule } from './form-control/text/text-input.module';
import { 
  TimeInputModule, 
  CheckboxInputModule,
  RadioInputModule,
  RangeInputModule,
  SelectInputModule,
  PasswordInputModule,
  ImageUploadModule,
  ColorPickerModule,
  DatePickerModule,
  FileInputModule,
  TelInputModule
} from './form-control';



@NgModule({
  declarations: [
    FormControlComponent,
    InputComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  exports: [
    FormControlComponent,
    TextInputModule,
    CheckboxInputModule,
    RadioInputModule,
    RangeInputModule,
    SelectInputModule,
    PasswordInputModule,
    ImageUploadModule,
    ColorPickerModule,
    DatePickerModule,
    FileInputModule,
    TelInputModule,
    TimeInputModule
  ]
})
export class FormControlsModule { }
