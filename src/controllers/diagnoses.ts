import diagnoses from "../diagnoses.json";

type Diagnose = {
    code: string,
    name: string,
    latin?: string
};

export const getAllDiagnoses = (): Diagnose[] => {
    return diagnoses;
};