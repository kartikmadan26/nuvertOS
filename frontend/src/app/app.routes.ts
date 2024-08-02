import { Routes } from '@angular/router';
import { HomeScreenComponent } from './home-screen/home-screen.component';
import { CompoundDetailsComponent } from './compound-details/compound-details.component';
import { NewCompoundFormComponent } from './new-compound-form/new-compound-form.component';
export const routes: Routes = [
    { path: '', component: HomeScreenComponent },
    { path: 'detail/:id', component: CompoundDetailsComponent },
    { path: 'addNewCompound', component: NewCompoundFormComponent },
    { path: '**', redirectTo: '/' },
];
