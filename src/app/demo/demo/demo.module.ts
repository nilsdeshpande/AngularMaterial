import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DemoRoutingModule } from './demo-routing.module';
import { MaterialModuleModule } from '../../shared/material-module/material-module.module';
import { ButtonsComponent } from '../buttons/buttons.component';
import { FlexboxComponent } from '../flexbox/flexbox.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [ButtonsComponent,FlexboxComponent],
  imports: [
    FormsModule,
    CommonModule,
    DemoRoutingModule,
    MaterialModuleModule
  ]
})
export class DemoModule { }
