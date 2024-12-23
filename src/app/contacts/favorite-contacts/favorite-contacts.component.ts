import { Component, OnInit } from '@angular/core';
import { DarkModeService } from '../services/dark-mode.service';
import { ContactsService } from '../services/contacts.service';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import { Contact } from '../interfaces/interfaces';

@Component({
  selector: 'app-favorite-contacts',
  templateUrl: './favorite-contacts.component.html',
  standalone: false,
  providers: [ContactsService, DarkModeService]
})
export class FavoriteContactsComponent implements OnInit {

  contacts!: Contact[];
  isGridView?:boolean = true
  constructor(
    private darkModeService: DarkModeService,
    private contactsService: ContactsService,
    private router: Router,
    private location: Location
  ) {  }

  ngOnInit(): void {
    this.contactsService.getContacts().subscribe((contacts) => {
      this.contacts = contacts.filter((contact:any) => contact.favorite == true);
    });
    const savedViewMode = localStorage.getItem('favoritesViewMode')
    this.isGridView = savedViewMode ? JSON.parse(savedViewMode) : true;
  }
  gridView() {
    this.isGridView = true;
    localStorage.setItem('favoritesViewMode','true')
  }
  listView() {
    this.isGridView = false;
    localStorage.setItem('favoritesViewMode','false')
  }
  removeFavorite(contact:any) {
        this.contactsService.addOrRemoveFavorite(contact,false)
  }
  viewContact(id: any) {
    this.router.navigate([`/contacts/${id}`]);
  }
  goBack(): void {
    this.location.back();
  }
}
