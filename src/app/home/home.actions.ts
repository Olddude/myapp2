import { createAction, props } from '@ngrx/store';

export const setTheme = createAction(
  '[MYAPP2] [Home] Set Theme',
  props<{ theme: 'light' | 'dark' }>()
);

export const setLanguage = createAction(
  '[MYAPP2] [Home] Set Language',
  props<{ language: string }>()
);

export const toggleNotifications = createAction(
  '[MYAPP2] [Home] Toggle Notifications'
);

export const resetSettings = createAction('[MYAPP2] [Home] Reset Settings');