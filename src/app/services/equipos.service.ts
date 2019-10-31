import { Injectable } from '@angular/core';
import { URL_SERVICIOS } from '../../config/url.servicios';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Storage } from '@ionic/storage';
import { Platform } from '@ionic/angular';
import { Equipo } from '../models/equipo';



@Injectable({ 
  providedIn: 'root'
})
export class EquiposService {

  token:string; 
  status:string;
  equipos:Equipo[] = [];
  ids:string;
  // equipos: ArchivoSubir[]= [];

  constructor(public _http: HttpClient,
              private storage: Storage,
              private platform: Platform) { 
                this.cargar_storage();
                this.todos_equipos();
              }

  registrar(equipo){
    let json = JSON.stringify(equipo);
		let params = 'json='+json;
    let headers = new HttpHeaders().set('Content-type','application/x-www-form-urlencoded').set('Authorization',this.token);
    let url = URL_SERVICIOS + "/equipos"; 
    return this._http.post( url, params,{ headers:headers })
    .pipe( 
      map( (resp:any) => {

          console.log(resp);

          if( resp.status == 'error' ){
              this.status = 'error';
          }else{            
            // this.usuario_creado();
            this.status = 'success';
            this.guardar_storage();
          }

      })
  );
  }

  //Mostrar Equipos

    //Mostrar Usuarios
    todos_equipos(){
      let promesa = new Promise( (resolve,reject) =>{
  
        let url = URL_SERVICIOS + "/equipos";
  
        this._http.get( url )
                  .subscribe( (data:any)=>{

                    // data.pop();
  
                    if(data.length == 0){
                      console.log('Ya no hay mas registros');
                      resolve(false);
                      return;
                    }


    
                    if( data.error ){
       
                    }else{
                      // console.log(data);
  
                      this.equipos.push( ...data.equipos);
                  //     for( let i = data.length-1; i>= 0 ; i-- ){
                  //       let post = data[i];
                  //       this.equipos.push(...post);
                  // }

                  console.log(this.equipos);
                    }
                    resolve(false);
    
                  })
  
      });
  
      return promesa;
        
    
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
