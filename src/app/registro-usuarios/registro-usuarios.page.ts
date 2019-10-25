import { Component, OnInit } from '@angular/core';
import { ModalController, AlertController,LoadingController } from '@ionic/angular';
import { User } from '../models/user';
import { UsuariosService } from '../services/usuarios.service';
import { Router, NavigationExtras } from '@angular/router';

@Component({
  selector: 'app-registro-usuarios',
  templateUrl: './registro-usuarios.page.html',
  styleUrls: ['./registro-usuarios.page.scss'],
})
export class RegistroUsuariosPage implements OnInit {

  public user:User;

  constructor(public modalController: ModalController,
              public _us:UsuariosService,
              public router: Router,
              public loadingCtrl: LoadingController,
              private alertController: AlertController,
              ) { 
    this.user = new User(1,'','','','','');
  }

  ngOnInit() {
  }

  cerrar_modal(){
    this.modalController.dismiss({
      'dismissed': true
    });
  }

  registrar( form ){
    this._us.registrar(this.user)
      .subscribe( ()=> {

        if(this._us.status == 'success'){
          this.usuario_creado();
          this.cerrar_modal();
          this.user = new User(1,'ROLE_USER','','','','');
          form.reset();
        }

      });
  }

  //Usuario creado
  async usuario_creado() {
    const alert = await this.alertController.create({
      header: 'Usuario Creado',
      buttons: ['OK']
    });
 
    await alert.present();
  }

  //Cargar pagina del registro
  async cargar_pagina_registro() {
    const loading = await this.loadingCtrl.create({
      message: 'Un Momento',
      duration: 1000
    });
    await loading.present();

    const { role, data } = await loading.onDidDismiss();

    console.log('Loading dismissed!');
  }

}
