import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrimaryButtonComponent } from '../../shared/components/primary-button/primary-button.component';
import { LanguageService } from '../../shared/services/language.service';

@Component({
    selector: 'app-rch-info',
    standalone: true,
    imports: [CommonModule, PrimaryButtonComponent],
    templateUrl: './rch-info.component.html',
    styleUrl: './rch-info.component.css'
})
export class RchInfoComponent {
    langService = inject(LanguageService);
    get content() { return this.langService.content().rchInfo; }
}
