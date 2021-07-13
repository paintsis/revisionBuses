import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Preguntas } from '../../interfaces/Preguntas.interfaces';
import { Respuesta } from '../../interfaces/Respuestas.interfaces';

import { RevisionBusesService } from '../../services/revisionBuses.service';

@Component({
  selector: 'app-evaluacion',
  templateUrl: './evaluacion.component.html',
  styleUrls:['./evaluacion.component.scss']
})
export class EvaluacionComponent implements OnInit {
  public preguntas! : Preguntas;
  public respuestas: Respuesta[] = [];
  public frmEcuesta!: Array<FormControl>;
  controles : any = {};

 
  @Output() sendRespuesta = new EventEmitter<Respuesta[]>()
  constructor(private _revisionBuses:RevisionBusesService) {
   }

  ngOnInit(): void {

    this._revisionBuses
    .getPreguntas()
    .subscribe(preguntas=>{
      this.preguntas = preguntas;
      //controles : any = {};
      this.preguntas.preguntas.forEach(element => {
        this.controles[`pregunta${ element.number}`] = new FormControl('');
      });
      //console.log(this.controles);
    });
  }

  getRespuesta(numero: number, pregunta:string, respuesta:string){
    let verificador = -10;
    verificador = this.respuestas.findIndex(pnumero => pnumero.numero === numero);
    let item : Respuesta = {numero,pregunta,respuesta};
    if(verificador > -1){
      this.respuestas[verificador] = item;
    }else{
      this.respuestas.push(item);
    }
 }

 indexRespuesta(indice: number){
   console.log(indice);
 }

 enviarResp(){
   this.sendRespuesta.emit(this.respuestas);
 }

 isRespuesta(numero: number) : string{
   if(this.respuestas[numero - 1].respuesta){
    return this.respuestas[numero - 1].respuesta;
   }else{
     return '';
   }
 }
 get enableButton(){
   if(this.respuestas.length === this.preguntas.preguntas.length){
     return true
   }else{
     return false
   }
   //return true
 }


}
