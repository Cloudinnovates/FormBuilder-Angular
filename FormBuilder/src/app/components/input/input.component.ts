import { Component, OnInit, ViewContainerRef, ViewChild } from '@angular/core';
import { SubinputComponent } from '../subinput/subinput.component';
import { FormControl } from '@angular/forms';
import { INPUTTYPES } from '../../consts';
import { ComponentService } from 'src/app/services/component.service';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent implements OnInit {

  @ViewChild('subViewContainerRef', { read: ViewContainerRef }) _viewContainerReference: ViewContainerRef;

    componentsReferences = [];
    inputTypes = INPUTTYPES;
    inputType = new FormControl('', []);
    index = 0;

    selfIndex;
    parentComponentsReferences;
    selfReference: InputComponent;

    constructor(private _componentService: ComponentService) {}

    ngOnInit() {}

  addInput() {
    this.componentsReferences = this._componentService.addInput(SubinputComponent, this._viewContainerReference, this.componentsReferences, this.index, this.inputType.value);
    this.index = ++this.index;
  }

  deleteInput() {
    this._componentService.deleteInput(this.selfIndex, this.parentComponentsReferences[this.selfIndex - 1]._view.viewContainerParent.component._viewContainerReference, this.parentComponentsReferences);
  }
}

