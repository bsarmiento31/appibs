import { Injectable } from '@angular/core';
import { URL_SERVICIOS } from '../../config/url.servicios';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { AlertController,Platform,LoadingController } from '@ionic/angular';
import { Storage } from '@ionic/storage';

import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {
  token:string;
  status:string;
  usuarios:any[] = [];

  constructor(public _http: HttpClient,
              private alertController: AlertController,
              public loadingCtrl: LoadingController,
              private platform: Platform,
              private storage: Storage) {

                this.cargar_storage();
                this.todos_usuarios();

              }

  ingresar(user){
    
    let json = JSON.stringify(user);
		let params = 'json='+json;
    let headers = new HttpHeaders().set('Content-type','application/x-www-form-urlencoded');
    let url = URL_SERVICIOS + "/login"; 
    return this._http.post( url, params,{ headers:headers })
    .pipe( 
      map( (resp:any) => {

          console.log(resp);

          if( resp.status == 'error' ){
              this.contrasena_invalida();
              this.status = 'error';
              // console.log("Contraseña Invalida");
          }else{
            
            this.cargar_pagina();
            this.token = resp;
            
            this.status = 'success';
            
            this.guardar_storage();

          }

      })
  );
  }

  registrar(user){
    let json = JSON.stringify(user);
		let params = 'json='+json;
    let headers = new HttpHeaders().set('Content-type','application/x-www-form-urlencoded');
    let url = URL_SERVICIOS + "/registro"; 
    return this._http.post( url, params,{ headers:headers })
    .pipe( 
      map( (resp:any) => {

          console.log(resp);

          if( resp.status == 'error' ){
              this.usuario_duplicado(); 
              this.status = 'error';
          }else{
            
            // this.usuario_creado();
            this.status = 'success';
          }

      })
  );
  }
//Usuario Duplicado
  async usuario_duplicado() {
    const alert = await this.alertController.create({
      header: 'Error al registrarse',
      message: 'Usuario Duplicado',
      buttons: ['OK']
    });
 
    await alert.present();
  }

  //Mostrar Usuarios
  todos_usuarios(){
    let promesa = new Promise( (resolve,reject) =>{

      let url = URL_SERVICIOS + "/usuarios";

      this._http.get( url )
                .subscribe( (data:any)=>{

                  if(data.length == 0){
                    console.log('Ya no hay mas registros');
                    resolve(false);
                    return;
                  }
  
                  if( data.error ){
     
                  }else{
                    // console.log(data);

                    this.usuarios.push( ...data.usuarios);
                  }
                  resolve(false);
  
                })

    });

    return promesa;
      
  
  }
 
  public salir(){
    this.token = null;
    this.guardar_storage();
  }
//Contraseña invalida del login
  async contrasena_invalida( ) {
    const alert = await this.alertController.create({
      header: 'Error al ingresar',
      message: 'Contraseña o usuario invalido',
      buttons: ['OK']
    });
 
    await alert.present();
  }
//Cargar pagina del login
  async cargar_pagina() {
    const loading = await this.loadingCtrl.create({
      message: 'Un Momento',
      duration: 1000
    });
    await loading.present();

    const { role, data } = await loading.onDidDismiss();

    console.log('Loading dismissed!');
  }

  private guardar_storage(){
  
    if( this.platform.is("cordova") ){
    
      //Dispositivo
        this.storage.set('token',this.token);

    }else{
      //Computador
     
        localStorage.setItem("token",this.token);
      
     

    }


  }

  cargar_storage(){

    let promesa = new Promise(( resolve,reject )=>{

        if(this.platform.is("cordova")){
          
          this.storage.ready()
                .then(() =>{
                  this.storage.get("token").then( token=>{
                      
                    if( token ){
                        this.token = token;
                    }
                    resolve();
                  })

                })

                

        }else{
          if(localStorage.getItem("token")){
              //Existe items en el local storage
              this.token =  localStorage.getItem("token");
          }

          resolve();

        }

      });

      return promesa;

  }

}
