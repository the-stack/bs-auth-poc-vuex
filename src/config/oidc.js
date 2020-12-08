/*
export const oidcSettings = {
  authority: 'https://accounts.google.com',
  clientId: '500371192883-0i7pip8cetf33kn55sgiimg42qulbv35.apps.googleusercontent.com',
  redirectUri: 'http://localhost:8080/callback',
  popupRedirectUri: 'http://localhost:8080/oidc-popup-callback',
  responseType: 'id_token token',
  scope: 'openid profile',
  automaticSilentRenew: true,
  automaticSilentSignin: false,
  silentRedirectUri: 'http://localhost:8080/silent-renew-oidc.html'
}
*/
export const oidcSettings = {
  authority: 'https://pocid-id.bluesign.com',
  clientId: 'pocid',
  redirectUri: 'http://localhost:8080/callback',
  popupRedirectUri: 'http://localhost:8080/oidc-popup-callback',
  responseType: 'id_token token',
  scope: 'openid profile',
  automaticSilentRenew: true,
  automaticSilentSignin: false,
  silentRedirectUri: 'http://localhost:8080/silent-renew-oidc.html'
}
