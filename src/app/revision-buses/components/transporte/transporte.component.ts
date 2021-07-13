import { Component, EventEmitter, Input, OnInit, Output, OnChanges } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Vehiculo } from '../../interfaces/Vehiculo.interface';
import { RevisionBusesService } from '../../services/revisionBuses.service';
import {Message,MessageService} from 'primeng/api';

interface TipoPlaca {
  name: string,
  code: string
}


@Component({
  selector: 'app-transporte',
  templateUrl: './transporte.component.html'
})
export class TransporteComponent implements OnInit {
  @Output() evePlaca = new EventEmitter<Vehiculo>();
  @Input() isReset : boolean;
  msgs1!: Message[];

  public tipoPlaca: TipoPlaca[] = [
    {name:'P', code:'P'},
    {name:'M', code:'M'},
    {name:'C', code:'C'},
    {name:'A', code:'A'},
    {name:'U', code:'U'},
    {name:'CD', code:'CD'},
    {name:'MI', code:'MI'},
    {name:'DIS', code:'DIS'},
  ];

  public vehiculo! : Vehiculo;
  frmPlaca : FormGroup
  constructor(private _revisionBuses:RevisionBusesService ) { 
    this.isReset = false;
    this.frmPlaca = new FormGroup({
      tipoPlaca: new FormControl('C',[Validators.required]),
      numeroPlaca: new FormControl('',[Validators.required])
    });
  }

  ngOnInit(): void {
    this.msgs1 = [];
    this.vehiculo = {    
      tipo_placa:   '',
      numero_placa: '',
      empresa:      '',
      chasis:       '',
      motor:        '',
      num_registro: '',
      pasajeros:    0,
      tipo_ruta:    '',
      nombre_ruta:  '',
      permiso:      '',
      estado:       ''}
  }

  ngOnChanges() : void {
    if(this.isReset){
      this.frmPlaca.reset();
      this.vehiculo = {    
        tipo_placa:   '',
        numero_placa: '',
        empresa:      '',
        chasis:       '',
        motor:        '',
        num_registro: '',
        pasajeros:    0,
        tipo_ruta:    '',
        nombre_ruta:  '',
        permiso:      '',
        estado:       ''}
    }
  }

  searchPlaca(){
    //console.log(this.frmPlaca.valid);
    if(this.frmPlaca.valid){
      let placa = `${this.frmPlaca.value['tipoPlaca']}${this.frmPlaca.value['numeroPlaca']}`;
      this._revisionBuses.getVehiculo(placa.toUpperCase()).subscribe(resp=>{
        if(resp.permiso === undefined){
          this.msgs1=[{severity:'error', summary:'Error', detail:'Numero de Placa no existe'}];
        }else{
          this.vehiculo = resp;
          this.isReset = false;
          this.msgs1=[];
          this.evePlaca.emit(this.vehiculo);
        }});
    }
  }
}
