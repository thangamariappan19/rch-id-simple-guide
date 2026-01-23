import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-primary-button',
    standalone: true,
    imports: [RouterLink, CommonModule],
    templateUrl: './primary-button.component.html',
    styleUrl: './primary-button.component.css'
})
export class PrimaryButtonComponent {
    @Input() route?: string;
    @Input() label: string = '';
}
