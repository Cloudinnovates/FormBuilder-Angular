import { Component, ViewChild, ViewContainerRef, OnInit, ComponentFactoryResolver, Type } from '@angular/core';
import { InputComponent } from './components/input/input.component';
import { ComponentService } from './services/component.service';
import { DataBaseService } from './services/data-base.service';
import { STATE } from './consts';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  @ViewChild('viewContainerRef', { read: ViewContainerRef }) _viewContainerReference: ViewContainerRef;

  private componentsReferences: any[] = [];
  private index: number = 0;
  public title = 'FormBuilder';
  public state: any =  STATE;

  constructor(private _componentService: ComponentService, private _dataBaseService: DataBaseService, private _componentFactoryResolver: ComponentFactoryResolver) {
  }

  addInput() {
    this.componentsReferences = this._componentService.addInput('InputComponent', this._viewContainerReference, this.componentsReferences, this.index);
    ++this.index;
    for (let i = 0; i < this.componentsReferences.length; i++) {
      console.log(this.componentsReferences[i].instance.selfIndex);
    }
  }

   ngOnInit() {
     // console.log(this.test(this.componentsReferences, this.index));
   }
}
