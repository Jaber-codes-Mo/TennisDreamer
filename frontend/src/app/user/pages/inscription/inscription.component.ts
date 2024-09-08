import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NavbarComponent } from "../../../commun/navbar/navbar.component";

@Component({
  selector: 'app-inscrit',
  standalone: true,
  templateUrl: './inscription.component.html',
  styleUrls: ['./inscription.component.css'],
  imports: [NavbarComponent]
})
export class InscriptionComponent {
  constructor(private router: Router) {}

  navigateToLogin() {
    this.router.navigate(['/login']);
  }
}
