import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ElementViewComponent} from './element-view/element-view.component';
import {ElementLayoutComponent} from './element-layout/element-layout.component';
import {PartSymbolComponent} from './part-symbol/part-symbol.component';
import {ElementModuleComponent} from './element-module/element-module.component';


@NgModule({
    declarations: [
        ElementViewComponent,
        ElementLayoutComponent,
        PartSymbolComponent,
        ElementModuleComponent
    ],
    imports: [
        CommonModule
    ], exports: [
        ElementViewComponent,
        ElementLayoutComponent,
        PartSymbolComponent, ElementModuleComponent
    ]
})
export class ElectronicViewsModule {
}
