import fetch from "node-fetch";
const apiServiceHost = process.env.API_OU_SERVICE_HOST;

export const steeringGroups = async (req, res) => {
    try {
        const response = await fetch(`${apiServiceHost}/api/public/steering/steeringGroups`, {
            method: 'GET',
        });
        const data = await response.json();
        res.json(data);
    } catch (err) {
        console.log(err);
    }
};

