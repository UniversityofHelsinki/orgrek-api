import { texts } from '../api/api-db.js';
import { API_VERSION_1 } from '../utils/constants.js';

const router = (router) => {
    router.get(`/${API_VERSION_1}/texts`, texts);
};

export default router;

