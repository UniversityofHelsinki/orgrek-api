import { steeringGroups, degreeProgrammes, texts } from "./api-db.js";
import { API_VERSION_1 } from '../utils/constants.js';

import swaggerUi from 'swagger-ui-express';
import swaggerDocument from '../swagger.json' assert { type: "json" };

const router = (router) => {

    router.use(`/${API_VERSION_1}/swagger/document`, swaggerUi.serve);
    router.get(`/${API_VERSION_1}/swagger/document`, swaggerUi.setup(swaggerDocument));

    // return swagger.json so api-gateway can create swagger configuration based on this file
    router.get(`/${API_VERSION_1}/docs/swagger.json`, (req, res) => {
        res.setHeader('Content-Type', 'application/json');
        res.send(swaggerDocument);
    });

    router.get(`/${API_VERSION_1}/steeringGroups`, steeringGroups);

    router.get(`/${API_VERSION_1}/degreeProgrammes/:id`, degreeProgrammes);

    router.get(`/${API_VERSION_1}/texts`, texts);

};

export default router;

