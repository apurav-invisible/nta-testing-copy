import { supabase } from "./supa.js"

const startSession = async () => {
    const { data: { session } } = await supabase.auth.getSession()
    
    const { data: existing } = await supabase
        .from('sessions')
        .select('id')
        .eq('user_id', session.user.id)
        .eq('submitted', false)
        .maybeSingle()
    
    if (existing) {
        window.location.href = "index.html"
        return
    }

    const { error } = await supabase
        .from('sessions')
        .insert([{
            user_id: session.user.id,
            start_time: new Date().toISOString(),
            submitted: false
        }])

    if (error) { console.error(error); return }
    
    window.location.href = "index.html"
}

document.getElementById("proceed").addEventListener("click", async () => {
    const checkbox = document.querySelector('input[type="checkbox"]')
    
    if (!checkbox.checked) {
        alert("Please tick the checkbox to proceed")
        return
    }

    await startSession()
})