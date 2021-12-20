import { AuthConfig } from 'angular-oauth2-oidc';

export const authCodeFlowConfig: AuthConfig = {
  issuer: 'https://cognito-idp.eu-central-1.amazonaws.com/eu-central-1_HyEsakxFN',

  redirectUri: window.location.origin,

  clientId: '4qu0ek50mf6d43vtuigboth0pk',

  responseType: 'token',

  scope: 'openid email btp-resource-server/*',

  showDebugInformation: true,

  strictDiscoveryDocumentValidation: false
};
