const Moneyhub = require("../../src/index")
const config = require("../config")
const {DEFAULT_DATA_SCOPES} = require("../constants")

console.log("\n\nUsage: `node get-accounts.js userId` \n\n")

const [userId] = process.argv.slice(2)

const start = async () => {
  try {
    const moneyhub = await Moneyhub(config)

    const tokens = await moneyhub.getClientCredentialTokens({
      scope: DEFAULT_DATA_SCOPES,
      sub: userId,
    })
    console.log(JSON.stringify(tokens, null, 2))
    const {access_token: accessToken} = tokens

    const result = await moneyhub.getAccounts(accessToken)
    console.log(JSON.stringify(result, null, 2))

  } catch (e) {
    console.log(e)
  }
}

start()
