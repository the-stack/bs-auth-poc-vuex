const base = 'http://localhost:8080/'

export const oidcSettings = {
  authority: 'https://accounts.google.com',
  clientId: '500371192883-0i7pip8cetf33kn55sgiimg42qulbv35.apps.googleusercontent.com',
  redirectUri: base + 'callback',
  popupRedirectUri: base + 'oidc-popup-callback',
  responseType: 'id_token token',
  scope: 'openid profile',
  automaticSilentRenew: true,
  automaticSilentSignin: false,
  silentRedirectUri: base + 'silent-renew-oidc.html'
}

/*
export const oidcSettings = {
authority: 'https://pocid-id.bluesign.com',
clientId: 'pocid',
redirectUri: base + 'callback',
popupRedirectUri: base + 'oidc-popup-callback',
responseType: 'id_token token',
scope: 'openid profile',
automaticSilentRenew: true,
automaticSilentSignin: false,
silentRedirectUri: base + 'silent-renew-oidc.html'
}
*/
