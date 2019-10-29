import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router,NavigationExtras } from '@angular/router'; 
import { ModalController,AlertController  } from '@ionic/angular';
import { UsuariosService } from '../services/usuarios.service';
import { User } from '../models/user';
import { EditUsersPage } from '../edit-users/edit-users.page';


@Component({
  selector: 'app-detalles-users', 
  templateUrl: './detalles-users.page.html',
  styleUrls: ['./detalles-users.page.scss'],
})
export class DetallesUsersPage implements OnInit {
  data: any; 
  usuarios:User;
  token:string;
  id:string;
  datosRetornados:any;

  constructor(public route: ActivatedRoute, 
              public router: Router,
              public modalController: ModalController,
              public _us:UsuariosService,
              public alertController: AlertController) { 

    this.route.queryParams.subscribe(params => {
      if (params && params.special) {
      this.usuarios = this.data = JSON.parse(params.special);
 
      }

      this.token = this._us.token;


     
    });

  }

  ngOnInit() {

    
  }

  traer_usuario(usuarios){

    this.usuarios = usuarios;
    let navigationExtras: NavigationExtras = {
      queryParams: {
        special: JSON.stringify(this.usuarios)
      }
    }; 
    this.ir_editar_usuario(usuarios);

  }

  async ir_editar_usuario(usuario) {
    const modal = await this.modalController.create({
      component: EditUsersPage
    });
    return await modal.present();
  }



  eliminar_usuario(usuario){
          this._us.borrar_usuario(usuario.id,this.token)
          .subscribe(()=>{
              
          })
  }

  

}
