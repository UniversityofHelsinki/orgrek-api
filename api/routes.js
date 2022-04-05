import { texts } from '../api/api-db.js';

const router = (router) => {
    router.get('/v1/texts', texts);
};

export default router;

