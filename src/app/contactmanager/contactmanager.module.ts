import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



import { FormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-Layout';
import { MaterialModuleModule } from 'src/app/shared/material-module/material-module.module';


import { ContactmanagerRoutingModule } from './contactmanager-routing.module';
import { SidenavComponent } from './Components/sidenav/sidenav.component';
import { MainContentComponent } from './Components/main-content/main-content.component';
import { ToolbarComponent } from './Components/toolbar/toolbar.component';
import { ContactmanagerComponent } from 'src/app/contactmanager/contactmanager/contactmanager.component';


@NgModule({
  declarations: [
MainContentComponent,
SidenavComponent,
ToolbarComponent,
ContactmanagerComponent



],
  imports: [
    CommonModule,
    ContactmanagerRoutingModule,
    FormsModule,
    FlexLayoutModule,
    MaterialModuleModule

  ]
})
export class ContactmanagerModule { }
