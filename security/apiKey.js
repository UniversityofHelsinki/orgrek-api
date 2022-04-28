export const checkApiKey = (req, res, next) => {
    const apiKey = req.get('api-key');

    console.log(req.path);

    if (req.path.includes('/docs')) {
        next();
    } else {
        if (!apiKey || apiKey !== process.env.HY_ORGANISATION_APPLICATION_API_KEY) {
            res.status(401).json({error: 'unauthorised'})
        } else {
            next();
        }
    }
};

export default checkApiKey;
