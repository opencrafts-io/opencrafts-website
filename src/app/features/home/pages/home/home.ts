import { Component } from '@angular/core';
import { ServicesSection } from "../../components/services-section/services-section";
import { TechSection } from "../../components/tech-section/tech-section";

@Component({
  selector: 'app-home',
  imports: [ServicesSection, TechSection],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home {

}
