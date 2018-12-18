import { Injectable, ComponentFactoryResolver, Type, ViewContainerRef } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ComponentService {

  constructor(private _componentFactoryResolver: ComponentFactoryResolver) { }

  addInput(componentName: string, containerReference: ViewContainerRef, componentsReferences: any[], index: number, inputType?: string): any[] {
const factories = Array.from(this._componentFactoryResolver['_factories'].keys());
const factoryClass = <Type<any>>factories.find((x: any) => x.name === componentName);
const factory = this._componentFactoryResolver.resolveComponentFactory(factoryClass);
const componentReference = containerReference.createComponent(factory);
const currentComponent = componentReference.instance;

    componentsReferences.push(componentReference);
    currentComponent.selfIndex = ++index;
    currentComponent.selfReference = currentComponent;
    currentComponent.parentComponentsReferences = componentsReferences;
    currentComponent.parentInputType = inputType;

    return componentsReferences;
  }

  deleteInput(index: number, containerReference: ViewContainerRef, componentsReferences: any[]): any[] {
    const componentRef = componentsReferences.filter(x => x.instance.selfIndex === index)[0];
    containerReference.remove(containerReference.indexOf(componentRef));
    componentsReferences = componentsReferences.filter(x => x.instance.index !== index);

    return componentsReferences;
  }
}
