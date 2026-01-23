import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrimaryButtonComponent } from '../../shared/components/primary-button/primary-button.component';
import { AccordionComponent } from '../../shared/components/accordion/accordion.component';
import { LanguageService } from '../../shared/services/language.service';

@Component({
    selector: 'app-faq',
    standalone: true,
    imports: [CommonModule, PrimaryButtonComponent, AccordionComponent],
    templateUrl: './faq.component.html',
    styleUrl: './faq.component.css'
})
export class FaqComponent {
    langService = inject(LanguageService);
    get content() { return this.langService.content().faq; }
}
