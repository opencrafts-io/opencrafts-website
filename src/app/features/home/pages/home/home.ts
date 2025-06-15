import { Component } from '@angular/core';
import { ServicesSection } from "../../components/services-section/services-section";
import { TechSection } from "../../components/tech-section/tech-section";
import { Footer } from '../../../../core/layout/footer/footer';

@Component({
  selector: 'app-home',
  imports: [ServicesSection, TechSection , Footer],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home {

}
