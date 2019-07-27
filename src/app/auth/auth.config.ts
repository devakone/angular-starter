import { InjectionToken } from '@angular/core';

export const authFeatureKey = 'auth';

export const AUTH_CONFIGURATION = new InjectionToken<AuthConfiguration>('Auth configuration');
export interface AuthConfiguration {
  loginURI: string;
  loginApiUrl: string;
  headerName?: string;
  skipWhenExpired?: boolean;
  whitelistedDomains?: Array<string | RegExp>;
  blacklistedRoutes?: Array<string | RegExp>;
}

export const defaultAuthConfig: AuthConfiguration = {
  loginURI: 'login',
  loginApiUrl: 'login',
  headerName: 'Authorization',
  skipWhenExpired: true,
  whitelistedDomains: [],
  blacklistedRoutes: []
};
