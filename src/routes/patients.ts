import express from 'express';
import { getAllPatients } from '../controllers/patients';
const patientsRouter = express.Router();

patientsRouter.get('/', (_req, res) => {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-call
    res.send(getAllPatients());
});

export default patientsRouter;