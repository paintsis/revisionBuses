import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EvaluacionBusesComponent } from './pages/evaluacion-buses/evaluacion-buses.component';

const routes: Routes = [
  {path:'', children:[
    {path:'buses',component:EvaluacionBusesComponent}
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RevisionBusesRoutingModule { }
