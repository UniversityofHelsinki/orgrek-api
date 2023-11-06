import { steeringGroups, degreeProgrammes, humanResources, texts, researchGroups, financeUnits, educationUnits, officialUnits, concernGroups } from "./api-db.js";
import { API_VERSION_1 } from '../utils/constants.js';
import { readFileSync } from "fs";

import swaggerUi from 'swagger-ui-express';
const swaggerDocument = JSON.parse(readFileSync('./swagger.json'));

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
    router.get(`/${API_VERSION_1}/humanResources`, humanResources);
    router.get(`/${API_VERSION_1}/researchGroups`, researchGroups);
    router.get(`/${API_VERSION_1}/financeUnits`, financeUnits);
    router.get(`/${API_VERSION_1}/educationUnits`, educationUnits);
    router.get(`/${API_VERSION_1}/officialUnits`, officialUnits);
    router.get(`/${API_VERSION_1}/UniversityOfHelsinkiGroup`, concernGroups);

    router.get(`/${API_VERSION_1}/texts`, texts);

};

export default router;

