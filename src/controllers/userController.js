const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken');



//funcao para criar um novo usuario (post)



//funcao para criar um novo usuario 
exports.createuser = async (req, res) => {
    const { name, email, password } = req.body;

    try {
        //gerando uma hash com um fator de custo
        const hashedPassword = await bcrypt.hash(password, 10);

        //criando um novo usuario com a senha criptografada
        const user = new User({
            name,
            email,
            password: hashedPassword
        });

        // salvar o usuario no banco de daods
        await user.save();
        res.status(201).json(user);
    }catch (error) {
        res.status(500).json({ message: 'Erro ao criar usuario', error});
    }
};

//funcao para obter e listar todos os usuarios (get)
exports.getAllUsers = async (req, res) => {
    try {
        const users = await User.find();
        res.json(users);
    } catch (error) {
        res.status(500).json({ message: 'Erro ao buscar usuarios', error});
    }
};

//funcao para obter usuario por ID (get)
exports.getUserById = async (req, res) => {
    const { id } = req.params;

    try {
        const user = await User.findById(id);
        if (!user) {
            return res.status(404).json({ message: 'Usuario nao encontrado' });
        }
        res.json(user);
    } catch (error) {
        res.status(500).json({ message: 'Erro ao buscar usuário', error});
    }
};

// funcao para atualizar um usuario por id (put)
exports.updateUser = async (req, res) => {
    const { id } = req.params;
    const { name, email, password } = req.body;

    try {
        const user = await User.findById(id);
        if(!user) {
            return res.status(404).json({ message: 'Usuario nao encontrado'});
        }

        //atualizar os campos do usuario 
        user.name = name || user.name;
        user.email = email || user.email;

        //se houver nova senha, criptografe
        if (password) {
            user.password = await bcrypt.hash(password, 10);
        }

        //salvar as atualizacoes no banco de dados 
        await user.save();
        res.json({ message: 'Usuario atualizado com sucesso', user});
    } catch (error) {
        res.status(500).json({ message: 'Erro ao atualizar usuario', error});
    }
};

//funcao para excluir um usuario por id (delete) 
exports.deleteUser = async (req, res) => {
    const { id } = req.params;

    try {
        const user = await User.findById(id);
        if (!user) {
            return res.status(404).json({ message: 'Usuário não encontrado' });
        }

        // Remover o usuário do banco de dados
        await User.deleteOne({_id: id});
        res.json({ message: 'Usuário removido com sucesso' });
    } catch (error) {
        res.status(500).json({ message: 'Erro ao remover usuário', error });
    }
}
//funcao para verificar a senha durante o login
exports.loginUser = async (req, res) => {
    const { email, password } = req.body;

    try {
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(404).json({ message: 'Usuario nao encontrado'});
        }

        //comparar a senha fornecida com a senha criptografada armazenada
        const isPasswordValid = await bcrypt.compare(password, user.password);
        if (!isPasswordValid) {
            return res.status(401).json({ message: 'Senha incorreta'});
        }

        //gerar o token jwt (ele vai expirar em 1 hora
        const token = jwt.sign(
            { userId: user._id, email: user.email}, //dados a serem armazenados no token
            process.env.JWT_SECRET,
            { expiresIn: '1h' }
        );

        res.json({ message: 'Login bem sucedido', token, user});
    } catch (error) {
        res.status(500).json({ message: 'Erro ao fazer login', error });
    }
};