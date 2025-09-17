import { Route } from '@angular/router';
import { loadRemoteModule } from '@angular-architects/native-federation';

export const appRoutes: Route[] = [
    {
        path: '',
        redirectTo: 'user',
        pathMatch: 'full'
    },
    {
        path: 'user',
        loadComponent: () => import('./user/user.page').then(m => m.UserPage)
    },
    {
        path: 'settings',
        loadComponent: () => import('./settings/settings.page').then(m => m.SettingsPage)
    }
];
