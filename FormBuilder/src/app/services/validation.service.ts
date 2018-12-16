import { Injectable } from '@angular/core';

import { FormArray } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class ValidationService {

  constructor() { }

  checkValidation(formControls: FormArray) {
    return formControls.valid;
  }
}
