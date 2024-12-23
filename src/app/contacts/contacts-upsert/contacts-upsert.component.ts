import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Contact } from '../interfaces/interfaces';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ContactsService } from '../services/contacts.service';

@Component({
  selector: 'app-contacts-upsert',
  templateUrl: './contacts-upsert.component.html',
  standalone:false,
  providers: [ContactsService]
})
export class ContactsUpsertComponent implements OnInit {
  @Input()
  data!:any;

  @Output()
  formClosed = new EventEmitter<boolean>();

  @Input()
  isEdit!:Boolean;

  form!: FormGroup;
  
  constructor(
    private _fb: FormBuilder,
    private contactsService: ContactsService
  ) {}
  profileImage = this.data?.image || 'assets/images/profileImage.png';

  ngOnInit():any {
    this.form = this._fb.group({
      firstName: [this.data?.firstName,[Validators.required]],
      lastName: [this.data?.lastName,[Validators.required]],
      email: [this.data?.email,[Validators.email]],
      phone: [this.data?.phone,[Validators.required,Validators.pattern('^[0-9]{10}$')]],
      address: [this.data?.address,[Validators.required]]
    });
  }

  public onFormReset(): void {
    this.formClosed.emit(true);
  }
 
  onFileChange(event:any) {
    const reader = new FileReader();
    if(event.target.files && event.target.files.length) {
      const [file] = event.target.files;
      reader.readAsDataURL(file);
      reader.onload = () => {
        this.profileImage = reader.result as string;
      };
    }
  }
  onSubmit(): void {
    if (this.form.valid) {
      var contact = this.form.value
      contact.image = this.profileImage;
      contact.id = this.data?.id || Math.floor(Math.random() * 1000);
      contact.deleted = false;
      console.log(contact);
      if(this.isEdit){
        this.contactsService.addContact(contact,this.isEdit);
      } else {
        this.contactsService.addContact(contact);
      }
      this.onFormReset();
    
    } else {
      console.error('Form is invalid!');
    }
  }

}
