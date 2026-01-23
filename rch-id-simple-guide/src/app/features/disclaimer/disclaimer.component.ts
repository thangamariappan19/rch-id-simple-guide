import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrimaryButtonComponent } from '../../shared/components/primary-button/primary-button.component';
import { LanguageService } from '../../shared/services/language.service';

@Component({
    selector: 'app-disclaimer',
    standalone: true,
    imports: [CommonModule, PrimaryButtonComponent],
    templateUrl: './disclaimer.component.html',
    styleUrl: './disclaimer.component.css'
})
export class DisclaimerComponent {
    langService = inject(LanguageService);
    get content() { return this.langService.content().disclaimer; }
}
