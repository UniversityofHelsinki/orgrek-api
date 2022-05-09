import fetch from "node-fetch";
const apiDbHost = process.env.API_OU_SERVICE_HOST;

export const steeringGroups = async (req, res) => {
    console.log('steering');
    try {
        const response = await fetch(`${apiDbHost}/api/steering/steeringGroups`, {
            method: 'GET',
        });
        const data = await response.json();
        res.json(data);
    } catch (err) {
        console.log(err);
    }
};

