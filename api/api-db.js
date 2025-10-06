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

export const humanResourcesIamGroupPrefix = async (req, res) => {
    try {
      const response = await fetch(`${apiDbHost}/api/public/humanResourcesIamGroupPrefix`, {
        method: 'GET',
      });
      const data = await response.json();
      res.json(data);
    } catch (err) {
      console.log(err);
    }
};

export const humanResourcesWithLevel = async (req, res) => {
    const { level } = req.query;
    try {
      const response = await fetch(`${apiDbHost}/api/public/humanResourcesWithLevel?level=${level || -1}`, {
        method: 'GET',
      });
      const data = await response.json();
      res.json(data);
    } catch (err) {
      console.log(err);
    }
};

export const researchResources = async (req, res) => {
    try {
      const response = await fetch(`${apiDbHost}/api/public/researchResources`, {
        method: 'GET',
      });
      const data = await response.json();
      res.json(data);
    } catch (err) {
      console.log(err);
    }
};

export const financeUnits = async (req, res) => {
    try {
      const response = await fetch(`${apiDbHost}/api/public/financeUnits`, {
        method: 'GET',
      });
      const data = await response.json();
      res.json(data);
    } catch (err) {
      console.log(err);
    }
};

export const financeUnitsV2 = async (req, res) => {
    try {
      const response = await fetch(`${apiDbHost}/api/public/financeUnitsWithUniqueCode`, {
        method: 'GET',
      });
      const data = await response.json();
      res.json(data);
    } catch (err) {
      console.log(err);
    }
};

export const financeUnitsWithUniqueCodeExclusive = async (req, res) => {
    try {
      const response = await fetch(`${apiDbHost}/api/public/financeUnitsWithUniqueCodeExclusive`, {
        method: 'GET',
      });
      const data = await response.json();
      res.json(data);
    } catch (err) {
      console.log(err);
    }
};

export const financeUnitsPublic = async (req, res) => {
  try {
    const response = await fetch(`${apiDbHost}/api/public/financeUnitsPublic`, {
      method: 'GET',
    });
    const data = await response.json();
    res.json(data);
  } catch (error) {
    console.error(error.message);
  }
  
};

export const educationUnits = async (req, res) => {
    try {
      const response = await fetch(`${apiDbHost}/api/public/educationUnits`, {
        method: 'GET',
      });
      const data = await response.json();
      res.json(data);
    } catch (err) {
      console.log(err);
    }
};

export const educationUnitsV2 = async (req, res) => {
    try {
      const response = await fetch(`${apiDbHost}/api/public/educationUnitsWithEducationQualifier`, {
        method: 'GET',
      });
      const data = await response.json();
      res.json(data);
    } catch (err) {
      console.log(err);
    }
};

export const officialUnits = async (req, res) => {
    try {
      const response = await fetch(`${apiDbHost}/api/public/officialUnits`, {
        method: 'GET',
      });
      const data = await response.json();
      res.json(data);
    } catch (err) {
      console.log(err);
    }
};

export const officialUnitsV2 = async (req, res) => {
    try {
      const response = await fetch(`${apiDbHost}/api/public/officialUnitsWithEducationQualifier`, {
        method: 'GET',
      });
      const data = await response.json();
      res.json(data);
    } catch (err) {
      console.log(err);
    }
};

export const concernGroups = async (req, res) => {
    try {
      const response = await fetch(`${apiDbHost}/api/public/concernGroups`, {
        method: 'GET',
      });
      const data = await response.json();
      res.json(data);
    } catch (err) {
      console.log(err);
    }
};

export const NodesInMultipleHierarchies = async (req, res) => {
    const { hierarchy } = req.query;
    try {
      const response = await fetch(`${apiDbHost}/api/public/NodesInMultipleHierarchies?hierarchy=${hierarchy}`, {
        method: 'GET',
      });
      const data = await response.json();
      res.status(response.status).json(data);
    } catch (err) {
      console.log(err);
    }
};

export const FinanceAndOldResearch = async (req, res) => {
    try {
      const response = await fetch(`${apiDbHost}/api/public/FinanceAndOldResearch`, {
        method: 'GET',
      });
      const data = await response.json();
      res.json(data);
    } catch (err) {
      console.log(err);
    }
};

export const personnelUnitMap = async (req, res) => {
    try {
      const response = await fetch(`${apiDbHost}/api/public/PersonnelUnitMap`, {
        method: 'GET',
      });
      const data = await response.json();
      res.json(data);
    } catch (err) {
      console.log(err);
    }
};

export const konserniUnitMap = async (req, res) => {
    try {
      const response = await fetch(`${apiDbHost}/api/public/KonserniUnitMap`, {
        method: 'GET',
      });
      const data = await response.json();
      res.json(data);
    } catch (err) {
      console.log(err);
    }
};

export const allNodeAttributes = async (req, res) => {
    try {
      const response = await fetch(`${apiDbHost}/api/public/AllNodeAttributes`, {
        method: 'GET',
      });
      const data = await response.json();
      res.json(data);
    } catch (err) {
      console.log(err);
    }
};

export const allSuccessorsAndPredecessors = async (req, res) => {
    try {
      const response = await fetch(`${apiDbHost}/api/public/AllSuccessorsAndPredecessors`, {
        method: 'GET',
      });
      const data = await response.json();
      res.json(data);
    } catch (err) {
      console.log(err);
    }
};