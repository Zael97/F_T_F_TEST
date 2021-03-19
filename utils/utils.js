const jwt = require('jsonwebtoken');
const maxAge = 30 * 60;
exports.createToken = username => {
    return jwt.sign({ username }, 'secret key', {
        expiresIn: maxAge
    })
}

exports.verify = token => {
    try {
        const encoded = jwt.verify(token, 'secret key');
        return encoded.username;
    } catch (err) {
        throw Error('invalid token');
    }
}

exports.extractToken = req => {
    try {
        const token = req.headers['authorization'].split(' ')[1];
        return token;
    } catch (err) {
        throw Error('token not found');
    }
}

