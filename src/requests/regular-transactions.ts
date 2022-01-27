import { RegularTransactionsRequests, RegularTransactionsRequestsParams } from "../types/requests/regular-transactions";

export default ({ config, request }: RegularTransactionsRequestsParams): RegularTransactionsRequests => {
  const { resourceServerUrl } = config;

  return {
    getRegularTransactions: async ({ userId, params }) =>
      request(`${resourceServerUrl}/regular-transactions`, {
        searchParams: params,
        cc: {
          scope: "accounts:read regular_transactions:read transactions:read:all",
          sub: userId,
        },
      }),
  };
};
