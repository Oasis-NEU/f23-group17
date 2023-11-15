
import { createClient } from "@supabase/supabase-js";

const projectURL = process.env.REACT_APP_SUPABASE_URL;
const projectKey = process.env.REACT_APP_SUPABASE_KEY;

// weird quotations included in .env variables, removed with slice
export const supabase = createClient(projectURL.slice(1, -1), projectKey.slice(1, -1));
