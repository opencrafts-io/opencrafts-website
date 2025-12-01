import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faDatabase, faMobileAlt, faComments, faChurch, faChampagneGlasses, faMoneyBillWave , faEnvelope } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-tech-section',
  imports: [FontAwesomeModule],
  templateUrl: './tech-section.html',
  styleUrl: './tech-section.css'
})
export class TechSection {
  faDatabase = faDatabase;
  faMobile = faMobileAlt;
  faSocial = faComments;
  faChapel = faChurch;
  faEvent = faChampagneGlasses;
  faPayment = faMoneyBillWave;
  faSms = faEnvelope;
}
