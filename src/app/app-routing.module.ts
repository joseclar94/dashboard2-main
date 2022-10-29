import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConsultarComponent } from './consultar/consultar.component';
import { EliminarComponent } from './eliminar/eliminar.component';
import { InicioComponent } from './inicio/inicio.component';
import { ModificarComponent } from './modificar/modificar.component';
import { RegistroComponent } from './registro/registro.component';

const routes: Routes = [
  {
    path: 'registro',
    component: RegistroComponent
  },
  {
    path: 'consultar',
    component: ConsultarComponent
  },
  {
    path: 'modificar',
    component: ModificarComponent
  },
  {
    path: 'eliminar',
    component: EliminarComponent
  },
  {
    path: 'inicio',
    component: InicioComponent
  },
  {
    path: '',
    redirectTo: 'inicio',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
