import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router'; 

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'home', loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)},
  { path: 'login', loadChildren: './login/login.module#LoginPageModule' },
  { path: 'tabs', loadChildren: './tabs/tabs.module#TabsPageModule' },
  { path: 'usuarios', loadChildren: './usuarios/usuarios.module#UsuariosPageModule' },
  { path: 'detalles-users', loadChildren: './detalles-users/detalles-users.module#DetallesUsersPageModule' },
  { path: 'registro-usuarios', loadChildren: './registro-usuarios/registro-usuarios.module#RegistroUsuariosPageModule' },
  { path: 'edit-users', loadChildren: './edit-users/edit-users.module#EditUsersPageModule' },
  { path: 'registrar-equipos', loadChildren: './registrar-equipos/registrar-equipos.module#RegistrarEquiposPageModule' },
  { path: 'editar-equipos', loadChildren: './editar-equipos/editar-equipos.module#EditarEquiposPageModule' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
