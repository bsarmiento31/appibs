import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router'; 


@Component({
  selector: 'app-detalles-users',
  templateUrl: './detalles-users.page.html',
  styleUrls: ['./detalles-users.page.scss'],
})
export class DetallesUsersPage implements OnInit {
  data: any; 
  usuarios:any;
  constructor(public route: ActivatedRoute, public router: Router) { 

    this.route.queryParams.subscribe(params => {
      if (params && params.special) {
      this.usuarios = this.data = JSON.parse(params.special);
 
      }

     
    });

  }

  ngOnInit() {
  }

}
