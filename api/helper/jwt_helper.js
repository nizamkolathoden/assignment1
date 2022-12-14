const jwt = require('jsonwebtoken');




module.exports = {

    siginAccessToken: (userId, secret) => {

        try {
            return new Promise((resolve, reject) => {

                const payload = {
                    aud: userId
                }
               

                const options = {
                    issuer: "nizam",
                     expiresIn: '2h',
                }

                jwt.sign(payload, secret, options, (err, token) => {

                    if (err) {
                        console.error(err.message)
                        reject({ message: 'Un Authrized User1', code: 401 })
                    }

                    resolve(token);
                })
            })
        } catch (err) {
            console.error(err.message);
        }

    },

    

    
    
    verifyUserAccessToken: (req, res, next) => {

        try {
            const authHeader = req.headers['authorization'];

            const secret = process.env.JwtSecret;

            if (!authHeader) return res.status(401).json({ error: "Un Authrized User" });

            const bearerToken = authHeader.split(' ');

            const token = bearerToken[1];

            jwt.verify(token, secret, (err, payload) => {

                if (err) {

                    const message = err.name = 'JsonWebTokenError' ? 'Un Authrized User' : err.message;

                    return res.json({ error: message });
                }

                req.payload = payload;

                next();
            })
        } catch (err) {
            console.error(err.message)
        }


    },



}