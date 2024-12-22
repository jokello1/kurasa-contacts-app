import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable } from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class ContactsService {
    private contacts = [
        { id:1, firstName: 'John', lastName: 'Doe', email: 'john@example.com', phone: '1234567890', image: 'assets/images/profileImage.png', address: '123 Main St',deleted:false ,favorite:false},
        { id:2 ,firstName: 'Jane', lastName: 'Smith', email: 'jane@example.com', phone: '0987654321', image: 'assets/images/profileImage.png', address: '456 Elm St',deleted:false ,favorite:false},
        { id:3, firstName: 'Alice', lastName: 'Johnson', email: 'alice@example.com', phone: '2345678901', image: 'assets/images/profileImage.png', address: '789 Oak St',deleted:false ,favorite:false},
        { id:4, firstName: 'Bob', lastName: 'Brown', email: 'bob@example.com', phone: '3456789012', image: 'assets/images/profileImage.png', address: '101 Pine St',deleted:false ,favorite:false},
        { id:5, firstName: 'Charlie', lastName: 'Davis', email: 'charlie@example.com', phone: '4567890123', image: 'assets/images/profileImage.png', address: '202 Maple St',deleted:false ,favorite:false},
        { id:6, firstName: 'David', lastName: 'Wilson', email: 'david@example.com', phone: '5678901234', image: 'assets/images/profileImage.png', address: '303 Birch St', deleted:false ,  favorite:false},
        { id:7, firstName: 'Eve', lastName: 'Taylor', email: 'eve@example.com', phone: '6789012345', image: 'assets/images/profileImage.png', address: '404 Cedar St',deleted:false ,favorite:false},
        { id:8, firstName: 'Frank', lastName: 'Anderson', email: 'frank@example.com', phone: '7890123456', image: 'assets/images/profileImage.png', address: '505 Walnut St', deleted:true ,favorite:false},
        { id:9, firstName: 'Grace', lastName: 'Thomas', email: 'grace@example.com', phone: '8901234567', image: 'assets/images/profileImage.png', address: '606 Chestnut St', deleted:false ,favorite:false},
        { id:10, firstName: 'Hank', lastName: 'Martinez', email: 'hank@example.com', phone: '9012345678', image: 'assets/images/profileImage.png', address: '707 Spruce St', deleted:false ,favorite:false},
      ];
    private contactsSubject: BehaviorSubject<any[]>;

    constructor() {
        const savedContacts = localStorage.getItem('contacts');
        if (!savedContacts) {
            localStorage.setItem('contacts', JSON.stringify(this.contacts));
        }
        const initialContacts = savedContacts ? JSON.parse(savedContacts) : [];
        this.contactsSubject = new BehaviorSubject<any[]>(initialContacts);
    }

    getContacts(): Observable<any[]> {
        return this.contactsSubject.asObservable();
      }
    getContactById(id:any){
        const currentContacts = this.contactsSubject.getValue()
        var res = currentContacts.find(contact => contact.id == id);
        return res;
    }
    addContact(contact:any){
        const currentContacts = this.contactsSubject.getValue();
        const updatedContacts = [...currentContacts, contact];
        this.contactsSubject.next(updatedContacts);
        localStorage.setItem('contacts', JSON.stringify(updatedContacts));
    }

    deleteOrRestoreSelectedContacts(selectedList:any[],isDelete:Boolean): void {
        const currentContacts = this.contactsSubject.getValue();
        const updatedContacts = currentContacts.map(contact => {
          if (selectedList.includes(contact)) {
            return { ...contact, deleted: isDelete };
          }
          return contact;
        });
        this.contactsSubject.next(updatedContacts);
        localStorage.setItem('contacts', JSON.stringify(updatedContacts));
      }

      deleteOrRestorContact(contact: any,isDelete:Boolean): void {
        const currentContacts = this.contactsSubject.getValue();
        const updatedContacts = currentContacts.map(c => {
          if (c.id === contact.id) {
            return { ...c, deleted: isDelete };
          }
          return c;
        });
        this.contactsSubject.next(updatedContacts);
        localStorage.setItem('contacts', JSON.stringify(updatedContacts));
      }
      addOrRemoveFavorite(contact: any,isFavorite:Boolean): void {
        const currentContacts = this.contactsSubject.getValue();
        const updatedContacts = currentContacts.map(c => {
          if (c.id === contact.id) {
            return { ...c, favorite: isFavorite };
          }
          return c;
        });
        this.contactsSubject.next(updatedContacts);
        localStorage.setItem('contacts', JSON.stringify(updatedContacts));
      }
}