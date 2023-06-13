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

export const steeringGroups = async (req, res) => {
    try {
        const response = await fetch(`${apiDbHost}/api/public/steeringGroups`, {
            method: 'GET',
        });
        const data = await response.json();
        res.json(data);
    } catch (err) {
        console.log(err);
    }
};

export const humanResources = async (req, res) => {
    try {
      const response = await fetch(`${apiDbHost}/api/public/humanResources`, {
        method: 'GET',
      });
      const data = await response.json();
      res.json(data);
    } catch (err) {
      console.log(err);
    }
};
