import { Injectable, ComponentFactoryResolver, Type, ViewContainerRef } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ComponentService {

  constructor(private _componentFactoryResolver: ComponentFactoryResolver) { }

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

  addComponent(componentName: string, containerReference: ViewContainerRef, componentsReferences: any[], inputType?: string): any[] {

    const factories = Array.from(this._componentFactoryResolver['_factories'].keys());
    const factoryClass = <Type<any>>factories.find((x: any) => x.name === componentName);
    const factory = this._componentFactoryResolver.resolveComponentFactory(factoryClass);
    const componentReference = containerReference.createComponent(factory);
    const currentComponent = componentReference.instance;

    componentsReferences.push(componentReference);
    currentComponent.selfIndex = Date.now() + Math.random();
    currentComponent.selfReference = currentComponent;
    currentComponent.parentComponentsReferences = componentsReferences;
    currentComponent.parentInputType = inputType;
    currentComponent.parentViewContainerReference = containerReference;
    return componentsReferences;
  }

  deleteComponent(index: number, parentViewContainerRefernce: any, parentComponentsReferences: any) {

    parentViewContainerRefernce._view.component.componentsReferences = parentViewContainerRefernce._view.component.componentsReferences.filter(x =>
      x.instance.selfIndex !== index);

    const componentReference = parentComponentsReferences.filter(x =>
      x.instance.selfIndex === index)[0];

    parentViewContainerRefernce.remove(parentViewContainerRefernce.indexOf(componentReference));
  }
}
