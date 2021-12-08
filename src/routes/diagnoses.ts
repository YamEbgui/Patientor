import express from 'express';
import { getAllDiagnoses } from '../controllers/diagnoses';
const diagnosesRouter = express.Router();

diagnosesRouter.get('/', (_req, res) => {
    res.send(getAllDiagnoses());
});

export default diagnosesRouter;