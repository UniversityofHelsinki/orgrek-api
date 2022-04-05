import fetch from "node-fetch";
const apiDbHost = process.env.API_DB_HOST;

export const texts = async (req, res) => {
    try {
        const response = await fetch(`${apiDbHost}/api/texts`, {
            method: 'GET',
        });
        const data = await response.json();
        res.json(data);
    } catch (err) {
        console.log(err);
    }
};

