import { AuthConfig } from 'angular-oauth2-oidc';

export const authCodeFlowConfig: AuthConfig = {
  issuer: 'https://cognito-idp.eu-central-1.amazonaws.com/eu-central-1_srbZ5NeNA',

  redirectUri: window.location.origin,

  clientId: '4684givf35e3lbbn4hsui7p1qp',

  responseType: 'token',

  scope: 'openid email btp-resource-server/*',

  showDebugInformation: true,

  strictDiscoveryDocumentValidation: false
};
