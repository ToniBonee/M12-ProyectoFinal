import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CompraComponent } from './compra/compra.component';
import { BodyComponent } from './body/body/body.component';
import { RegisterComponent } from './register/register.component';
import { ContactoComponent } from './contacto/contacto.component';
import { infoProducto } from './infoProducto/infoProducto.component';
import { CreatupcComponent } from './creatupc/creatupc.component';
import { AlquilerComponent } from './alquiler/alquiler/alquiler.component';
import { PalquilerComponent } from './palquiler/palquiler/palquiler.component';
import { PanelComponent } from './panel/panel/panel.component';


const routes: Routes = [
  { path: 'body', component: BodyComponent },

  { path: 'productosComprados', component: CompraComponent, data: { tipoProducto: 'compra' } },

  { path: 'login', component: RegisterComponent},

  { path: 'alquiler', component: AlquilerComponent,  data: { tipoProducto: 'alquiler' } },

  { path: 'contacto', component: ContactoComponent},
  { path: 'alquilerPanel', component: PalquilerComponent},
  { path: 'infoProducto', component: infoProducto},
  { path: 'panel', component: PanelComponent},
  { path: 'creatupc', component: CreatupcComponent}, 
  { path: 'alquiler', component: AlquilerComponent},

  { path: 'infoProducto/:id_producto', component: infoProducto}, 

  { path: '', redirectTo: 'body', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
