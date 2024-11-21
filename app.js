const express = require('express');
const path = require('path');
const { createClient } = require('@supabase/supabase-js');
const productRoutes = require('./routes/productRoutes');
const indexRoutes = require('./routes/index');

// Configurar Supabase
const supabaseUrl = 'https://xyzcompany.supabase.co'; // Substitua pela sua URL
const supabaseKey = 'public-anon-key'; // Substitua pela sua chave pública
const supabase = createClient(supabaseUrl, supabaseKey);

const app = express();

// Configuração do motor de visualização (EJS)
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Middleware para servir arquivos estáticos e processar JSON e dados de formulário
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Disponibilizar Supabase globalmente (opcional)
app.locals.supabase = supabase;

// Rotas
app.use('/', indexRoutes);
app.use('/produtos', productRoutes);

// Iniciar o servidor
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});
