import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://bhmscrxourtisrpokdlm.supabase.co'; // substitua pela sua URL
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJobXNjcnhvdXJ0aXNycG9rZGxtIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzEzMzA1NTUsImV4cCI6MjA0NjkwNjU1NX0.ZkZJ8Ng_uFCqmeHL6fJNnPOw3G0Nf-M1bWqzEFSyT4w'; // substitua pela sua chave anônima

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
