import { Component, OnInit } from '@angular/core';
import { User } from '../models/user';
import { UsuariosService } from '../services/usuarios.service';
import { Router, NavigationExtras } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  public user: User;

  constructor( private _us:UsuariosService,
              public router: Router ) { 
   this.user = new User(1,'ROLE_USER','','','','');
  }

  ngOnInit() {
  }

  login(){
    
    this._us.ingresar(this.user)
          .subscribe(()=>{ 
              if(this._us.status == 'success'){
                this.router.navigate(['tabs']);
                this.user = new User(1,'ROLE_USER','','','','');
              }
          });

  }

}
