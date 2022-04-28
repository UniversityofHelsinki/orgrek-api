import swaggerJsdoc from 'swagger-jsdoc';

// https://swagger.io/docs/specification/2-0/basic-structure/
const options = {
    swaggerDefinition: {
        openapi: '3.0.1',
        info: {
            title: 'Organisaatiorekisteri Public API',
            version: '1.0.0',
            description: 'Organisaatiorekisteri Public API documentation',
        },
        securityDefinitions : {
            Apikey : {
                description : 'APIKey Auth',
                type : 'apiKey',
                name : 'X-Api-Key',
                in : 'header'
            }
        },
    },
    // List of files to be processed.
    apis: ['./api/routes.js'],
};

const apiSpecs = swaggerJsdoc(options);

export default apiSpecs;
