import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-step-card',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './step-card.component.html',
    styleUrl: './step-card.component.css'
})
export class StepCardComponent {
    @Input() stepNumber: number = 0;
    @Input({ required: true }) title!: string;
    @Input({ required: true }) description!: string;
}
