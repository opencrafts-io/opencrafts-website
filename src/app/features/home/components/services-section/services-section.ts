import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faCode, faCloud, faScrewdriverWrench} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-services-section',
  imports: [FontAwesomeModule],
  templateUrl: './services-section.html',
  styleUrl: './services-section.css'
})
export class ServicesSection {
  faCode = faCode;
  faCloud = faCloud;
  faScrewDriverWrench = faScrewdriverWrench;
}
