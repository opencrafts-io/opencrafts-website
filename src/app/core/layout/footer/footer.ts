import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faGithub, faInstagram, faLinkedin, faXTwitter  } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-footer',
  imports: [FontAwesomeModule],
  templateUrl: './footer.html',
  styleUrls: ['./footer.css']
})
export class Footer {
  year: number = new Date().getFullYear();
  isHome: boolean = false;

  faGithub = faGithub;
  faInstagram = faInstagram;
  faLinkedin = faLinkedin;
  faX = faXTwitter;
  faEnvelope = faEnvelope;

  constructor(private router: Router) {
    this.router.events.subscribe(() => {
      this.isHome = this.router.url === '/' || this.router.url === '/home';
    });
  }
}
