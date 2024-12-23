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
  isGridView?:boolean = true
  selectedContact: any = null;
  selectedList: any[] = [];
  showActions: boolean = false;
  
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
    const savedViewMode = localStorage.getItem('viewMode')
    this.isGridView = savedViewMode ? JSON.parse(savedViewMode) : true;
  }

  gridView() {
    this.isGridView = true;
    localStorage.setItem('viewMode','true')
  }
  listView() {
    this.isGridView = false;
    localStorage.setItem('viewMode','false')
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
  addOrRemoveFavorite(contact:any) {
    if(!contact.favorite){
        this.contactsService.addOrRemoveFavorite(contact,true)
    } else {
        this.contactsService.addOrRemoveFavorite(contact,false)
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

  exportSelectedContacts() {
    const selectedContacts = this.selectedList;
    const csvData = this.convertToCSV(selectedContacts);
    const blob = new Blob([csvData], { type: 'text/csv' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.setAttribute('hidden', '');
    a.setAttribute('href', url);
    a.setAttribute('download', 'selected_contacts.csv');
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  }
  convertToCSV(contacts: any[]): string {
    const headers = ['First Name', 'Last Name', 'Email', 'Phone', 'Address'];
    const rows = contacts.map(contact => [
      contact.firstName,
      contact.lastName,
      contact.email,
      contact.phone,
      contact.address
    ]);

    const csvContent = [headers, ...rows].map(e => e.join(',')).join('\n');
    return csvContent;
  }
  
}
