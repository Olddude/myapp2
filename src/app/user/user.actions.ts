import { createAction, props } from '@ngrx/store';
import { User } from '.';

export const login = createAction(
  '[MYAPP2] [User] Login',
  props<{ email: string; password: string }>()
);

export const loginSuccess = createAction(
  '[MYAPP2] [User] Login Success',
  props<{ user: User }>()
);

export const loginFailure = createAction(
  '[MYAPP2] [User] Login Failure',
  props<{ error: string }>()
);

export const logout = createAction('[MYAPP2] [User] Logout');

export const updateUser = createAction(
  '[MYAPP2] [User] Update User',
  props<{ user: User }>()
);

export const clearError = createAction('[MYAPP2] [User] Clear Error');