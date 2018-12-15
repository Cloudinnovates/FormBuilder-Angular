import { Component, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { InputComponent } from './components/input/input.component';
import { ComponentService } from './services/component.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'FormBuilder';
  @ViewChild('viewContainerRef', { read: ViewContainerRef }) _viewContainerReference: ViewContainerRef;

    componentsReferences = [];
    index = 0;

    constructor(private _componentService: ComponentService) {
    }

  ngOnInit() { }

  addInput() {
    this.componentsReferences = this._componentService.addInput(InputComponent, this._viewContainerReference, this.componentsReferences, this.index);
    this.index = ++this.index;
  }
}
