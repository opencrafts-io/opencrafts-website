import { Component, EventEmitter, Output } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-drawer',
  imports: [RouterModule],
  templateUrl: './drawer.html',
  styleUrl: './drawer.css'
})
export class Drawer {
   @Output() linkClicked = new EventEmitter<void>();

  handleLinkClick() {
    this.linkClicked.emit();
  }
}
