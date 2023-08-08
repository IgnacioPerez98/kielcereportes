import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { DatosarticulosComponent } from './components/datosarticulos/datosarticulos.component';
import { DatosclientesComponent } from './components/datosclientes/datosclientes.component';
import { SelectorreporteComponent } from './components/selectorreporte/selectorreporte.component';
import { ConsultadeudaComponent } from './reportes/consultadeuda/consultadeuda.component';
import { VentasComponent } from './reportes/ventas/ventas.component';

const routes: Routes = [
 {path:'', component:LoginComponent},
 {path:'login', component:LoginComponent},
 {path:'datosarticulos', component:DatosarticulosComponent},
 {path:'datosclientes', component:DatosclientesComponent},
 {path:'selectorreporte', component:SelectorreporteComponent},
 {path:'reportedeuda', component:ConsultadeudaComponent},
 {path:'reporteventas', component:VentasComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
