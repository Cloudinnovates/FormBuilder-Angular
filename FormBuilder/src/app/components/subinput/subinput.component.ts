import { Component, OnInit, ViewContainerRef, ViewChild } from '@angular/core';
import { FormControl, FormArray } from '@angular/forms';
import { CONDITIONTYPES, INPUTTYPES, BOOLANSWERS } from '../../consts';
import { ComponentService } from 'src/app/services/component.service';
import { ValidationService } from 'src/app/services/validation.service';

@Component({
  selector: 'app-subinput',
  templateUrl: './subinput.component.html',
  styleUrls: ['./subinput.component.css']
})
export class SubinputComponent implements OnInit {

  @ViewChild('subViewContainerRef', { read: ViewContainerRef }) _viewContainerReference: ViewContainerRef;

  private answer: FormControl = new FormControl('', []);
  private condition: FormControl = new FormControl('', []);
  private inputType: FormControl = new FormControl('', []);
  private question: FormControl = new FormControl('', []);
  
  private components: any[] = [];
  private componentsReferences: any[] = [];
  private data: any[] = [];
  private parentComponentsReferences: any[] = [];

  private conditionTypes: any = CONDITIONTYPES;
  private parentInputType: string = '';
  private parentViewContainerReference: any;
  private selfIndex: number;

  public boolAnswers: any = BOOLANSWERS;
  public inputTypes: any = INPUTTYPES;
  public selfReference: SubinputComponent;

  constructor(private _componentService: ComponentService, private _validationService: ValidationService) { }

  ngOnInit() {
    this.components.length = 0;
    this.setConditionTypes();
    if (this.data.length > 0) {
      this.generateComponents();
    }
  }
  
  addComponent() {
    this.componentsReferences = this._componentService.addComponent('SubinputComponent', this._viewContainerReference, this.componentsReferences, this.inputType.value);
  }

  deleteComponent() {
    this._componentService.deleteComponent(this.selfIndex, this.parentViewContainerReference, this.parentComponentsReferences);
  }

  generateComponents() {
    this.componentsReferences = this._componentService.generateComponents('SubinputComponent', this._viewContainerReference, this.componentsReferences, this.data);
  }
  
  setData() {
    for (let i = 0; i < this.componentsReferences.length; i++) {
      this.components.push(this.componentsReferences[i].instance.setData());
    }
    return {
      index: this.selfIndex, question: this.question.value, answer: this.answer.value,
      inputType: this.inputType.value, condition: this.condition.value, components: this.components
    };
  }

  setConditionTypes() {
    if (this.parentInputType === 'Text' || this.parentInputType === 'Yes/No') {
      this.conditionTypes = this.conditionTypes.slice(0, 1);
    }
  }

  checkValidation() {
    for (let i = 0; i < this.componentsReferences.length; i++) {
      this.componentsReferences[i].instance.parentInputType = this.inputType.value;
      this.componentsReferences[i].instance.setConditionTypes();
    }
    return this._validationService.checkValidation(new FormArray(
      new Array<FormControl>(this.question, this.inputType, this.answer, this.condition)
    ));
  }
}
