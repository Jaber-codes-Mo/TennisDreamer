// login.component.ts
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  constructor(private router: Router) {}

  navigateToAcademie(): void {
    // Logique pour se connecter, puis navigation vers une autre page
    this.router.navigate(['/academie']); // Assurez-vous que la route '/academie' existe
  }

  navigateToInscrit(): void {
    // Logique pour la création d'un nouveau compte
    this.router.navigate(['/inscrit']); // Assurez-vous que la route '/inscrit' existe
  }

  navigateToAlerte(event: Event): void {
    event.preventDefault(); // Empêche le comportement par défaut du lien
    this.router.navigate(['/alerte']); // Navigue vers le composant Alerte
  }
}
