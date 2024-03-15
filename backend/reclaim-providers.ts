type ReclaimProvider = {
    provider: string
    providerId: string
    description: string
    juridictionId: string
}

export const credentials: ReclaimProvider[] = [
    {
        provider: 'amazon',
        providerId: '5f83ab14-9656-4552-9fbc-482e07022766',
        description: 'number of orders',
        juridictionId: '0098967F' // 🚨 tbd
    },
    {
        provider: 'github',
        providerId: '61f75e73-0bb5-42a9-8a43-d6ac4434487b',
        description: 'repo contribution',
        juridictionId: '0098967F' // 🚨 tbd
    },
    {
        provider: 'ameli.fr',
        providerId: '127a8416-4e63-4b18-bba2-c2e53bc46ff6',
        description: 'valid ameli account',
        juridictionId: '0098967F' //🚨 tbd
    },


]
