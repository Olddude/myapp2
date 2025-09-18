import { createFeature, createReducer, on } from '@ngrx/store';
import * as HomeActions from './home.actions';
import { HomeState } from '.';

export const initialHomeState: HomeState = {
  theme: 'light',
  language: 'en',
  notifications: true,
};

export const homeReducer = createReducer(
  initialHomeState,
  on(HomeActions.setTheme, (state, { theme }) => ({
    ...state,
    theme,
  })),
  on(HomeActions.setLanguage, (state, { language }) => ({
    ...state,
    language,
  })),
  on(HomeActions.toggleNotifications, (state) => ({
    ...state,
    notifications: !state.notifications,
  })),
  on(HomeActions.resetSettings, () => initialHomeState)
);

export const homeFeature = createFeature({
  name: 'home',
  reducer: homeReducer,
});
