import { Component, ViewChild, ViewContainerRef, OnInit } from '@angular/core';
import { ComponentService } from './services/component.service';
import { DataBaseService } from './services/data-base.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  @ViewChild('viewContainerRef', { read: ViewContainerRef }) viewContainerReference: ViewContainerRef;

  private components: any[] = [];
  private componentsReferences: any[] = [];
  private data: any = 0;
  private openedDataBase: any;

  public title = 'FormBuilder';

  constructor(private componentService: ComponentService, private dataBaseService: DataBaseService) { }


  ngOnInit() {
    this.componentService.childIndex.subscribe(event => this.deleteChildComponent(event));
    this.components.length = 0;

    window.onbeforeunload = () => {
      for (let i = 0; i < this.componentsReferences.length; i++) {
        this.components.push(this.componentsReferences[i].instance.setData());
      }
      this.addOrUpdateData(this.openedDataBase);
    }

    this.openDataBase().then(result => {
      this.openedDataBase = result;
    }).then(() => {
      this.loadData(this.openedDataBase).then(result => {
        this.data = result;
      }).finally(() => {
        if(this.data && this.data.data.components.length > 0) {
          this.generateComponents();
        }
      });
    });
  }

  addComponent() {
    this.componentsReferences = this.componentService.addComponent('InputComponent', this.viewContainerReference, this.componentsReferences);
  }

  deleteChildComponent(index: number) {
    let componentReference = this.componentsReferences.filter(x => x.instance.inputData.selfIndex === index)[0];
    if(componentReference) {
    this.viewContainerReference.remove(this.viewContainerReference.indexOf(componentReference));
    this.componentsReferences = this.componentsReferences.filter(x => x.instance.inputData.selfIndex !== index);
    }
  }
  
  generateComponents() {
    this.componentsReferences = this.componentService.generateComponents('InputComponent', this.viewContainerReference, this.componentsReferences, this.data.data.components);
  }

  async openDataBase() {
    return await this.dataBaseService.openDataBase();
  }

  async loadData(openedDataBase) {
    return await this.dataBaseService.loadData(openedDataBase);
  }

  async addOrUpdateData(openedDataBase) {
    await this.dataBaseService.addOrUpdateData(openedDataBase, { components: this.components });
  }
}