import React from 'react';
import ReactDOM from 'react-dom/client';

import { createCtx } from '@reatom/core';
import { connectLogger } from '@reatom/framework';
import { reatomContext } from '@reatom/npm-react';

import App from './app';

const ctx = createCtx();
connectLogger(ctx);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <reatomContext.Provider value={ctx}>
    <App />
  </reatomContext.Provider>,
);
