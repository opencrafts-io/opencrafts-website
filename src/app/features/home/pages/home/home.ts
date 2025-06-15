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
  //to look at later
  ngAfterViewInit() {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          (entry.target as HTMLElement).classList.add('visible');
        }
      });
    }, { threshold: 0.2 });

    document.querySelectorAll('.page-section').forEach(section => {
      observer.observe(section);
    });
  }


}
