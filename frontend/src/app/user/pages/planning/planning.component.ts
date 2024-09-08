import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common'; // Import required for Angular directives like *ngIf
import { FormsModule } from '@angular/forms'; // Import FormsModule for ngModel
import { CalendarComponent } from '../../../commun/calendar/calendar.component';
import { NavbarComponent } from '../../../commun/navbar/navbar.component';
import { FooterComponent } from '../../../commun/footer/footer.component'; // Correct the path to the CalendarComponent

@Component({
  selector: 'app-planning',
  standalone: true,
  imports: [CommonModule, FormsModule, CalendarComponent, NavbarComponent, FooterComponent], // Include CommonModule, FormsModule, and CalendarComponent
  templateUrl: './planning.component.html',
  styleUrls: ['./planning.component.css']
})
export class PlanningComponent implements OnInit {
  currentModal: string | null = null;
  tournaments = [
    { name: 'Tournoi Open', date: '2024-09-15', location: 'Stade Municipal' },
    { name: 'Championnats Régionaux', date: '2024-09-22', location: 'Complexe Sportif' },
    // Add more tournaments here
  ];
  hasReservations = true; // Change this based on actual reservations

  privateSession = {
    date: '',
    time: '',
    coach: ''
  };

  selectedTournament = {
    name: '',
    date: '',
    location: ''
  };

  constructor() { }

  ngOnInit(): void {
    // Initialize data if needed
  }

  openModal(modalType: string, tournament?: any): void {
    this.currentModal = modalType;
    if (tournament) {
      this.selectedTournament = tournament;
    }
  }

  closeModal(): void {
    this.currentModal = null;
  }

  submitPrivateSession(): void {
    // Logic to submit private session
    console.log('Private Session Submitted:', this.privateSession);
    this.closeModal();
  }

  submitTournamentParticipation(): void {
    // Logic to submit tournament participation
    console.log('Tournament Participation Submitted:', this.selectedTournament);
    this.closeModal();
  }
}
