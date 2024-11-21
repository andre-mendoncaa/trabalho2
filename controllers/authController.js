const supabase = require('../models/db'); // Importando o Supabase

// Função de login
exports.postLogin = async (req, res) => {
    const { email, password } = req.body;

    // Validação dos campos
    if (!email || !password) {
        alert('Email e senha são obrigatórios.');
    }

    try {
        // Consulta o usuário pelo email
        const { data: user, error } = await supabase
            .from('usuarios')
            .select('*')
            .eq('email', email)
            .single(); // Espera apenas um usuário

        if (error || !user) {
            alert('Usuário não encontrado.');
        }

        // Verificar se a senha fornecida bate com a senha armazenada
        if (password !== user.senha) { // Comparando as senhas em texto simples
            alert('Senha incorreta.');
        }

        // Login bem-sucedido
        res.redirect('/catalogo'); // Redirecionamento para a página do catálogo
    } catch (err) {
        console.error('Erro no servidor:', err);
        res.status(500).json({ message: 'Erro no servidor' });
    }
};

// Função de cadastro
exports.postSignup = async (req, res) => {
    const { email, password } = req.body;

    // Validação dos campos
    if (!email || !password) {
        alert('Email e senha são obrigatórios');
    }

    try {
        // Inserir o usuário na tabela 'usuarios' sem criptografar a senha
        const { data, error } = await supabase
            .from('usuarios')
            .insert([
                {
                    email,
                    senha: password, // Armazenando a senha em texto simples
                }
            ]);

        if (error) {
            console.error('Erro ao inserir usuário:', error);
            return res.status(500).json({ message: 'Erro ao cadastrar o usuário' });
        }

        // Cadastro bem-sucedido
        res.redirect('/login'); // Redireciona para a página de login após o cadastro
    } catch (err) {
        console.error('Erro no servidor ao criar usuário:', err);
        res.status(500).json({ message: 'Erro no servidor' });
    }
};
