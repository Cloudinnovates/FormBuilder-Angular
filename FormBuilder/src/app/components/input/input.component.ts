import { Component, ViewContainerRef, ViewChild, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { FormControl, FormArray } from '@angular/forms';
import { INPUTTYPES } from '../../consts';
import { ComponentService } from 'src/app/services/component.service';
import { ValidationService } from 'src/app/services/validation.service';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss']
})
export class InputComponent implements OnInit {

  @ViewChild('subViewContainerRef', { read: ViewContainerRef }) _viewContainerReference: ViewContainerRef;
  @Input() inputData: any;

  private childComponentsToSave: any[] = [];
  private componentsReferences: any[] = [];
  
  public inputType: FormControl = new FormControl('', []);
  public question: FormControl = new FormControl('', []);

  public inputTypes = Object.values(INPUTTYPES);

  constructor(private componentService: ComponentService, private _validationService: ValidationService) { }

  ngOnInit() {
    this.componentService.childIndex.subscribe(event => this.deleteChildComponent(event));
    this.childComponentsToSave.length = 0;
    this.question.setValue(this.inputData.question);
    this.inputType.setValue(this.inputData.inputType);
    if (this.inputData.components) {
      this.generateComponents();
    }
  }

  addComponent() {
    this.componentsReferences = this.componentService.addComponent('SubinputComponent', this._viewContainerReference, this.componentsReferences, {parentInputType: this.inputType.value});
  }

  deleteSelf() {
    this.componentService.deleteComponent(this.inputData.selfIndex)
  }

  deleteChildComponent(index: number) {
    let componentReference = this.componentsReferences.filter(x => x.instance.inputData.selfIndex === index)[0];
    if(componentReference) {
    this._viewContainerReference.remove(this._viewContainerReference.indexOf(componentReference));
    this.componentsReferences = this.componentsReferences.filter(x => x.instance.inputData.selfIndex !== index);
    }
  }

  generateComponents() {
    for (let i = 0; i < this.inputData.components.length; i++) {
      this.inputData.components[i] = {...this.inputData.components[i], ...{parentInputType: this.inputData.inputType}};
    };
    this.componentsReferences = this.componentService.generateComponents('SubinputComponent', this._viewContainerReference, this.componentsReferences, this.inputData.components);
  }

  setData() {
    for (let i = 0; i < this.componentsReferences.length; i++) {
      this.childComponentsToSave.push(this.componentsReferences[i].instance.setData());
    }
    return { index: this.inputData.selfIndex, question: this.question.value, inputType: this.inputType.value, components: this.childComponentsToSave };
  }

  checkValidation() {
    this.inputType.valueChanges.subscribe(event => this.componentService.setParentInputType(event, this.componentsReferences));
    return this._validationService.checkValidation(new FormArray(
      new Array<FormControl>(this.question, this.inputType)
    ));
  }
}

