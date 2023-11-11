// common/clientBuilder.ts

import { createClient } from '@commercetools/sdk-client';
import { createHttpMiddleware } from '@commercetools/sdk-middleware-http';
import { createAuthMiddlewareForClientCredentials } from '@commercetools/sdk-middleware-auth';

const client = createClient({
  middlewares: [
    createAuthMiddlewareForClientCredentials({
      host: process.env.CT_AUTH_URL,
      projectKey: process.env.CT_PROJECT_KEY,
      credentials: {
        clientId: process.env.CT_CLIENT_ID,
        clientSecret: process.env.CT_CLIENT_SECRET,
      },
      scopes: process.env.CT_SCOPES ? process.env.CT_SCOPES.split(' ') : [],
    }),
    createHttpMiddleware({ host: process.env.CT_API_URL }),
  ],
});

export default client;
