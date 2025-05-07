import express from 'express';
import propertiesRoute from './routes/properties.mjs'
import charterRoute from './routes/charters.mjs'
import rentalRoute from './routes/rentals.mjs'
import serviceRoute from './routes/services.mjs'
const app = express();
const port = 3000;

// Form routes
app.use('/properties', propertiesRoute);
app.use('/charters', charterRoute);
app.use('/rentals', rentalRoute);
app.use('/services', serviceRoute);

app.listen(port, () => {
    console.log(`Server listening on port ${3000}`)
})