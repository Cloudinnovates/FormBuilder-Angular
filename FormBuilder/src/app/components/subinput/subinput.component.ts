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

  private componentsReferences: ViewContainerRef[] = [];
  private conditionTypes: any = CONDITIONTYPES;
  private inputType: FormControl = new FormControl('', []);
  private condition: FormControl = new FormControl('', []);
  private question: FormControl = new FormControl('', []);
  private answer: FormControl = new FormControl('', []);
  private index: number = 0;

  public selfIndex: number;
  public parentComponentsReferences: any[] = [];
  private parentInputType: string;
  public selfReference: SubinputComponent;
  public inputTypes: any = INPUTTYPES;

  constructor(private _componentService: ComponentService, private _validationService: ValidationService) {}

  ngOnInit() {
    this.setConditionTypes();
    this.conditionTypes.add({value: 'aaa'});
    console.log(this.conditionTypes);
   }

addInput() {
    this.componentsReferences = this._componentService.addInput('SubinputComponent', this._viewContainerReference, this.componentsReferences, this.index, this.inputType.value);
    ++this.index;
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
