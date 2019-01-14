import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';



import { ToolbarComponent } from 'src/app/contactmanager/Components/toolbar/toolbar.component';
import { SidenavComponent } from 'src/app/contactmanager/Components/sidenav/sidenav.component';
import { MainContentComponent } from 'src/app/contactmanager/Components/main-content/main-content.component';
import { ContactmanagerComponent } from 'src/app/contactmanager/contactmanager/contactmanager.component';

const routes: Routes = [


 // {path:'main-content', component:MainContentComponent},
  //{path:'sidenav', component:SidenavComponent},
  //{path:'toolbar', component:ToolbarComponent},
  {path:' ', component:ContactmanagerComponent , children:[{path:' ', component:MainContentComponent}]},
  {path:'**', redirectTo:' '}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ContactmanagerRoutingModule { }
