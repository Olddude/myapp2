import { loadRemoteModule } from '@angular-architects/native-federation';
import { Route } from '@angular/router';

import { userProviders } from './user';
import { homeProviders } from './home';

export const appRoutes: Route[] = [
    {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
    },
    {
        path: 'home',
        loadComponent: () => import('./home/home.page').then(m => m.HomePage),
        providers: homeProviders
    },
    {
        path: 'user',
        loadComponent: () => import('./user/user.page').then(m => m.UserPage),
        providers: userProviders
    },
    {
        path: 'myapp',
        loadComponent: () => loadRemoteModule({
            remoteEntry: 'http://localhost:4200/remoteEntry.json',
            remoteName: 'myapp',
            exposedModule: './App'
        }),
        loadChildren: () => loadRemoteModule({
            remoteEntry: 'http://localhost:4200/remoteEntry.json',
            remoteName: 'myapp',
            exposedModule: './Routes'
        })
    },
    {
        path: '**',
        loadComponent: () => import('./not-found/not-found.page')
            .then(m => m.NotFoundPage)
    }
];
