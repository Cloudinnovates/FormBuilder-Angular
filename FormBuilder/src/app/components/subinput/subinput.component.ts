import { Component, OnInit, ViewContainerRef, ViewChild, Input } from '@angular/core';
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
  @Input() inputData: any;

  private answer: FormControl = new FormControl('', []);

  private components: any[] = [];
  private componentsReferences: any[] = [];
  private data: any[] = [];
  
  public condition: FormControl = new FormControl('', []);
  public inputType: FormControl = new FormControl('', []);
  public question: FormControl = new FormControl('', []);
  
  public inputTypes = Object.values(INPUTTYPES);
  public conditionTypes = Object.values(CONDITIONTYPES);
  public boolAnswers = Object.values(BOOLANSWERS);

  constructor(private componentService: ComponentService, private _validationService: ValidationService) { }

  ngOnInit() {
    this.components.length = 0;
    this.componentService.parentInputType.subscribe(event => this.checkIndexes(event.type, event.childrensComponentsIndexes));
    //this.setConditionTypes();
    // if (this.data.length > 0) {
    //   this.generateComponents();
    // }
    this.checkIndexes(this.inputData.parentInputType);
  }
  
  addComponent() {
    this.componentsReferences = this.componentService.addComponent('SubinputComponent', this._viewContainerReference, this.componentsReferences, {parentInputType: this.inputType.value});
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

  checkIndexes(type: string, indexes?: []) {
    if (indexes) {
      indexes.forEach(element => {
        if (element === this.inputData.selfIndex) 
          this.setConditionTypes(type);
        
      });
    }
    else {
      this.setConditionTypes(type);
    }
  }

  setConditionTypes(type: string) {
    this.inputData.parentInputType = type;
    this.answer.setValue('');
    if (type === 'Text' || type === 'Yes/No') 
    this.conditionTypes = this.conditionTypes.slice(0, 1);
  else
    this.conditionTypes = Object.values(CONDITIONTYPES);
  }

  checkValidation() {
    this.inputType.valueChanges.subscribe(event => this.componentService.setParentInputType(event, this.componentsReferences));
    return this._validationService.checkValidation(new FormArray(
      new Array<FormControl>(this.question, this.inputType, this.answer, this.condition)
    ));
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
