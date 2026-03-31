import { supabase } from './supa.js'

const { data: { session } } = await supabase.auth.getSession()
if (!session) window.location.href = 'login.html'

document.getElementById("confirm-submit").addEventListener("click", () => {
    window.location.href = "result.html"
})

document.getElementById("cancel-submit").addEventListener("click", () => {
    history.back()
})