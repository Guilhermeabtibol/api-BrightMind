const jwt = require('jsonwebtoken');

//middleware para verificar o token jwt
const authMiddleware = (req, res, next) => {
    // Obter o token dos cabecalhos da requisicao 
    const token = req.headers.authorization && req.headers.authorization.split(' ')[1]; // formato 'bearer <token>'

    if (!token) {
        return res.status(401).json({ message: 'Token nao fornecido' });
    }

    try {
        //verificar o token e decodificar os dados
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.user = decoded // adicionar os dados do usuario a requiscao
        next();
    } catch (error) {
        res.status(401).json({ message: 'Token invalido' });
    }
};

module.exports = authMiddleware;