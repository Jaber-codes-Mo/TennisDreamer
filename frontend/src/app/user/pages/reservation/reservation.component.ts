import { Component, ViewChild } from '@angular/core';
import { FullCalendarModule, FullCalendarComponent } from '@fullcalendar/angular';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from "../../../commun/navbar/navbar.component";

@Component({
  selector: 'app-reservation',
  standalone: true,
  imports: [CommonModule, FullCalendarModule, NavbarComponent],
  templateUrl: './reservation.component.html',
  styleUrls: ['./reservation.component.css']
})
export class ReservationComponent {
  @ViewChild(FullCalendarComponent) calendarComponent: FullCalendarComponent | undefined;

  calendarOptions = {
    initialView: 'dayGridMonth',
    plugins: [dayGridPlugin, timeGridPlugin, interactionPlugin],
    customButtons: {
      addRoom: {
        text: 'Réserver Court',
        click: () => this.openCourtReservationModal()
      },
      addReservation: {
        text: 'Réserver Séance',
        click: () => this.openSessionReservationModal()
      }
    },
    dateClick: this.handleDateClick.bind(this),
    events: [] // Liste initiale des événements
  };

  reservations: any[] = [];

  openCourtReservationModal() {
    const modal = new (window as any).bootstrap.Modal(document.getElementById('courtReservationModal'));
    modal.show();
  }

  openSessionReservationModal() {
    const modal = new (window as any).bootstrap.Modal(document.getElementById('privateSessionModal'));
    modal.show();
  }

  handleDateClick(arg: any) {
    this.showReservationModal(arg.dateStr);
  }

  showReservationModal(date: string) {
    const modal = new (window as any).bootstrap.Modal(document.getElementById('courtReservationModal'));
    modal.show();
    (document.getElementById('courtDate') as HTMLInputElement).value = date;
  }

  submitCourtReservation() {
    const date = (document.getElementById('courtDate') as HTMLInputElement).value;
    const time = (document.getElementById('courtTime') as HTMLInputElement).value;
    const courtNumber = (document.getElementById('courtNumber') as HTMLInputElement).value;

    if (date && time && courtNumber) {
      const reservationDetails = `Terrain ${courtNumber} à ${time}`;
      this.addReservationToTable('Terrain', date, time, reservationDetails);
      this.addReservationToCalendar('Terrain', date, time);
      this.showAlert('warning', 'Réservation de terrain effectuée avec succès !');
      (document.getElementById('courtReservationForm') as HTMLFormElement).reset();
      const modal = new (window as any).bootstrap.Modal(document.getElementById('courtReservationModal'));
      modal.hide();
    } else {
      this.showAlert('danger', 'Veuillez remplir tous les champs.');
    }
  }

  submitPrivateSession() {
    const date = (document.getElementById('sessionDate') as HTMLInputElement).value;
    const time = (document.getElementById('sessionTime') as HTMLInputElement).value;
    const coachName = (document.getElementById('coachName') as HTMLInputElement).value;

    if (date && time && coachName) {
      const reservationDetails = `Session avec ${coachName} à ${time}`;
      this.addReservationToTable('Session Privée', date, time, reservationDetails);
      this.addReservationToCalendar('Session Privée', date, time);
      this.showAlert('info', 'Session privée réservée avec succès !');
      (document.getElementById('privateSessionForm') as HTMLFormElement).reset();
      const modal = new (window as any).bootstrap.Modal(document.getElementById('privateSessionModal'));
      modal.hide();
    } else {
      this.showAlert('danger', 'Veuillez remplir tous les champs.');
    }
  }

  addReservationToTable(type: string, date: string, time: string, details: string) {
    this.reservations.push({ type, date, time, details });
    this.updateReservationTable();
  }

  updateReservationTable() {
    const tableBody = document.getElementById('reservationTableBody') as HTMLTableElement;
    tableBody.innerHTML = '';
    this.reservations.forEach(reservation => {
      const row = tableBody.insertRow();
      row.insertCell(0).innerText = reservation.type;
      row.insertCell(1).innerText = reservation.date;
      row.insertCell(2).innerText = reservation.time;
      row.insertCell(3).innerText = reservation.details;
    });
  }

  addReservationToCalendar(type: string, date: string, time: string) {
    if (this.calendarComponent) {
      const calendarApi = this.calendarComponent.getApi();
      calendarApi.addEvent({
        title: type,
        start: `${date}T${time}`,
        allDay: false,
        color: type === 'Terrain' ? '#FF6347' : '#4682B4', // Couleur pour chaque type
      });
    }
  }

  showAlert(type: string, message: string) {
    const alertDiv = document.createElement('div');
    alertDiv.className = `alert alert-${type} alert-dismissible fade show`;
    alertDiv.role = 'alert';
    alertDiv.innerHTML = `${message}<button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>`;
    document.body.appendChild(alertDiv);

    setTimeout(() => {
      alertDiv.classList.remove('show');
      setTimeout(() => {
        alertDiv.remove();
      }, 500);
    }, 3000);
  }
}
