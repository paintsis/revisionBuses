import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RevisionBusesRoutingModule } from './revision-buses-routing.module';
import { EvaluacionComponent } from './components/evaluacion/evaluacion.component';
import { EvaluacionBusesComponent } from './pages/evaluacion-buses/evaluacion-buses.component';
import { TransporteComponent } from './components/transporte/transporte.component';
import { PrimeNgModule } from '../prime-ng/prime-ng.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    EvaluacionComponent,
    TransporteComponent,
    EvaluacionBusesComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    HttpClientModule,
    RevisionBusesRoutingModule,
    PrimeNgModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class RevisionBusesModule { }
