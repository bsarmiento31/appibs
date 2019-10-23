import { Injectable } from '@angular/core';
import { URL_SERVICIOS } from '../../config/url.servicios';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { AlertController,Platform,LoadingController } from '@ionic/angular';

import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {
  token:string;
  id_usuario:string;
  status:string;

  constructor(public _http: HttpClient,
              private alertController: AlertController,
              public loadingCtrl: LoadingController) { }

  ingresar(user){
    
    let json = JSON.stringify(user);
		let params = 'json='+json;
    let headers = new HttpHeaders().set('Content-type','application/x-www-form-urlencoded');
    let url = URL_SERVICIOS + "/login"; 
    return this._http.post( url, params,{ headers:headers })
    .pipe( 
      map( (resp:any) => {

          // let data_resp = resp.json();

          console.log(resp);

          if( resp.status == 'error' ){
              this.contrasena_invalida();
              this.status = 'error';
              // console.log("Contraseña Invalida");
          }else{
            
            this.cargar_pagina();
            this.token = resp.token;
            this.id_usuario = resp.id_usuario;
            
            this.status = 'success';
            // console.log("Ingreso exitoso");
            //Guardar Storage
            // this.guardar_storage();

          }

      })
  );
  }

  async contrasena_invalida( ) {
    const alert = await this.alertController.create({
      header: 'Error al ingresar',
      message: 'Contraseña o usuario invalido',
      buttons: ['OK']
    });

    await alert.present();
  }

  async cargar_pagina() {
    const loading = await this.loadingCtrl.create({
      message: 'Un Momento',
      duration: 2000
    });
    await loading.present();

    const { role, data } = await loading.onDidDismiss();

    console.log('Loading dismissed!');
  }

}
