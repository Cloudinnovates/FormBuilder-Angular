import { Component, ViewContainerRef, ViewChild, OnInit, OnDestroy } from '@angular/core';
import { SubinputComponent } from '../subinput/subinput.component';
import { FormControl, FormArray } from '@angular/forms';
import { INPUTTYPES, INPUTS } from '../../consts';
import { ComponentService } from 'src/app/services/component.service';
import { ValidationService } from 'src/app/services/validation.service';
import { DataBaseService } from 'src/app/services/data-base.service';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent implements OnInit {

  @ViewChild('subViewContainerRef', { read: ViewContainerRef }) _viewContainerReference: ViewContainerRef;


  private componentsReferences: ViewContainerRef[] = [];
  private inputType: FormControl = new FormControl('', []);
  private question: FormControl = new FormControl('', []);
  private index: number = 0;
  private inputs: any = INPUTS;

  public selfIndex: number;
  public parentComponentsReferences: any[] = [];
  public selfReference: InputComponent;
  public inputTypes: any = INPUTTYPES;


  constructor(private _componentService: ComponentService, private _validationService: ValidationService, private _dataBaseService: DataBaseService) { }

  addInput() {
    this.componentsReferences = this._componentService.addInput('SubinputComponent', this._viewContainerReference, this.componentsReferences, this.index, this.inputType.value);
    ++this.index;
  }

  deleteInput() {
    this._componentService.deleteInput(this.selfIndex, this.parentComponentsReferences[this.selfIndex - 1]._view.viewContainerParent.component._viewContainerReference, this.parentComponentsReferences);
  }

  checkValidation() {
    return this._validationService.checkValidation(new FormArray(
      new Array<FormControl>(this.question, this.inputType)
    ));
  }

  ngOnInit() {
    window.onbeforeunload = () => {
      this.setData();
    }
    this.getData();
  }

  async getData() {
    const data = await this._dataBaseService.loadData(await this._dataBaseService.openDataBase());
    console.log(data);
  }

  async setData() {
    const inputs = this.inputs = { index: this.selfIndex, test: this.index + 1 };
    console.log(inputs);
    if (this.getData())
      await this._dataBaseService.updateData(await this._dataBaseService.openDataBase(), inputs);
    await this._dataBaseService.saveData(await this._dataBaseService.openDataBase(), inputs);
  }
}

