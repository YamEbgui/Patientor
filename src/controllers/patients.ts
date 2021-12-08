import patients from "../patients.json";

type Patient = {
    "id":string,
        "name": string,
        "dateOfBirth": string,
        "gender": string,
        "occupation": string
};

export const getAllPatients = (): Patient[] => {
    return patients.map(({ id, name, dateOfBirth, gender, occupation }) => ({
        id,
        name,
        dateOfBirth,
        gender,
        occupation
    }));
};