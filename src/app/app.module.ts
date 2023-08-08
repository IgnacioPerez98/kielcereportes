import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { DatosclientesComponent } from './components/datosclientes/datosclientes.component';
import { DatosarticulosComponent } from './components/datosarticulos/datosarticulos.component';
import { SelectorreporteComponent } from './components/selectorreporte/selectorreporte.component';
import { ConsultadeudaComponent } from './reportes/consultadeuda/consultadeuda.component';
import { VentasComponent } from './reportes/ventas/ventas.component';
import { FormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DatosclientesComponent,
    DatosarticulosComponent,
    SelectorreporteComponent,
    ConsultadeudaComponent,
    VentasComponent
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        FormsModule,

    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
