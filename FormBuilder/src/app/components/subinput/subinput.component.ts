import { Component, OnInit, ViewContainerRef, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import { CONDITIONTYPES, INPUTTYPES } from '../../consts';
import { ComponentService } from 'src/app/services/component.service';

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

  selfIndex: number;
  parentComponentsReferences;
  parentInputType;
  selfReference: SubinputComponent;

  constructor(private _componentService: ComponentService) {}

  ngOnInit() {
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
}
