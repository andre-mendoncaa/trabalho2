const supabase = require('../models/db'); // Importando o Supabase

// Função de login
exports.postLogin = async (req, res) => {
    const { email, password } = req.body;

    // Validação dos campos
    if (!email || !password) {
        return res.status(400).json({ message: 'Email e senha são obrigatórios' });
    }

    try {
        // Consulta o usuário pelo email
        const { data: user, error } = await supabase
            .from('usuarios')
            .select('*')
            .eq('email', email)
            .single(); // Espera apenas um usuário

        if (error || !user) {
            return res.status(400).json({ message: 'Usuário não encontrado' });
        }

        // Verificar se a senha fornecida bate com a senha armazenada
        if (password !== user.senha) { // Comparando as senhas em texto simples
            return res.status(400).json({ message: 'Senha incorreta' });
        }

        // Login bem-sucedido - Envia o email no JSON
        res.json({
            message: 'Login bem-sucedido',
            email: user.email,
            redirectUrl: '/catalogo'
        });
    } catch (err) {
        console.error('Erro no servidor:', err);
        res.status(500).json({ message: 'Erro no servidor' });
    }
};
