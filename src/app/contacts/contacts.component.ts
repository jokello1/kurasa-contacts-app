import { Component } from '@angular/core';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  standalone: false
})
export class ContactsComponent {
  // isDarkMode = false;

  ngOnInit() {
    // const savedTheme = localStorage.getItem('theme');
    // this.isDarkMode = savedTheme === 'dark';
    // this.applyTheme();
  }

  toggleTheme() {
  }

}
