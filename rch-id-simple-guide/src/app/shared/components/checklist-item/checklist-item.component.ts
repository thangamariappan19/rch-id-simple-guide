import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-checklist-item',
    standalone: true,
    templateUrl: './checklist-item.component.html',
    styleUrl: './checklist-item.component.css'
})
export class ChecklistItemComponent {
    @Input({ required: true }) text!: string;
}
