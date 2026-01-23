import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrimaryButtonComponent } from '../../shared/components/primary-button/primary-button.component';
import { ChecklistItemComponent } from '../../shared/components/checklist-item/checklist-item.component';
import { LanguageService } from '../../shared/services/language.service';

@Component({
    selector: 'app-preparation',
    standalone: true,
    imports: [CommonModule, PrimaryButtonComponent, ChecklistItemComponent],
    templateUrl: './preparation.component.html',
    styleUrl: './preparation.component.css'
})
export class PreparationComponent {
    langService = inject(LanguageService);
    get content() { return this.langService.content().preparation; }
}
