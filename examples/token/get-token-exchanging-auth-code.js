const Moneyhub = require("../../src/index")
const config = require("../config")

const {DEFAULT_STATE} = require("../constants")

console.log("\n\nUsage: `node get-token-exchanging-auth-code.js code state[optional]` \n\n")

const [code, state = DEFAULT_STATE] = process.argv.slice(2)

if (!code) throw new Error("Code needs to be provided")

const start = async () => {
  try {
    const moneyhub = await Moneyhub(config)

    const result = await moneyhub.exchangeCodeForTokens({
      state,
      code,
    })
    console.log(JSON.stringify(result, null, 2))
  } catch (e) {
    console.log(e)
  }
}

start()
