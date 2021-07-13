import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { Vehiculo } from '../interfaces/Vehiculo.interface';
import { Preguntas } from '../interfaces/Preguntas.interfaces';
import { RespuestaSave } from '../interfaces/SaveEncuesta.interfaces';

@Injectable({
  providedIn: 'root'
})
export class RevisionBusesService {
  urlBase = environment.baseUrl;

  constructor(private _http: HttpClient) { }

  getVehiculo(placa: string):Observable<Vehiculo>{
    return this._http.post<Vehiculo>(`${this.urlBase}/bus`, {placa})
  }

  getPreguntas():Observable<Preguntas>{
    return this._http.get<Preguntas>(`${this.urlBase}/preguntas`);
  }

  saveEvaluacion(evaluacion:any):Observable<RespuestaSave> {
    return this._http.post<RespuestaSave>(`${this.urlBase}/evaluacion`,evaluacion);
  }
}
