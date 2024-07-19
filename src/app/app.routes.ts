import { Routes } from '@angular/router';
import { MainSheetComponent } from './components/main/main-sheet/main-sheet.component';

export const routes: Routes = [

    {
        path: ':folder',
        component: MainSheetComponent,
    }

];
