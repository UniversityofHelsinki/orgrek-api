
import swaggerJsdoc from 'swagger-jsdoc';
import router from "../api/routes.js";

// https://swagger.io/docs/specification/2-0/basic-structure/
const options = {
    swaggerDefinition: {
        info: {
            title: 'Organisaatiorekisteri Public API',
            version: '1.0.0',
            description: 'Organisaatiorekisteri Public API documentation',
        },
    },
    // List of files to be processed.
    apis: ['./api/routes.js'],
};

const apiSpecs = swaggerJsdoc(options);

export default apiSpecs;
