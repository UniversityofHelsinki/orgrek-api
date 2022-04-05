import 'dotenv/config';
import express  from 'express';
const app = express();
import helmet from 'helmet';
import compression from 'compression';
import routes from './api/routes.js';
const router = express.Router();

const ipaddress = process.env.OPENSHIFT_NODEJS_IP || '127.0.0.1';
const port = process.env.OPENSHIFT_NODEJS_PORT || 3003;

app.use(compression());
app.use(helmet());

app.use('/public', router);
routes(router);

app.listen(port, ipaddress, () => {
    console.log( 'Listening on ' + ipaddress + ', port ' + port );
});
