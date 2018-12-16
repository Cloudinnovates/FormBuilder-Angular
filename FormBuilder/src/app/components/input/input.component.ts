import { Component, OnInit, ViewContainerRef, ViewChild } from '@angular/core';
import { SubinputComponent } from '../subinput/subinput.component';
import { FormControl, FormArray } from '@angular/forms';
import { INPUTTYPES } from '../../consts';
import { ComponentService } from 'src/app/services/component.service';
import { ValidationService } from 'src/app/services/validation.service';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent implements OnInit {

  @ViewChild('subViewContainerRef', { read: ViewContainerRef }) _viewContainerReference: ViewContainerRef;

    componentsReferences = [];
    inputTypes: any = INPUTTYPES;
    inputType = new FormControl('', []);
    question = new FormControl('', []);
    index: number = 0;

    selfIndex;
    parentComponentsReferences;
    selfReference: InputComponent;

    constructor(private _componentService: ComponentService, private _validationService: ValidationService) {}

    ngOnInit() {}

  addInput() {
    this.componentsReferences = this._componentService.addInput(SubinputComponent, this._viewContainerReference, this.componentsReferences, this.index, this.inputType.value);
    this.index = ++this.index;
  }

  deleteInput() {
    this._componentService.deleteInput(this.selfIndex, this.parentComponentsReferences[this.selfIndex - 1]._view.viewContainerParent.component._viewContainerReference, this.parentComponentsReferences);
  }

  checkValidation() {
    return this._validationService.checkValidation(new FormArray(
      new Array<FormControl>(this.question, this.inputType)
    ));
  }
}

