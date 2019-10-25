
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Componentes
import { LandingComponent } from './landing/landing.component';
import { CHAMBITA_ROUTES } from './chambita.routes';
import { TerminosComponent } from './terminos/terminos.component';
import { PoliticasComponent } from './politicas/politicas.component';

// Rutas


@NgModule({
  declarations: [
    LandingComponent,
    TerminosComponent,
    PoliticasComponent
  ],
  imports: [
    CommonModule,
    CHAMBITA_ROUTES
  ]
})


export class ChambitaModule { }
