const swaggerJSDoc = require('swagger-jsdoc');
const dotenv = require('dotenv');

dotenv.config();

const swaggerDefinition = {
    info: {
        title: 'API HOTEL',
        version: '1.0.0',
        description: 'This is the REST API for project HOTEL',
    },
    host: 'localhost:' + process.env.PORT,
    basePath: '/api',
    tags: [
        {
            name: '[USER]: user',
            description: 'Thông tin user',
        },
    ],
    securityDefinitions: {
        Bearer: {
            type: 'apiKey',
            schema: 'bearer',
            name: 'Authorization',
            in: 'header',
            prefix: 'Bearer ',
        },
    },
    definitions: {},
};

const options = {
    swaggerDefinition,
    explorer: true,
    apis: ['**/*/routes/*.js'],
};
const swagger = swaggerJSDoc(options);

module.exports = swagger;
