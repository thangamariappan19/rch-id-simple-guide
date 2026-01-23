import { Routes } from '@angular/router';
import { LandingComponent } from './features/landing/landing.component';
import { RchInfoComponent } from './features/rch-info/rch-info.component';
import { PreparationComponent } from './features/preparation/preparation.component';
import { HospitalFlowComponent } from './features/hospital-flow/hospital-flow.component';
import { FaqComponent } from './features/faq/faq.component';
import { DisclaimerComponent } from './features/disclaimer/disclaimer.component';

export const routes: Routes = [
    { path: '', component: LandingComponent },
    { path: 'rch-info', component: RchInfoComponent },
    { path: 'preparation', component: PreparationComponent },
    { path: 'hospital-flow', component: HospitalFlowComponent },
    { path: 'faq', component: FaqComponent },
    { path: 'disclaimer', component: DisclaimerComponent },
    { path: '**', redirectTo: '' }
];
