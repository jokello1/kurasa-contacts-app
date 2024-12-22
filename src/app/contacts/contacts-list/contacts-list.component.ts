import { Component, Input, OnInit } from '@angular/core';
import { Contact } from '../interfaces/interfaces';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ContactsService } from '../services/contacts.service';

@Component({
  selector: 'app-contacts-list',
  templateUrl: './contacts-list.component.html',
  standalone:false,
  providers: [ContactsService]
})
export class ContactsListComponent implements OnInit {
  
  searchText = '';
  contacts!: any[]
  isGridView = true;
  selectedContact: any = null;
  selectedList: any[] = [];
  
  showForm:Boolean = false;
  isEdit:Boolean = false;
  
  constructor(
    private router: Router,
    private contactsService: ContactsService
  ) {}
  ngOnInit():any {
    this.contactsService.getContacts().subscribe((contacts) => {
      this.contacts = contacts.filter((contact:any) => !contact.deleted);
    });
    this.sortContacts();
  }

  gridView() {
    this.isGridView = true;
  }
  listView() {
    this.isGridView = false;
  }

  editContact(contact: any) {
    this.showForm = true;
    this.isEdit = true;
    this.selectedContact = { ...contact };
  }
  viewContact(id: any) {
    this.router.navigate([`/contacts/${id}`]);
  }

  closeModal(reset=false) {
    this.showForm = false;
  }

  saveContact() {
    // Save contact logic here
    this.closeModal();
  }

  sortContacts() {
    this.contacts?.sort((a, b) => a.firstName.localeCompare(b.firstName));
  }

  deleteContact(contact:any) {
    if(!contact.deleted){
      const confirmed = confirm('Are you sure you want to delete this contact?');
      if (confirmed) {
        this.contactsService.deleteOrRestorContact(contact,true)
      }
    }
    this.selectedList = [];
  }

  toggleSelection(contact: any, event: any) {
    if (event.target.checked) {
      this.selectedList.push(contact);
    } else {
      this.selectedList = this.selectedList.filter(c => c.id !== contact.id);
    }
  }

  deleteSelectedContacts() {
    const confirmed = confirm('Are you sure you want to delete selected contacts?');
    if (confirmed) {
      this.contactsService.deleteOrRestoreSelectedContacts(this.selectedList,true);
      this.selectedList = [];
    }
  }

  restoreSelectedContacts() {
    const confirmed = confirm('Are you sure you want to restore selected contacts?');
    if (confirmed) {
      this.contactsService.deleteOrRestoreSelectedContacts(this.selectedList,false);
      this.selectedList = [];
    }
  }
}
