import { Component, OnInit } from '@angular/core';
import { Respuesta } from '../../interfaces/Respuestas.interfaces';
import { Vehiculo } from '../../interfaces/Vehiculo.interface';
import { RevisionBusesService } from '../../services/revisionBuses.service';
import {Message,MessageService} from 'primeng/api';

interface Evaluacion {
  vehiculo? : Vehiculo;
  respuestaFinal?: Respuesta[];
}

@Component({
  selector: 'app-evaluacion-buses',
  templateUrl: './evaluacion-buses.component.html',
  providers: [MessageService]
})
export class EvaluacionBusesComponent implements OnInit {
  public bus!: Vehiculo | undefined;
  private answer! : Respuesta[]; 
  private encuesta : Evaluacion = {}; 
  msgs1!: Message[];
  resetForm : boolean = false;

  /**
   * 
   * @param _revisionBuses 
   */
  constructor(private _revisionBuses:RevisionBusesService, private messageService: MessageService) { this.msgs1 = [] }

  ngOnInit(): void {
  }

 /**
  * 
  * @param respuestas 
  */
  getRespuestas(respuestas: Respuesta[]){
    this.answer = respuestas;
    this.encuesta.respuestaFinal = this.answer as Respuesta[];
    this._revisionBuses.saveEvaluacion(this.encuesta).subscribe(
      resp=>{
        if(resp.code === 100){
          this.messageService.add({severity:'success', summary:'Success', detail:'Evaluacion guardada con exito'}); 
          setTimeout(() => {
            this.resetForm = true;
            this.bus = undefined;
          }, 4000);
        }
      },error=>{
        this.messageService.add({severity:'warn', summary: 'Warn', detail: error}); 

      }
    );
  }

  /**
   * 
   * @param vehiculo 
   */
  getVehiculo(vehiculo: Vehiculo){
    this.bus = vehiculo;
    this.encuesta.vehiculo = this.bus;
    this.resetForm = false;
  }

}
