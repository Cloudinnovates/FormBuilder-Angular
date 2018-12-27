import { Component, ViewContainerRef, ViewChild, OnInit, Output, EventEmitter, Input } from '@angular/core';
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
  @Input() inputData: any;
  
  private selfIndex = 0;
  private components: any[] = [];
  private componentsReferences: any[] = [];
  private data: any[] = [];
  
  public inputType: FormControl = new FormControl('', []);
  public question: FormControl = new FormControl('', []);

  public inputTypes = Object.values(INPUTTYPES);

  constructor(private componentService: ComponentService, private _validationService: ValidationService) { }

  ngOnInit() {
    this.selfIndex = this.inputData.selfIndex;
    console.log('INDEX=' + this.inputData.selfIndex + ' ' + this.selfIndex);
    this.componentService.childIndex.subscribe(event => this.deleteChildComponent(event));
    this.components.length = 0;
    if (this.data.length > 0) {
      this.generateComponents();
    }
  }

  addComponent() {
    this.componentsReferences = this.componentService.addComponent('SubinputComponent', this._viewContainerReference, this.componentsReferences);
  }

  deleteSelf() {
    this.componentService.deleteComponent(this.selfIndex)
  }

  deleteChildComponent(index: number) {
    let componentReference = this.componentsReferences.filter(x => x.instance.inputData.selfIndex === index)[0];
    if(componentReference) {
    this._viewContainerReference.remove(this._viewContainerReference.indexOf(componentReference));
    this.componentsReferences = this.componentsReferences.filter(x => x.instance.inputData.selfIndex !== index);
    }
  }

  generateComponents() {
    this.componentsReferences = this.componentService.generateComponents('SubinputComponent', this._viewContainerReference, this.componentsReferences, this.data);
  }

  // setData() {
  //   for (let i = 0; i < this.componentsReferences.length; i++) {
  //     this.components.push(this.componentsReferences[i].instance.setData());
  //   }
  //   return { index: this.selfIndex, question: this.question.value, inputType: this.inputType.value, components: this.components };
  // }

  checkValidation() {
    return this._validationService.checkValidation(new FormArray(
      new Array<FormControl>(this.question, this.inputType)
    ));
  }
}

