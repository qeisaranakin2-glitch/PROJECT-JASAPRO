import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://rvivmwiedhkayrylyqoq.supabase.co";
const supabaseAnonKey = "sb_publishable_NcqnPlQDNL2Rt9dpdGajQA_Mexblsry";

export const supabase = createClient(supabaseUrl, supabaseAnonKey);