import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DarkModeService } from './contacts/services/dark-mode.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  standalone: false,
  providers: [DarkModeService]
})
export class AppComponent {
  title = 'kurasa-contacts-app';
  constructor(public darkModeService: DarkModeService) {}
}
