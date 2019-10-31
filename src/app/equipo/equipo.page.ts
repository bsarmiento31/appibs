import { Component, OnInit,ViewChild  } from '@angular/core';
import { ModalController, AlertController,IonInfiniteScroll  } from '@ionic/angular';
import { RegistrarEquiposPage } from '../registrar-equipos/registrar-equipos.page';
import { EquiposService } from '../services/equipos.service';

@Component({
  selector: 'app-equipo',
  templateUrl: './equipo.page.html',
  styleUrls: ['./equipo.page.scss'],
})
export class EquipoPage implements OnInit {

  equipos:any[] = [];
  hayMasNuevo:boolean = true;
  equiposCargados:any = this._es.equipos;
  

  @ViewChild(IonInfiniteScroll,{static: false}) infiniteScroll: IonInfiniteScroll;
  // @ViewChild(IonVirtualScroll,{static: false}) virtualScroll: IonVirtualScroll;


  constructor(public modalController: ModalController,
              private alertController: AlertController,
              public _es:EquiposService) {
                // console.log(this.equiposCargados);
               }

  ngOnInit() {
  }

  async addEquipo() {
    const modal = await this.modalController.create({
      component: RegistrarEquiposPage
    });
    return await modal.present();
  }

  doRefresh(event) {
    // console.log('Begin async operation'); 

    setTimeout(() => {
      // console.log('Async operation has ended');
      this._es.todos_equipos();
      event.target.complete();
    }, 2000);
  }

  loadData(event) {
    // setTimeout(() => {
    //   console.log('Done');
    //   this._es.todos_equipos(); 
    //   event.target.complete();  
    // }, 2000);
    this._es.todos_equipos()
        .then( (hayMas:boolean)=> {
          // console.log(hayMas);
          this.hayMasNuevo = hayMas; 
          this.infiniteScroll.complete();
        })
  }



  toggleInfiniteScroll() {
    this.infiniteScroll.disabled = !this.infiniteScroll.disabled;
  }

}
