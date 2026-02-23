import { Injectable, signal, computed, effect, inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { TRANSLATIONS } from '../../../assets/i18n/translations';

@Injectable({
    providedIn: 'root'
})
export class LanguageService {
    private document = inject(DOCUMENT);
    // Defaulting to Tamil as it is the primary audience language in TN context
    readonly currentLang = signal<'ta' | 'en'>('ta');

    readonly content = computed(() => {
        return TRANSLATIONS[this.currentLang()];
    });

    constructor() {
        effect(() => {
            const lang = this.currentLang();
            this.document.documentElement.lang = lang;
            this.document.body.setAttribute('data-lang', lang);
        });
    }

    toggle() {
        this.currentLang.update(lang => lang === 'en' ? 'ta' : 'en');
    }
}
