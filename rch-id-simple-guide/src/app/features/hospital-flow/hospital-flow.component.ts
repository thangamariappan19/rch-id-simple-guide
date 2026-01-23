import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrimaryButtonComponent } from '../../shared/components/primary-button/primary-button.component';
import { StepCardComponent } from '../../shared/components/step-card/step-card.component';
import { LanguageService } from '../../shared/services/language.service';

@Component({
    selector: 'app-hospital-flow',
    standalone: true,
    imports: [CommonModule, PrimaryButtonComponent, StepCardComponent],
    templateUrl: './hospital-flow.component.html',
    styleUrl: './hospital-flow.component.css'
})
export class HospitalFlowComponent {
    langService = inject(LanguageService);
    get content() { return this.langService.content().hospitalFlow; }
}
