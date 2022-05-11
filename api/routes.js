import { texts } from '../api/api-db.js';
import { steeringGroups } from "./api-ou-service.js";
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
     *     /v1/texts/:
     *     get:
     *       security:
     *         - Apikey: []
     *       tags:
     *         - retrieve
     *       summary: Return all texts
     *       description: Return all texts
     *       responses:
     *         200:
     *           description: all texts
     *         default:
     *           description: Unexpected error
     */
    router.get(`/${API_VERSION_1}/texts`, texts);

    /**
     * @swagger
     *     /v1/steering/:
     *     get:
     *       security:
     *         - Apikey: []
     *       tags:
     *         - retrieve
     *       summary: Returns all steeringGroups for degree programmes
     *       description: Return all steering groups
     *       responses:
     *         200:
     *           description: all steering groups
     *         default:
     *           description: Unexpected error
     */
    router.get(`/${API_VERSION_1}/steering`, steeringGroups);


};

export default router;

