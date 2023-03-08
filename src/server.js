const dotenv = require('dotenv');
const cors = require('cors');
const bodyParser = require('body-parser');
const express = require('express');
const cookieParser = require('cookie-parser');
const swaggerUi = require('swagger-ui-express');
console.log('swagger-UI');
const swaggerDocument = require('./swagger/doc');
console.log('swagger-UI');
const router = require('./routes');

const app = express();
const port = process.env.PORT || 3000;
// env
dotenv.config();

// cors
app.use(cors());
app.options('*', cors());
// body-parser

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// cookie-parser
app.use(cookieParser());
// app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
app.use('/api', router);

app.listen(port, () => {
    console.log(`App is running http://localhost:${port}/api-docs`);
});
