import { Routes } from '@angular/router';
import { LoginComponent } from './commun/login/login.component';
import { AboutComponent } from './user/pages/about/about.component';
import { AcademieComponent } from './user/pages/academie/academie.component';
import { BoutiqueComponent } from './user/pages/boutique/boutique.component';
import { InscriptionComponent } from './user/pages/inscription/inscription.component';
import { PlanningComponent } from './user/pages/planning/planning.component';
import { ProfilComponent } from './user/pages/profil/profil.component';
import { ReservationComponent } from './user/pages/reservation/reservation.component';
import { StatisquesComponent } from './user/pages/statistiques/statistiques.component';
import { DashbordComponent } from './admin/pages/dashbord/dashbord.component';
import { ReportsComponent } from './admin/pages/reports/reports.component';
import { SettingsComponent } from './admin/pages/settings/settings.component';
import { UsersComponent } from './admin/pages/users/users.component';
import { AuthGuard } from './guards/auth.guard';  
import { AdminGuard } from './guards/admin.guard'; 
import { AlerteComponent } from './commun/alerte/alerte.component';
import { CalendarComponent } from './commun/calendar/calendar.component';

export const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'about', component: AboutComponent,   },
  { path: 'academie', component: AcademieComponent, },
  { path: 'boutique', component: BoutiqueComponent,  },
  { path: 'inscription', component: InscriptionComponent, },
  { path: 'planning', component: PlanningComponent,  },
  { path: 'profil', component: ProfilComponent },
  { path: 'reservation', component: ReservationComponent },
  { path: 'statistiques', component: StatisquesComponent },
  { path: 'alerte', component: AlerteComponent },
  { path: 'calendar', component: CalendarComponent },
  // Routes pour l'admin
  { path: 'admin', component: DashbordComponent, canActivate: [AuthGuard, AdminGuard] },
  { path: 'admin/reports', component: ReportsComponent, canActivate: [AuthGuard, AdminGuard] },
  { path: 'admin/settings', component: SettingsComponent, canActivate: [AuthGuard, AdminGuard] },
  { path: 'admin/users', component: UsersComponent, canActivate: [AuthGuard, AdminGuard] },
];
