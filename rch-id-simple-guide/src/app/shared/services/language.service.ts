import { Injectable, signal, computed } from '@angular/core';
import { TRANSLATIONS } from '../../../assets/i18n/translations';

@Injectable({
    providedIn: 'root'
})
export class LanguageService {
    // Defaulting to Tamil as it is the primary audience language in TN context
    readonly currentLang = signal<'ta' | 'en'>('ta');

    readonly content = computed(() => {
        return TRANSLATIONS[this.currentLang()];
    });

    toggle() {
        this.currentLang.update(lang => lang === 'en' ? 'ta' : 'en');
    }
}
