module.exports = ({config, request}) => {
  const {identityServiceUrl} = config
  const usersEndpoint = identityServiceUrl.replace("oidc", "users")

  return {
    registerUser: async (clientUserId) =>
      request(usersEndpoint, {
        method: "POST",
        cc: {
          scope: "user:create",
        },
        body: {clientUserId},
      }),

    getUsers: async (params) =>
      request(usersEndpoint, {
        searchParams: params,
        cc: {
          scope: "user:read",
        },
      }),

    getUser: async (id) =>
      request(`${usersEndpoint}/${id}`, {
        cc: {
          scope: "user:read",
        },
      }),

    getUserConnections: async (userId) =>
      request(`${usersEndpoint}/${userId}/connections`, {
        cc: {
          scope: "user:read",
        },
      }),

    deleteUserConnection: async (userId, connectionId) =>
      request(`${usersEndpoint}/${userId}/connections/${connectionId}`, {
        method: "DELETE",
        returnStatus: true,
        cc: {
          scope: "user:delete",
        },
      }),

    deleteUser: async (userId) =>
      request(`${usersEndpoint}/${userId}`, {
        method: "DELETE",
        returnStatus: true,
        cc: {
          scope: "user:read",
        },
      }),
  }
}
