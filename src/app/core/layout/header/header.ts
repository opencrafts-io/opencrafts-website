import { Component, signal } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faGithub, faInstagram, faLinkedin, faXTwitter } from '@fortawesome/free-brands-svg-icons';
import { Drawer } from "../drawer/drawer";
import { RouterModule } from '@angular/router';


@Component({
  selector: 'app-header',
  imports: [FontAwesomeModule, Drawer, RouterModule],
  templateUrl: './header.html',
  styleUrl: './header.css'
})
export class Header {
  faGithub = faGithub;
  faInstagram = faInstagram;
  faLinkedin = faLinkedin;
  faX = faXTwitter;

  drawerOpen = signal(false);

  toggleDrawer() {
    this.drawerOpen.set(!this.drawerOpen());
  }
}
