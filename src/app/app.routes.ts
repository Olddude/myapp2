import { loadRemoteModule } from '@angular-architects/native-federation';
import { Route } from '@angular/router';
import { userFeature } from './user/user.reducer';
import { provideState } from '@ngrx/store';
import { UserEffects } from './user/user.effects';
import { provideEffects } from '@ngrx/effects';
import { homeFeature } from './home/home.reducer';
import { HomeEffects } from './home/home.effects';

export const appRoutes: Route[] = [
    {
        path: '',
        loadComponent: () => import('./home/home.page').then(m => m.HomePage),
        providers: [
            provideState(homeFeature),
            provideEffects([HomeEffects])
        ]
    },
    {
        path: 'user',
        loadComponent: () => import('./user/user.page').then(m => m.UserPage),
        providers: [
            provideState(userFeature),
            provideEffects([UserEffects])
        ]
    },
    {
        path: 'myapp',
        loadComponent: () => loadRemoteModule('myapp', './App'),
        loadChildren: () => loadRemoteModule('myapp', './Routes')
    }
];
