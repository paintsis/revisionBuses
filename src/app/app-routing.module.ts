import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path:'', redirectTo:'evaluacion/buses', pathMatch:'full'},
  {path:'evaluacion',loadChildren:()=>import('./revision-buses/revision-buses.module').then(m=>m.RevisionBusesModule)},
  {path:'**', redirectTo:'evaluacion/buses'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
