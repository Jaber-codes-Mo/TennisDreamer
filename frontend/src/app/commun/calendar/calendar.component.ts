import { Component } from '@angular/core';
import { CalendarOptions } from '@fullcalendar/core'; // Importation nécessaire
import dayGridPlugin from '@fullcalendar/daygrid'; // Plugin pour la vue
import interactionPlugin from '@fullcalendar/interaction'; // Plugin pour l'interaction
import { FullCalendarModule } from '@fullcalendar/angular';

@Component({
  selector: 'app-calendar',
  standalone: true,
  imports: [FullCalendarModule],
  template: `<full-calendar [options]="calendarOptions"></full-calendar>`,
  styleUrls: ['./calendar.component.css']
})
export class CalendarComponent {
  calendarOptions: CalendarOptions = {
    initialView: 'dayGridMonth', // Vue initiale
    plugins: [dayGridPlugin, interactionPlugin], // Plugins nécessaires
    dateClick: this.handleDateClick.bind(this), // Fonction de clic sur une date
    events: [] // Evénements du calendrier
  };

  handleDateClick(arg: any) {
    alert('Date clicked: ' + arg.dateStr);
  }
}
