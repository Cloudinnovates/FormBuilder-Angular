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
      const childComponentReference = this.createChildComponentReference(componentName, containerReference);
      this.setDataForChildComponent(childComponentReference, data[i]);
      componentsReferences.push(childComponentReference);
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
    childComponentReference.instance.inputData = {
      selfIndex: data ? data.index ? data.index : Date.now() + Math.random() : Date.now() + Math.random(), 
      parentInputType: data ? data.parentInputType : null,
      answer: data ? data.answer : null,
      question: data ? data.question : null,
      condition: data ? data.condition : null,
      inputType: data ? data.inputType : null,
      components: data ? data.components : null
    };
  }

  addComponent(componentName: string, containerReference: ViewContainerRef, componentsReferences: any[], data?: any): any[] {
    const childComponentReference = this.createChildComponentReference(componentName, containerReference);
    this.setDataForChildComponent(childComponentReference, data);
    componentsReferences.push(childComponentReference);
    return componentsReferences;
  }
}
