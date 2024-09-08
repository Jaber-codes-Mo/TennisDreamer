import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { StatisquesComponent } from "./user/pages/statistiques/statistiques.component";
import { AcademieComponent } from "./user/pages/academie/academie.component";
import { ReservationComponent } from "./user/pages/reservation/reservation.component";
import { AboutComponent } from "./user/pages/about/about.component";
import { PlanningComponent } from "./user/pages/planning/planning.component";
import { BoutiqueComponent } from "./user/pages/boutique/boutique.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, StatisquesComponent, AcademieComponent, ReservationComponent, AboutComponent, PlanningComponent, BoutiqueComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'frontend';
}
