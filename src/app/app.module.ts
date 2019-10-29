import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { HttpClient,HttpClientModule } from '@angular/common/http';
import { IonicStorageModule } from '@ionic/storage';
// import { LoginPageModule } from './login/login.module';
import { RegistroUsuariosPageModule } from './registro-usuarios/registro-usuarios.module';
import { EditUsersPageModule } from './edit-users/edit-users.module';
import { RegistrarEquiposPageModule } from './registrar-equipos/registrar-equipos.module';


@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [  
    BrowserModule, 
    IonicModule.forRoot(), 
    AppRoutingModule,
    RegistroUsuariosPageModule,
    EditUsersPageModule,
    RegistrarEquiposPageModule,
    IonicStorageModule.forRoot(),
    HttpClientModule],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
