import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { DetallesUsersPage } from './detalles-users.page';

const routes: Routes = [
  {
    path: '',
    component: DetallesUsersPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [DetallesUsersPage]
})
export class DetallesUsersPageModule {}
