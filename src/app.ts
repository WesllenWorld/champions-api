import express, { json } from "express"
import router from "./routes/routes"
import cors from 'cors'

function createApp() {
    const app = express()

    app.use(json())
    app.use('/api', router)
    app.use(cors())

    // Add your own middleware here
    const corsOptions = {
        origin: ['http://sitedaora.com', 'http://pongkrell.com'],
        methods: ['GET', 'POST'],
    }
    app.use(cors(/*corsOptions*/))

    return app
}

export default createApp
