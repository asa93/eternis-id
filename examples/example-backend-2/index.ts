import { Reclaim } from '@reclaimprotocol/js-sdk'
import cors from 'cors'
import dotenv from 'dotenv'
import express, { Express, Request, Response } from 'express'
import { credentials } from './reclaim-credentials'

dotenv.config()
const app: Express = express()
const port = process.env.PORT || 8000
//const callbackUrl = process.env.CALLBACK_URL + '/callback/'

app.use(express.json())
app.use(cors())

app.get('/', (req: Request, res: Response) => {
    res.send('Hello World!')
})

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`)
})


const { appId, appSecret, providerId } = credentials[0]

app.get('/request', async (_, res: Response) => {
    try {
        const reclaimClient = new Reclaim.ProofRequest(
            appId //TODO: replace with your applicationI
        )
        await reclaimClient.buildProofRequest(providerId)

        reclaimClient.setSignature(
            await reclaimClient.generateSignature(
                appSecret //TODO : replace with your APP_SECRET
            )
        )

        const { requestUrl, statusUrl } = await reclaimClient.createVerificationRequest()
        res.send({ reclaimUrl: requestUrl, statusUrl })
    } catch (e: any) {
        res.status(400).send(e.toString())
    }

})
