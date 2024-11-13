import express from 'express';
import { config } from 'dotenv';
import { StatusCodes } from 'http-status-codes';
import connectToDb from './config/dbConfig';

config();

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
const PORT = process.env.PORT || 5000;


app.get('/ping', (req, res) => {
    return res.status(StatusCodes.OK).json({ message: 'pong' });
})
app.listen(PORT,async (req, res) => {
    await connectToDb()
    console.log(`Server running on port http://localhost:${PORT}`);
})

export default app;