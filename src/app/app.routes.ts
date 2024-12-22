import { Routes } from '@angular/router';
import { ContactsComponent } from './contacts/contacts.component';

export const routes: Routes = [
    { path: 'contacts', loadChildren: () => import('./contacts/contacts.module').then(m => m.ContactsModule) },
    { path: '', redirectTo: 'contacts', pathMatch: 'full' },
    // { path: 'contacts/:id', component: ContactDetailsComponent }
];
