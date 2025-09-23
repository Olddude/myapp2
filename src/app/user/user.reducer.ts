import { createFeature, createReducer, on } from '@ngrx/store';
import * as UserActions from './user.actions';
import { initialUserState } from '.';

export const userReducer = createReducer(
  initialUserState,
  on(UserActions.login, (state) => ({
    ...state,
    loading: true,
    error: null,
  })),
  on(UserActions.loginSuccess, (state, { user }) => ({
    ...state,
    currentUser: user,
    isAuthenticated: true,
    loading: false,
    error: null,
  })),
  on(UserActions.loginFailure, (state, { error }) => ({
    ...state,
    currentUser: null,
    isAuthenticated: false,
    loading: false,
    error,
  })),
  on(UserActions.logout, () => initialUserState),
  on(UserActions.updateUser, (state, { user }) => ({
    ...state,
    currentUser: user,
  })),
  on(UserActions.clearError, (state) => ({
    ...state,
    error: null,
  }))
);

export const userFeature = createFeature({
  name: 'myapp2-user',
  reducer: userReducer,
});
