import React from 'react';
import ReactDOM from 'react-dom/client';

import { createCtx } from '@reatom/core';
import { connectLogger } from '@reatom/framework';
import { reatomContext } from '@reatom/npm-react';
import { GoogleOAuthProvider } from '@react-oauth/google';

import App from './app';

const ctx = createCtx();
connectLogger(ctx);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <reatomContext.Provider value={ctx}>
    <GoogleOAuthProvider clientId="937624129937-g79ho1q3ifo45guo3fm126no27jgkgd4.apps.googleusercontent.com">
      <App />
    </GoogleOAuthProvider>
  </reatomContext.Provider>,
);
