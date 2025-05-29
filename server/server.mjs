import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';

// Api Routes
import propertiesRoute from './routes/properties.mjs';
import charterRoute from './routes/charters.mjs';
import rentalRoute from './routes/rentals.mjs';
import serviceRoute from './routes/services.mjs';
import footerRoute from './routes/footer.mjs';
import subscriberRoute from './routes/subscribers.mjs'
import chroniclesRoute from './routes/chronicles.mjs'

const app = express();
dotenv.config();
app.use(cors())
app.use(express.json());
const port = process.env.PORT || 3000

// Form routes
app.use('/properties', propertiesRoute);
app.use('/charters', charterRoute);
app.use('/rentals', rentalRoute);
app.use('/services', serviceRoute);
app.use('/footer', footerRoute);
app.use('/subscriber', subscriberRoute);
app.use('/chronicles/api', chroniclesRoute)

app.listen(port, () => {
    console.log(`Server listening on port ${port}`)
})