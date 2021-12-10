/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import express from 'express';
import { getAllPatients, createNewPatient , addPatient } from '../controllers/patients';
const patientsRouter = express.Router();

patientsRouter.get('/', (_req, res) => {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-call
    res.send(getAllPatients());
});

patientsRouter.post('/', (req, res) => {
    try {
        console.log(req.body);
        
        // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
        const newPatient = createNewPatient(req.body);
        addPatient(newPatient);
        res.send(newPatient);
        
    } catch (error: unknown) {
        let errorMessage = 'Something went wrong.';
        if (error instanceof Error) {
          errorMessage += ' Error: ' + error.message;
        }
        res.status(400).send(errorMessage);
    }
});

export default patientsRouter;