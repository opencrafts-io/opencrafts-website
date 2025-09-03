import { Component } from '@angular/core';
import { ServicesSection } from "../../components/services-section/services-section";
import { TechSection } from "../../components/tech-section/tech-section";
import { Footer } from '../../../../core/layout/footer/footer';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faDatabase, faMobileAlt, faComments, faChurch, faChampagneGlasses, faMoneyBillWave } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-home',
  imports: [ServicesSection, TechSection, Footer, FontAwesomeModule],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home {
  faDatabase = faDatabase;
  faMobile = faMobileAlt;
  faSocial = faComments;
  faChapel = faChurch;
  faEvent = faChampagneGlasses;
  faPayment = faMoneyBillWave;
}
