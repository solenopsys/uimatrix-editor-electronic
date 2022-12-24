import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ElementViewComponent} from "./element-view/element-view.component";
import {ElementLayoutComponent} from "./element-layout/element-layout.component";
import {PartSymbolComponent} from "./part-symbol/part-symbol.component";
import {ElementModuleComponent} from "./element-module/element-module.component";
import {DeclaredService} from "@solenopsys/uimatrix-utils";

export const SAMSUNG_SCALE = 5.5248;

const components = [
  ElementViewComponent,
  ElementLayoutComponent,
  PartSymbolComponent,
  ElementModuleComponent
];

@NgModule({
  declarations: components,
  imports: [
    CommonModule
  ], exports: [
    ElementViewComponent,
    ElementLayoutComponent,
    PartSymbolComponent, ElementModuleComponent
  ]
})
export class UIElectronicModule {
  constructor(private ds: DeclaredService) {
    ds.addComps("@solenopsys/uimatrix-editor-electronic", components)
  }
}
