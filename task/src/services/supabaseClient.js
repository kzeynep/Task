import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://fogchzygrvzakjpaugdx.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZvZ2NoenlncnZ6YWtqcGF1Z2R4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTgxODk5NzcsImV4cCI6MjAzMzc2NTk3N30.bHXfu_jZXlmlY396EeA5uMcQNgy_K-jXujLmeE7qSsA';

const supabase = createClient(supabaseUrl, supabaseKey);

export const signUp = async (email, password) => {
  return await supabase.auth.signUp({ email, password });
};

export const signIn = async (email, password) => {
  return await supabase.auth.signIn({ email, password });
};

export const signOut = async () => {
  return await supabase.auth.signOut();
};

export default supabase;
