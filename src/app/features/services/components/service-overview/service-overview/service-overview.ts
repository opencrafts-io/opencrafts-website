import { Component, input, output, signal } from '@angular/core';
import { Service } from '../../../models/service.model';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-service-overview',
  imports: [FontAwesomeModule],
  templateUrl: './service-overview.html',
  styleUrl: './service-overview.css'
})
export class ServiceOverview {
  faXmark = faXmark;
  selectedService = input<Service>();
  close = output<void>();
  
  closeModal() {
    this.close.emit();
  }

}
