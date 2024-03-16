import { HardhatUserConfig } from 'hardhat/config'
import '@nomicfoundation/hardhat-toolbox'
import '@typechain/hardhat'
import dotenv from 'dotenv'

dotenv.config()

const PRIVATE_KEY = process.env.PRIVATE_KEY ?? ''
const MUMBAI_RPC_URL = process.env.MUMBAI_RPC_URL ?? ''
const MATIC_RPC_URL = process.env.MATIC_RPC_URL ?? ''
const ARBITRUM_RPC_URL = process.env.ARBITRUM_RPC_URL ?? ''

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
  },
  typechain: {
    outDir: './typechain-types',
    target: 'ethers-v6',
    alwaysGenerateOverloads: false, // should overloads with full signatures like deposit(uint256) be generated always, even if there are no overloads?
    dontOverrideCompile: false // defaults to false
  }
}

export default config
