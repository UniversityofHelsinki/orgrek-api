import { texts } from '../api/api-db.js';
import { API_VERSION_1 } from '../utils/constants.js';

import swaggerUi from 'swagger-ui-express';
import apiSpecs from '../config/swagger.js'; // swagger config

const router = (router) => {

    router.use(`/${API_VERSION_1}/docs`, swaggerUi.serve);
    router.get(`/${API_VERSION_1}/docs`, swaggerUi.setup(apiSpecs));

    /**
     * @swagger
     *     /public/v1/texts/:
     *     get:
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
};

export default router;

