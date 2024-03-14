import { http, createConfig } from 'wagmi'
import { base, mainnet, polygonMumbai } from 'wagmi/chains'
import { injected, metaMask, safe, walletConnect } from 'wagmi/connectors'

const projectId = '<WALLETCONNECT_PROJECT_ID>'

export const configz = createConfig({
    chains: [mainnet, base, polygonMumbai],
    connectors: [
        injected(),
        metaMask(),
    ],
    transports: {
        [mainnet.id]: http(),
        [base.id]: http(),
        [polygonMumbai.id]: http()
    },
})

export const reclaimContracts = {
    "mumbai": "0xd6534f52CEB3d0139b915bc0C3278a94687fA5C7"
}