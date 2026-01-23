import { Component, Input, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

export interface AccordionItem {
    question: string;
    answer: string;
}

@Component({
    selector: 'app-accordion',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './accordion.component.html',
    styleUrl: './accordion.component.css'
})
export class AccordionComponent {
    @Input({ required: true }) items: AccordionItem[] = [];

    expandedIndex = signal<number | null>(null);

    toggle(index: number) {
        if (this.expandedIndex() === index) {
            this.expandedIndex.set(null);
        } else {
            this.expandedIndex.set(index);
        }
    }
}
