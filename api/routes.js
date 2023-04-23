import { steeringGroups } from "./api-ou-service.js";
import { degreeProgrammes, texts } from "./api-db.js";
import { API_VERSION_1 } from '../utils/constants.js';

import apiSpecs from '../config/swagger.js'; // swagger config

const router = (router) => {

    // return swagger.json so api-gateway can create swagger configuration based on this file
    router.get(`/${API_VERSION_1}/docs/swagger.json`, (req, res) => {
        res.setHeader('Content-Type', 'application/json');
        res.send(apiSpecs);
    });

    /**
     * @swagger
     *     /v1/degreeProgrammes/steeringGroups:
     *     get:
     *       security:
     *         - Apikey: []
     *       tags:
     *         - retrieve
     *       summary: Returns all steeringGroups for degree programmes
     *       description: Returns all steering groups for degree programmes
     *       responses:
     *         200:
     *           description: all steering groups
     *         default:
     *           description: Unexpected error
     */
    router.get(`/${API_VERSION_1}/degreeProgrammes/steeringGroups`, steeringGroups);

    router.get(`/${API_VERSION_1}/degreeProgrammes/:id`, degreeProgrammes);

    router.get(`/${API_VERSION_1}/texts`, texts);

};

export default router;

