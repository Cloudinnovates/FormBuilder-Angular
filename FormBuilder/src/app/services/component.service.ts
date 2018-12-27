import { Injectable, ComponentFactoryResolver, Type, ViewContainerRef, EventEmitter, Output } from '@angular/core';
import { ComponentRef } from '@angular/core/src/render3';

@Injectable({
  providedIn: 'root'
})
export class ComponentService {

  @Output() parentInputType = new EventEmitter();
  @Output() childIndex = new EventEmitter();
  constructor(private _componentFactoryResolver: ComponentFactoryResolver) { }

  setParentInputType(type: string, childrensComponents: any[]) {
    let childrensComponentsIndexes = [];
    childrensComponents.forEach(element => {
      childrensComponentsIndexes.push(element.instance.inputData.selfIndex);
    });
    this.parentInputType.emit({type, childrensComponentsIndexes});
  }

  deleteComponent(index: number) {
    this.childIndex.emit(index);
  }

  generateComponents(componentName: string, containerReference: ViewContainerRef, componentsReferences: any[], data: any) {
    for (let i = 0; i < data.length; i++) {
      const factories = Array.from(this._componentFactoryResolver['_factories'].keys());
      const factoryClass = <Type<any>>factories.find((x: any) => x.name === componentName);
      const factory = this._componentFactoryResolver.resolveComponentFactory(factoryClass);
      const componentReference = containerReference.createComponent(factory);
      const currentComponent = componentReference.instance;

      let index = data[i].index;
      componentsReferences.push(componentReference);
      currentComponent.selfIndex = index;

      let filteredData = data.filter(() => currentComponent.selfIndex === index);

      currentComponent.question.value = filteredData[i].question;
      currentComponent.inputType.value = filteredData[i].inputType;

      if (filteredData[i].parentInputType) {
        currentComponent.parentInputType = filteredData[i].parentInputType;
      }

      if (filteredData[i].condition) {
        currentComponent.condition.value = filteredData[i].condition;
      }

      if (filteredData[i].answer) {
        currentComponent.answer.value = filteredData[i].answer;
      }

      if (filteredData[i].components) {
        currentComponent.data = filteredData[i].components;
      }

      currentComponent.selfReference = currentComponent;
      currentComponent.parentComponentsReferences = componentsReferences;
      currentComponent.parentViewContainerReference = containerReference;
    }
    return componentsReferences;
  }

  createChildComponentReference(componentName: string, containerReference: ViewContainerRef): any {
    const factories = Array.from(this._componentFactoryResolver['_factories'].keys());
    const factoryClass = <Type<any>>factories.find((x: any) => x.name === componentName);
    const factory = this._componentFactoryResolver.resolveComponentFactory(factoryClass);
    return containerReference.createComponent(factory);
  }

  setDataForChildComponent(childComponentReference: ComponentRef<any>, data: any) {
    console.log(data);
    childComponentReference.instance.inputData = {selfIndex: Date.now() + Math.random(), parentInputType: data ? data.parentInputType : null};
  }

  addComponent(componentName: string, containerReference: ViewContainerRef, componentsReferences: any[], data?: any): any[] {
    const childComponentReference = this.createChildComponentReference(componentName, containerReference);
    this.setDataForChildComponent(childComponentReference, data);
    componentsReferences.push(childComponentReference);
    return componentsReferences;
  }
}
