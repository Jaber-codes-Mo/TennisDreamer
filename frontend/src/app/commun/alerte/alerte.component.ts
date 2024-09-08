import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-alerte',
  standalone: true,
  templateUrl: './alerte.component.html',
  styleUrls: ['./alerte.component.css'],
  imports: [FormsModule]
})
export class AlerteComponent {
  userInput: string = '';

  constructor(private toastr: ToastrService, private router: Router) { }

  onSubmit(): void {
    this.toastr.success('Tennisdreamer a envoyé le code', );
    console.log('Form submitted with:', this.userInput);
  }

  navigateToLogin(): void {
    this.router.navigate(['/login']);
  }

  navigateToInscrit(): void {
    this.router.navigate(['/inscrit']);
  }
}
