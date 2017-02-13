module.exports = () => {
    const service = {
        notFoundMiddleware: notFoundMiddleware,
        send404: send404
    };
    return service;

    const notFoundMiddleware = (req, res, next) => {
        send404(req, res, 'API endpoint not found');
    };

    const send404 = (req, res, description) => {
        const data = {
            status: 404,
            message: 'Not Found',
            description: description,
            url: req.url
        };
        res.status(404)
            .send(data)
            .end();
    };
};

