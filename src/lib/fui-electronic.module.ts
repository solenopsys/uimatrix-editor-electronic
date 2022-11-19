import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ElectronicViewsModule} from "./electronic-views.module";

export const SAMSUNG_SCALE = 5.5248;

@NgModule({
  imports: [CommonModule, ElectronicViewsModule],
})
export class FuiElectronicModule {
}
