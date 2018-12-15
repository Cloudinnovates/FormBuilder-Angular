import { Injectable, ComponentFactoryResolver, Type, ViewContainerRef } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ComponentService {

  constructor(private _componentFactoryResolver: ComponentFactoryResolver) { }

  addInput(component: Type<any>, containerReference: ViewContainerRef, componentsReferences: any[], index: number, inputType?: string): any[] {
    const componentFactory = this._componentFactoryResolver.resolveComponentFactory(component);
    const componentRef = containerReference.createComponent(componentFactory);
    const currentComponent = componentRef.instance;

    componentsReferences.push(componentRef);
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
