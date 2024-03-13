import { HardhatUserConfig } from 'hardhat/config'
import '@nomicfoundation/hardhat-toolbox'

const PRIVATE_KEY = process.env.PRIVATE_KEY ?? ''
const MUMBAI_RPC_URL = process.env.MUMBAI_RPC_URL ?? ''

const config: HardhatUserConfig = {
  solidity: { compilers: [{ version: '0.8.19' }, { version: '0.8.20' }] },

  defaultNetwork: 'hardhat',

  networks: {
    mumbai: {
      url: MUMBAI_RPC_URL,
      accounts: [PRIVATE_KEY],
    },

  }
}

export default config
