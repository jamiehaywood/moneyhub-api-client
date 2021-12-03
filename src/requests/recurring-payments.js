module.exports = ({config, request}) => {
  const {identityServiceUrl} = config

  const getRecurringPayment = ({id}) =>
    request(`${identityServiceUrl}/recurring-payments/${id}`, {
      cc: {
        scope: "recurring_payment:read",
      },
    })

  return {
    getRecurringPayment,
    getRecurringPayments: (params = {}) =>
      request(`${identityServiceUrl}/recurring-payments`, {
        searchParams: params,
        cc: {
          scope: "recurring_payment:read",
        },
      }),
    makeRecurringPayment: async ({recurringPaymentId, payment}) =>
      request(`${identityServiceUrl}/recurring-payments/${recurringPaymentId}/pay`, {
        method: "POST",
        body: payment,
        cc: {
          scope: "recurring_payment:create",
        },
      }),
  }
}
