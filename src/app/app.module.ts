import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ContactsComponent } from './contacts/contacts.component';
import { HttpClientModule } from '@angular/common/http'; // For API calls
import { FormsModule } from '@angular/forms'; // For two-way binding if needed
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { routes } from './app.routes';
import { NavbarComponent } from './navbar/navbar.component';
import { DarkModeService } from './contacts/services/dark-mode.service';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    HttpClientModule,
    FormsModule,
    NavbarComponent
  ],
  providers: [DarkModeService],
  bootstrap: [AppComponent]
})
export class AppModule { }