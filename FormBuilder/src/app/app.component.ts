import { Component, ViewChild, ViewContainerRef, OnInit, ComponentFactoryResolver, Type, OnChanges } from '@angular/core';
import { InputComponent } from './components/input/input.component';
import { ComponentService } from './services/component.service';
import { DataBaseService } from './services/data-base.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  @ViewChild('viewContainerRef', { read: ViewContainerRef }) _viewContainerReference: ViewContainerRef;

  private components: any[] = [];
  private componentsReferences: any[] = [];
  private data: any = 0;

  public title = 'FormBuilder';

  constructor(private _componentService: ComponentService, private _dataBaseService: DataBaseService) { }


  ngOnInit() {
    this.components.length = 0;

    window.onbeforeunload = () => {
      for (let i = 0; i < this.componentsReferences.length; i++) {
        this.components.push(this.componentsReferences[i].instance.setData());
      }
      this.saveData();
    }

    this.loadData().then(result => {
      this.data = result;
    }).finally(() => {
      this.generateComponents();
    });
  }

  addComponent() {
    this.componentsReferences = this._componentService.addComponent('InputComponent', this._viewContainerReference, this.componentsReferences);
  }

  generateComponents() {
    this.componentsReferences = this._componentService.generateComponents('InputComponent', this._viewContainerReference, this.componentsReferences, this.data.data.components);
  }

  async loadData() {
    return await this._dataBaseService.loadData(await this._dataBaseService.openDataBase());
  }

  async saveData() {
    await this._dataBaseService.updateData(await this._dataBaseService.openDataBase(), { components: this.components });
  }
}
