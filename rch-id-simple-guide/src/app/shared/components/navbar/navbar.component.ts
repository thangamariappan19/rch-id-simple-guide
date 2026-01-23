import { Component, inject } from '@angular/core';
import { CommonModule, Location } from '@angular/common';
import { Router, RouterLink, NavigationEnd } from '@angular/router';
import { LanguageService } from '../../services/language.service';
import { filter } from 'rxjs/operators';

@Component({
    selector: 'app-navbar',
    standalone: true,
    imports: [CommonModule, RouterLink],
    templateUrl: './navbar.component.html',
    styleUrl: './navbar.component.css'
})
export class NavbarComponent {
    langService = inject(LanguageService);
    location = inject(Location);
    router = inject(Router);

    showMobileNav = false;
    isLandingPage = true;

    constructor() {
        this.router.events.pipe(
            filter(event => event instanceof NavigationEnd)
        ).subscribe((event: any) => {
            this.isLandingPage = event.urlAfterRedirects === '/' || event.urlAfterRedirects === '';
        });
    }

    get common() { return this.langService.content().common; }

    goBack() {
        this.location.back();
    }
}
