import { Component, OnInit } from '@angular/core';
import { ModalController, NavParams,AlertController } from '@ionic/angular';
import { ActivatedRoute, Router } from '@angular/router'; 
import { UsuariosService } from '../services/usuarios.service';


import { User } from '../models/user';

@Component({
  selector: 'app-edit-users',
  templateUrl: './edit-users.page.html',
  styleUrls: ['./edit-users.page.scss'],
})
export class EditUsersPage implements OnInit {

    token:string;
    // usuario:User;
    data: any; 
    usuarios:User;

  constructor(private modalController: ModalController,
              private navParams: NavParams,
              public route: ActivatedRoute, 
              public router: Router,
              public _us:UsuariosService,
              private alertController: AlertController) { 

                this.route.queryParams.subscribe(params => {
                  if (params && params.special) {
                  this.usuarios = this.data = JSON.parse(params.special);
             
                  }
        
                  this.token = this._us.token;

            
            
                 
                });
                
              }

  ngOnInit() {
 
  }


  cerrar_modal(){
    this.modalController.dismiss({
      'dismissed': true 
    });
  }

  editarUsuario(formuario){

    // console.log(formuario.form.value.id);

    this._us.editar_usuario(this.token,this.usuarios,formuario.form.value.id)
          .subscribe((resp)=>{
            if(this._us.status == 'success'){
              // console.log("usuario editado");
              this.usuario_editado();
              this.cerrar_modal();

            }else{
              console.log("Hubo un error al editar");
            }
          })
        
      
  }

  async usuario_editado() {
    const alert = await this.alertController.create({
      header: 'Usuario editado',
      buttons: ['OK']
    });
 
    await alert.present();
  }

 
  }

 


