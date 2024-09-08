import { Component } from '@angular/core';
import { NavbarComponent } from "../../../commun/navbar/navbar.component";
import { FooterComponent } from "../../../commun/footer/footer.component";

@Component({
  selector: 'app-boutique',
  standalone: true,
  imports: [NavbarComponent, FooterComponent],
  templateUrl: './boutique.component.html',
  styleUrl: './boutique.component.css'
})
export class BoutiqueComponent {

}
