import { Component, OnInit, ViewContainerRef, ViewChild } from '@angular/core';
import { FormControl, FormArray } from '@angular/forms';
import { CONDITIONTYPES, INPUTTYPES } from '../../consts';
import { ComponentService } from 'src/app/services/component.service';
import { ValidationService } from 'src/app/services/validation.service';

@Component({
  selector: 'app-subinput',
  templateUrl: './subinput.component.html',
  styleUrls: ['./subinput.component.css']
})
export class SubinputComponent implements OnInit {

  @ViewChild('subViewContainerRef', { read: ViewContainerRef }) _viewContainerReference: ViewContainerRef;

  componentsReferences = [];
  conditionTypes = CONDITIONTYPES;
  inputTypes = INPUTTYPES;
  inputType = new FormControl('', []);
  condition = new FormControl('', []);
  index = 0;
  question = new FormControl('', []);
  answer = new FormControl('', []);

  selfIndex: number;
  parentComponentsReferences;
  parentInputType;
  selfReference: SubinputComponent;

  constructor(private _componentService: ComponentService, private _validationService: ValidationService) {}

  ngOnInit() {
    console.log(this.parentInputType);
    this.setConditionTypes();
   }

addInput() {
    this.componentsReferences = this._componentService.addInput(SubinputComponent, this._viewContainerReference, this.componentsReferences, this.index, this.inputType.value);
    this.index = ++this.index;
}

deleteInput() {
 this._componentService.deleteInput(this.selfIndex, this.parentComponentsReferences[this.selfIndex - 1]._view.viewContainerParent.component._viewContainerReference, this.parentComponentsReferences);
}

setConditionTypes() {
  if (this.parentInputType === 'Text' || this.parentInputType === 'Yes/No') {
    this.conditionTypes = this.conditionTypes.slice(0, 1);
  }
}

checkValidation() {
  return this._validationService.checkValidation(new FormArray(
    new Array<FormControl>(this.question, this.inputType, this.answer, this.condition)
  ));
}

}
