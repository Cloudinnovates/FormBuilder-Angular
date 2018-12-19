import { Component, ViewContainerRef, ViewChild, OnInit, Output, EventEmitter } from '@angular/core';
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
  @Output() destroy: EventEmitter<any> = new EventEmitter<any>();

  private inputType: FormControl = new FormControl('', []);
  private question: FormControl = new FormControl('', []);

  private components: any[] = [];
  private componentsReferences: any[] = [];
  private data: any[] = [];
  private parentComponentsReferences: any[] = [];

  private parentViewContainerReference: any;
  private selfIndex: number;

  public inputTypes: any = INPUTTYPES;
  public selfReference: InputComponent;

  constructor(private _componentService: ComponentService, private _validationService: ValidationService) { }

  ngOnInit() {
    this.components.length = 0;
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
    return { index: this.selfIndex, question: this.question.value, inputType: this.inputType.value, components: this.components };
  }

  checkValidation() {
    for (let i = 0; i < this.componentsReferences.length; i++) {
      this.componentsReferences[i].instance.parentInputType = this.inputType.value;
      this.componentsReferences[i].instance.setConditionTypes();
    }
    return this._validationService.checkValidation(new FormArray(
      new Array<FormControl>(this.question, this.inputType)
    ));
  }
}

