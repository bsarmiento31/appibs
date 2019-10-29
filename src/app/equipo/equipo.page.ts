import { Component, OnInit } from '@angular/core';
import { ModalController, AlertController } from '@ionic/angular';
import { RegistrarEquiposPage } from '../registrar-equipos/registrar-equipos.page';

@Component({
  selector: 'app-equipo',
  templateUrl: './equipo.page.html',
  styleUrls: ['./equipo.page.scss'],
})
export class EquipoPage implements OnInit {

  constructor(public modalController: ModalController,
              private alertController: AlertController) { }

  ngOnInit() {
  }

  async addEquipo() {
    const modal = await this.modalController.create({
      component: RegistrarEquiposPage
    });
    return await modal.present();
  }

}
