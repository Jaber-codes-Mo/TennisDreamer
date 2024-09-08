// Import necessary modules and components
import { AfterViewInit, CUSTOM_ELEMENTS_SCHEMA, Component, OnInit } from '@angular/core';
import { Chart, registerables } from 'chart.js';
import { NavbarComponent } from "../../../commun/navbar/navbar.component";
import { FooterComponent } from "../../../commun/footer/footer.component";

@Component({
  selector: 'app-statistiques',
  standalone: true,
  imports: [NavbarComponent, FooterComponent],
  templateUrl: './statistiques.component.html',
  styleUrls: ['./statistiques.component.css'],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]  // Allows the use of Web Components
})
export class StatisquesComponent implements OnInit, AfterViewInit {

  private chart: Chart | undefined;

  constructor() { }

  ngOnInit(): void {
    // Initialization logic if any
  }

  ngAfterViewInit(): void {
    this.createChart();
  }

  private createChart(): void {
    const ctx = document.getElementById('myChart') as HTMLCanvasElement | null;

    if (!ctx) {
      console.error('Canvas element with id "myChart" not found!');
      return;
    }

    // Register necessary Chart.js components
    Chart.register(...registerables);

    // Initialize and configure the chart
    this.chart = new Chart(ctx, {
      type: 'line',
      data: {
        labels: [
          'Aces',
          'Doubles Fautes',
          '1er Service %',
          'Points de Break Gagnés',
          'Coups Gagnants',
          'Fautes Directes',
          'Points au Filet Gagnés',
        ],
        datasets: [
          {
            label: 'Performance du Joueur',
            data: [12, 4, 65, 8, 32, 15, 10],  // Example data points
            tension: 0.4,  // Smooth curve for the line
            backgroundColor: 'rgba(0, 123, 255, 0.1)',  // Transparent background fill
            borderColor: '#007bff',  // Line color
            borderWidth: 2,  // Line thickness
            pointBackgroundColor: '#007bff',  // Point color
          },
        ],
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
          y: {
            beginAtZero: true,
            title: {
              display: true,
              text: 'Valeurs de Performance',
            },
            ticks: {
              stepSize: 10,
              callback: function (tickValue: string | number) {
                // Ensure we handle both string and number types
                if (typeof tickValue === 'number') {
                  return tickValue + ' %';
                }
                return tickValue;
              }
            },
          },
          x: {
            title: {
              display: true,
              text: 'Catégories de Performance',
            },
          },
        },
        plugins: {
          legend: {
            display: true,
            position: 'top',
          },
          tooltip: {
            callbacks: {
              label: function (context: any) {
                return context.dataset.label + ': ' + context.parsed.y + ' %';
              }
            }
          },
        },
      },
    });
  }

  // Clean up the chart when the component is destroyed
  ngOnDestroy(): void {
    if (this.chart) {
      this.chart.destroy();
    }
  }
}
