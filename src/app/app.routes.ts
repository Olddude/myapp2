import { Route } from '@angular/router';
import { loadRemoteModule } from '@angular-architects/native-federation';

export const appRoutes: Route[] = [
    {
        path: 'user',
        loadComponent: () => import('./user/user.page').then(m => m.UserPage)
    },
    {
        path: 'settings',
        loadComponent: () => import('./settings/settings.page').then(m => m.SettingsPage)
    },
    {
        path: 'myapp',
        loadComponent: () =>
        loadRemoteModule({
            remoteEntry: 'http://localhost:4200/remoteEntry.json',
            exposedModule: './AppComponent'
        }).then(m => m.AppComponent)
    }
];
