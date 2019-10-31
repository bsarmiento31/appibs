import { Component, OnInit } from '@angular/core';
import { ModalController, AlertController } from '@ionic/angular';
import { Equipo } from '../models/equipo';
import { EquiposService }  from '../services/equipos.service';
import { UsuariosService } from '../services/usuarios.service';


@Component({
  selector: 'app-registrar-equipos',
  templateUrl: './registrar-equipos.page.html',
  styleUrls: ['./registrar-equipos.page.scss'],
})
export class RegistrarEquiposPage implements OnInit {

  public equipo:Equipo;

  constructor(public modalController: ModalController,  
              private alertController: AlertController,
              private _es:EquiposService,
              public _us:UsuariosService) { 

                this.equipo = new Equipo(1,'','','','');
              }

  ngOnInit() {
  }

  cerrar_modal(){
    this.modalController.dismiss({
      'dismissed': true
    });
  }

  registrar_equipo(registerEquipoForm){
      this._es.registrar(this.equipo)
        .subscribe(()=>{
          if(this._es.status == 'success'){
            // console.log('Usuario Registrado');
            this.equipo = new Equipo(1,'','','','');
            this.equipo_creado();
            this.cerrar_modal();
            registerEquipoForm.reset();
          }else{
            console.log('Error');
          }
          
        })
     
  }

  //Crear Equipo
  async equipo_creado() {
    const alert = await this.alertController.create({
      header: 'Equipo Creado',
      buttons: ['OK']
    });
 
    await alert.present();
  }

 

}
