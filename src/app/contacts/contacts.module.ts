import { NgModule } from "@angular/core";
import { ContactsComponent } from "./contacts.component";
import { CommonModule } from "@angular/common";
import { RouterModule, Routes } from "@angular/router";
import { ContactsListComponent } from "./contacts-list/contacts-list.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { SearchPipe } from "../pipes/search.pipe";
import { ContactsUpsertComponent } from "./contacts-upsert/contacts-upsert.component";
import { ContactsDetailsComponent } from "./contacts-details/contacts-details.component";
import { FavoriteContactsComponent } from "./favorite-contacts/favorite-contacts.component";
const routes: Routes = [
    {
        path: '',
        component: ContactsComponent,
        children: [
            { path: '', component: ContactsListComponent },
            { path: 'favorites', component: FavoriteContactsComponent},
            { path: ':key', component: ContactsDetailsComponent},
        ]
    }
]
@NgModule({
    declarations: [
      ContactsComponent,
      ContactsListComponent,
      ContactsUpsertComponent,
      ContactsDetailsComponent,
      FavoriteContactsComponent
    ],
    imports: [
      CommonModule,
      RouterModule.forChild(routes),
      ReactiveFormsModule,
      FormsModule,
      SearchPipe
    ]
  })
  export class ContactsModule {}