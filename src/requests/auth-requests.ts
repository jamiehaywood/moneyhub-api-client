import { AuthRequests, AuthRequestsParams } from '../types/requests/auth-requests';

export default ({ config, request }: AuthRequestsParams): AuthRequests => {
  const { identityServiceUrl } = config;
  const authRequestEndpoint = identityServiceUrl + '/auth-requests';

  return {
    createAuthRequest: async ({
      redirectUri,
      payment,
      reversePayment,
      standingOrder,
      userId,
      connectionId,
      categorisationType,
      scope,
      permissions,
    }) =>
      request(authRequestEndpoint, {
        method: 'POST',
        cc: {
          scope: 'auth_requests:write',
        },
        body: {
          redirectUri,
          payment,
          reversePayment,
          standingOrder,
          userId,
          connectionId,
          scope,
          categorisationType,
          permissions,
        },
      }),

    completeAuthRequest: async ({ id, authParams }) =>
      request(`${authRequestEndpoint}/${id}`, {
        method: 'PATCH',
        cc: {
          scope: 'auth_requests:write',
        },
        body: {
          authParams,
        },
      }),

    getAllAuthRequests: async (params) =>
      request(authRequestEndpoint, {
        searchParams: params,
        cc: {
          scope: 'auth_requests:read',
        },
      }),

    getAuthRequest: async ({ id }) =>
      request(`${authRequestEndpoint}/${id}`, {
        cc: {
          scope: 'auth_requests:read',
        },
      }),
  };
};
