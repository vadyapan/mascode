import { DataProblems } from '@/data/interfaces';
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
const supabase = createClient<DataProblems>(supabaseUrl!, supabaseKey!);

export default supabase;
