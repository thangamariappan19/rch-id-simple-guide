import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrimaryButtonComponent } from '../../shared/components/primary-button/primary-button.component';
import { LanguageService } from '../../shared/services/language.service';

@Component({
    selector: 'app-landing',
    standalone: true,
    imports: [CommonModule, PrimaryButtonComponent],
    templateUrl: './landing.component.html',
    styleUrl: './landing.component.css'
})
export class LandingComponent {
    langService = inject(LanguageService);

    get content() { return this.langService.content().landing; }
}
