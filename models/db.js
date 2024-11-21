const { createClient } = require('@supabase/supabase-js');

// Credenciais do Supabase
const supabaseUrl = 'https://wjxpfdkvglbusxdlydkg.supabase.co'; // Substitua pela sua URL
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6IndqeHBmZGt2Z2xidXN4ZGx5ZGtnIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzIwNzQwOTUsImV4cCI6MjA0NzY1MDA5NX0.z37dQNzCRsbIA0g1SOYGrrbd9-EE7Tfs9VEXOn579n4'; // Substitua pela sua chave pública
const supabase = createClient(supabaseUrl, supabaseKey);

module.exports = supabase;
