import { Component, ViewChild, ElementRef } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { NavbarComponent } from "../../../commun/navbar/navbar.component";
import { FooterComponent } from "../../../commun/footer/footer.component";

@Component({
  selector: 'app-academie',
  standalone: true,
  templateUrl: './academie.component.html',
  styleUrls: ['./academie.component.css'],
  imports: [NavbarComponent, FooterComponent]
})
export class AcademieComponent {
  @ViewChild('courtReservationModal') courtReservationModal?: ElementRef;
  @ViewChild('privateSessionModal') privateSessionModal?: ElementRef;

  constructor(public modalService: NgbModal) {}

  openCourtReservationModal() {
    if (this.courtReservationModal) {
      this.modalService.open(this.courtReservationModal);
    }
  }

  openSessionReservationModal() {
    if (this.privateSessionModal) {
      this.modalService.open(this.privateSessionModal);
    }
  }

  submitCourtReservation() {
    const date = (document.getElementById('courtDate') as HTMLInputElement).value;
    const time = (document.getElementById('courtTime') as HTMLInputElement).value;
    const courtNumber = (document.getElementById('courtNumber') as HTMLInputElement).value;

    if (date && time && courtNumber) {
      console.log(`Réservation: Terrain ${courtNumber} à ${time} le ${date}`);
      this.resetForm('courtReservationForm');
      this.modalService.dismissAll(); // Close all modals
    } else {
      alert('Veuillez remplir tous les champs.');
    }
  }

  submitPrivateSession() {
    const date = (document.getElementById('sessionDate') as HTMLInputElement).value;
    const time = (document.getElementById('sessionTime') as HTMLInputElement).value;
    const coachName = (document.getElementById('coachName') as HTMLInputElement).value;

    if (date && time && coachName) {
      console.log(`Réservation: Session avec ${coachName} à ${time} le ${date}`);
      this.resetForm('privateSessionForm');
      this.modalService.dismissAll(); // Close all modals
    } else {
      alert('Veuillez remplir tous les champs.');
    }
  }

  resetForm(formId: string) {
    const formElement = document.getElementById(formId) as HTMLFormElement;
    if (formElement) {
      formElement.reset();
    }
  }
}
