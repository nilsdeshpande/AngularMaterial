import { NgModule } from '@angular/core';
import { MatButtonModule, MatCheckboxModule, MatIconModule}  from '@angular/Material'
@NgModule({
  declarations: [],
  imports: [
 MatButtonModule,
 MatCheckboxModule,
 MatIconModule
 
  ],
  exports:
  [
    MatButtonModule,
    MatCheckboxModule,
    MatIconModule
  ]
})
export class MaterialModuleModule { }
