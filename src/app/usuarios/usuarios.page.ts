import { Component, OnInit } from '@angular/core';
import { Router, NavigationExtras } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { RegistroUsuariosPage } from '../registro-usuarios/registro-usuarios.page';
import { UsuariosService } from '../services/usuarios.service';
import { User } from '../models/user';

@Component({
  selector: 'app-usuarios',  
  templateUrl: './usuarios.page.html',
  styleUrls: ['./usuarios.page.scss'],
})
export class UsuariosPage implements OnInit {

  usuarios:User;

  constructor(public router: Router,public modalController: ModalController,public _us:UsuariosService ) { }

  ngOnInit() {
  }
 

  mostrar_detalles(usuario){
    this.usuarios = usuario;
    let navigationExtras: NavigationExtras = {
      queryParams: {
        special: JSON.stringify(this.usuarios)
      }
    }; 
    this.router.navigate(['detalles-users'], navigationExtras);

 
  }


  async addUsuario() {
    const modal = await this.modalController.create({
      component: RegistroUsuariosPage
    });
    return await modal.present();
  }

  
}
