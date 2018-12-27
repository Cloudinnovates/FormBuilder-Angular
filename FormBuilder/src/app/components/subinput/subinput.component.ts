import { Component, OnInit, ViewContainerRef, ViewChild, Input } from '@angular/core';
import { FormControl, FormArray } from '@angular/forms';
//import { CONDITIONTYPES, INPUTTYPES, BOOLANSWERS } from '../../consts';
import { ComponentService } from 'src/app/services/component.service';
import { ValidationService } from 'src/app/services/validation.service';

@Component({
  selector: 'app-subinput',
  templateUrl: './subinput.component.html',
  styleUrls: ['./subinput.component.css']
})
export class SubinputComponent implements OnInit {

  @ViewChild('subViewContainerRef', { read: ViewContainerRef }) _viewContainerReference: ViewContainerRef;
  @Input() inputData: any;

  private answer: FormControl = new FormControl('', []);

  private components: any[] = [];
  private componentsReferences: any[] = [];
  private data: any[] = [];
  
  public condition: FormControl = new FormControl('', []);
  public inputType: FormControl = new FormControl('', []);
  public question: FormControl = new FormControl('', []);
  


  constructor(private componentService: ComponentService, private _validationService: ValidationService) { }

  ngOnInit() {
    this.components.length = 0;
    //this.setConditionTypes();
    if (this.data.length > 0) {
      this.generateComponents();
    }
  }
  
  addComponent() {
    this.componentsReferences = this.componentService.addComponent('SubinputComponent', this._viewContainerReference, this.componentsReferences);
  }

  deleteComponent() {
    // this._componentService.deleteComponent(this.selfIndex, this.parentViewContainerReference, this.parentComponentsReferences);
  }

  generateComponents() {
    this.componentsReferences = this.componentService.generateComponents('SubinputComponent', this._viewContainerReference, this.componentsReferences, this.data);
  }
  
  // setData() {
  //   for (let i = 0; i < this.componentsReferences.length; i++) {
  //     this.components.push(this.componentsReferences[i].instance.setData());
  //   }
  //   return {
  //     index: this.selfIndex, question: this.question.value, answer: this.answer.value,
  //     inputType: this.inputType.value, condition: this.condition.value, components: this.components
  //   };
  // }

  // setConditionTypes() {
  //   if (this.parentInputType === 'Text' || this.parentInputType === 'Yes/No') {
  //     this.conditionTypes = this.conditionTypes.slice(0, 1);
  //   }
  // }

  checkValidation() {
    // return this._validationService.checkValidation(new FormArray(
    //   new Array<FormControl>(this.question, this.inputType, this.answer, this.condition)
    // ));
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
}
