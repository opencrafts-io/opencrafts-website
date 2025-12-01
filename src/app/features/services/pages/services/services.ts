import { Component, signal, OnInit, OnDestroy } from '@angular/core';
import { CommonModule, CurrencyPipe } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faEnvelope, faCheckCircle, faTimes } from '@fortawesome/free-solid-svg-icons';
import { CoreModule } from "../../../../core/core-module";

interface SMSPricingTier {
  name: string;
  fee: number;
  included: number;
  perSMS: number;
}

interface SMSService {
  id: number;
  title: string;
  overview: string;
  description: string;
  image: string;
  features: string[];
  pricing: {
    setupFee: number;
    tiers: SMSPricingTier[];
  };
}

@Component({
  selector: 'app-services', // Added selector
  standalone: true,
  imports: [CommonModule, FontAwesomeModule, CoreModule, CurrencyPipe],
  templateUrl: './services.html',
  styleUrls: ['./services.css']
})
export class Services implements OnInit, OnDestroy {
  // Icons
  faSms = faEnvelope;
  faCheck = faCheckCircle;
  faClose = faTimes;

  selectedService = signal<SMSService | null>(null);

  services: SMSService[] = [
    {
      id: 1,
      title: 'SMS Backend API',
      overview: 'Reliable transactional and marketing SMS infrastructure for your business.',
      description: `Our SMS Backend API allows businesses to send bulk or individual SMS messages programmatically. It allows for seamless integration into your existing CRM or ERP systems with high throughput and low latency.`,
      image: 'https://images.unsplash.com/photo-1555421689-d68471e189f2?auto=format&fit=crop&q=80&w=1000', // Placeholder for demo
      features: [
        'High-speed Bulk SMS sending',
        'Transactional API (OTP, Alerts)',
        'Real-time delivery reports',
        'Sender ID Customization'
      ],
      pricing: {
        setupFee: 30000,
        tiers: [
          { name: 'Standard', fee: 5000, included: 0, perSMS: 0.85 },
          { name: 'Professional', fee: 15000, included: 20000, perSMS: 0.75 },
          { name: 'Enterprise', fee: 40000, included: 100000, perSMS: 0.60 }
        ]
      }
    }
  ];

  ngOnInit() {
    document.addEventListener('keydown', this.handleEscape);
  }

  ngOnDestroy() {
    document.removeEventListener('keydown', this.handleEscape);
    document.body.style.overflow = ''; // Cleanup
  }

  handleEscape = (event: KeyboardEvent) => {
    if (event.key === 'Escape') {
      this.closeModal();
    }
  };

  openModal(service: SMSService) {
    this.selectedService.set(service);
    document.body.style.overflow = 'hidden'; // Prevent background scrolling
  }

  closeModal() {
    this.selectedService.set(null);
    document.body.style.overflow = '';
  }
}