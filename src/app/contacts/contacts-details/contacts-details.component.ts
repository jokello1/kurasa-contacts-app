import { Component, Input, OnInit } from '@angular/core';
import { Contact } from '../interfaces/interfaces';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ContactsService } from '../services/contacts.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-contacts-details',
  templateUrl: './contacts-details.component.html',
  standalone:false,
  providers: [ContactsService]
})
export class ContactsDetailsComponent implements OnInit {
  
  isEdit:Boolean = false;
  
  constructor(
    private route: ActivatedRoute,
    private contactsService: ContactsService,
    private location: Location
  ) {}

  ngOnInit():any {
    this.route.params.subscribe(params => {
      const contactId = params?.['key'];
      this.contact = this.contactsService.getContactById(contactId);
    });
  }

  contact: any;
  goBack(): void {
    this.location.back();
  }

}
