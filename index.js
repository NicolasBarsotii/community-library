import express from 'express'
import 'dotenv/config'
import './src/service/cron.service.js'
import { routers } from './src/routes/index.js';

const app = express()

const port = process.env.PORT || 3000

app.use(express.json());
app.use(routers)

app.listen(3000, () => {
    console.log(`Server is running on port 3000 ${port}`)
});