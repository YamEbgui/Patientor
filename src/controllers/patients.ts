import patients from "../patients.json";
import { v1 as uuid } from 'uuid';
// eslint-disable-next-line @typescript-eslint/no-unsafe-call
const id:string = JSON.stringify(uuid());

type Patient = {
    "id":string,
    "name": string,
    "dateOfBirth": string,
    "gender": string,
    "occupation": string
};
type PatientWithSSN = {
    id:string,
    name: string,
    dateOfBirth: string,
    ssn:string,
    gender: string,
    occupation: string,
};
   

type Fields = { name: unknown, dateOfBirth: unknown, gender: unknown, occupation: unknown };

const getAllPatients = (): Patient[] => {
    return patients.map(({ id, name, dateOfBirth, gender, occupation }) => ({
        id,
        name,
        dateOfBirth,
        gender,
        occupation
    }));
};

const isString = (text: unknown): text is string => {
    return typeof text === 'string' || text instanceof String;
};

const isDate = (date: string): boolean => {
    return Boolean(Date.parse(date));
  };

const parseDate = (date: unknown): string => {
    if (!date || !isString(date)|| !isDate(date)) {
        throw new Error(`Incorrect or missing date`);
    }
  
    return date;
};

const parseString = (checkedString: unknown ,fieldName:string): string => {
    if (!checkedString || !isString(checkedString)) {
      throw new Error(`Incorrect or missing ${fieldName}`);
    }
  
    return checkedString;
};
  
const createNewPatient = ({name, dateOfBirth, gender, occupation}:Fields): PatientWithSSN => {
    const newPatient = {
        id: id,
        name: parseString(name, 'name'),
        dateOfBirth: parseDate(dateOfBirth),
        ssn:parseString(name, 'name'),
        gender: parseString(gender, 'gender'),
        occupation: parseString(occupation, 'occupation')
    };
    return newPatient;
};

const addPatient = (object: PatientWithSSN): PatientWithSSN => {
    patients.push(object);
    return object;
};

export { createNewPatient , getAllPatients , addPatient };