import express from 'express';
import dotenv from 'dotenv';
import propertiesRoute from './routes/properties.mjs';
import charterRoute from './routes/charters.mjs';
import rentalRoute from './routes/rentals.mjs';
import serviceRoute from './routes/services.mjs';
import footerRoute from './routes/footer.mjs';
import subscriberRoute from './routes/subscribers.mjs'
import cors from 'cors';

const app = express();
app.use(cors())
app.use(express.json());
dotenv.config();

const port = process.env.PORT || 3000

// Form routes
app.use('/properties', propertiesRoute);
app.use('/charters', charterRoute);
app.use('/rentals', rentalRoute);
app.use('/services', serviceRoute);
app.use('/footer', footerRoute);
app.use('/subscriber', subscriberRoute);

app.listen(port, () => {
    console.log(`Server listening on port ${port}`)
})