import { withAuthRequired } from "@supabase/supabase-auth-helpers/nextjs";
import { createClient } from "@supabase/supabase-js";

export default withAuthRequired(async function InviteUser(req:any, res:any) {
    const { email } = req.query;
    const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
    const supabaseServiceRole = process.env.SUPABASE_SERVICE_ROLE;

    if (typeof email === "string" && supabaseUrl && supabaseServiceRole) {
        const supabaseAdmin = createClient(supabaseUrl, supabaseServiceRole);
        const { data, error } = await supabaseAdmin
            .auth
            .api
            .inviteUserByEmail(email);
        if (error) {
            res.status(error.status).json(error);
        } else {
            res.status(200).json(data);
        }
    } else {
        res.status(500).json({
            "error": "unknown error occurred",
        });
    }
});