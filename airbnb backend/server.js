import express from 'express';
import { config } from 'dotenv';
config();

const app = express();

const PORT = process.env.PORT || 5000;
app.use(express.json());


app.get('/ping', (req, res) => {
    res.send('pong!');
})
app.listen(PORT, (req, res) => {
    console.log('Server running on port 3000');
})

export default app;