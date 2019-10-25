import { RouterModule, Routes } from '@angular/router';

//RUTA PRINCIPAL
import { ChambitaComponent } from './chambita.component';

//RUTAS HIJAS
import { LandingComponent } from './landing/landing.component';
import { TerminosComponent } from './terminos/terminos.component';
import { PoliticasComponent } from './politicas/politicas.component';

const ChambitaRoutes: Routes = [
  {
    path: '',
    component: ChambitaComponent,
    canActivate: [],
    children: [
      { path: 'landing', component: LandingComponent },
      { path: 'terminos', component: TerminosComponent },
      { path: 'politicas', component: PoliticasComponent },
      { path: '', redirectTo: 'landing', pathMatch: 'full' },
    ],
  }
];


export const CHAMBITA_ROUTES = RouterModule.forChild(ChambitaRoutes);