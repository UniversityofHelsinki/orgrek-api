import fetch from "node-fetch";
const apiDbHost = process.env.API_DB_HOST;

export const degreeProgrammes = async (req, res) => {
    try {
        const response = await fetch(`${apiDbHost}/api/public/degreeProgrammes/${req.params.id}`, {
            method: 'GET',
        });
        const data = await response.json();
        res.json(data);
    } catch (err) {
        console.log(err);
    }
};
