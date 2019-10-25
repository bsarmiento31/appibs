import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { UsuariosService } from '../services/usuarios.service';
import { Router, NavigationExtras } from '@angular/router';


@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.page.html',
  styleUrls: ['./tabs.page.scss'],
})
export class TabsPage implements OnInit {

  constructor(private menu: MenuController,
              public _us:UsuariosService,
              public router: Router) { }

  ngOnInit() { 
  }

  cerrar_sesio(){
    this._us.salir();
    this.router.navigate(['login']);
    
  }

  entrar_usuario(){
    this.router.navigate(['usuarios']);
  }

}
