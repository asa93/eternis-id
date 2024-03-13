import { HardhatUserConfig } from 'hardhat/config'
import '@nomicfoundation/hardhat-toolbox'

import dotenv from 'dotenv'

dotenv.config()

const PRIVATE_KEY = process.env.PRIVATE_KEY ?? ''
const MUMBAI_RPC_URL = process.env.MUMBAI_RPC_URL ?? ''
const MATIC_RPC_URL = process.env.MATIC_RPC_URL ?? ''
const ARBITRUM_RPC_URL = process.env.ARBITRUM_RPC_URL ?? ''

console.log("MUMBAI_RPC_URL", MUMBAI_RPC_URL)
const config: HardhatUserConfig = {
  solidity: { compilers: [{ version: '0.8.19' }, { version: '0.8.20' }] },

  defaultNetwork: 'hardhat',

  networks: {
    matic: {
      url: MATIC_RPC_URL,
      accounts: [PRIVATE_KEY],
    },
    mumbai: {
      url: MUMBAI_RPC_URL,
      accounts: [PRIVATE_KEY],
    },
    hardhat: {
      // If you want to do some forking, uncomment this
      // forking: {
      //   url: MUMBAI_RPC_URL
      // }
    }
  }
}

export default config
