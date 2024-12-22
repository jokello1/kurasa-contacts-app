import { Component, inject } from "@angular/core";
import { DarkModeService } from "../contacts/services/dark-mode.service";
import { CommonModule } from "@angular/common";

@Component({
    selector: 'app-navbar',
    templateUrl: './navbar.component.html',
    imports: [CommonModule]
})
export class NavbarComponent {

    darkModeService: DarkModeService = inject(DarkModeService);
    ngOnInit() {
        const savedTheme = localStorage.getItem('theme');
    }

    toggleTheme() {
        this.darkModeService.updateDarkMode()
        console.log(this.darkModeService.darkModeSignal())
    }

}