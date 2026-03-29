import { supabase } from './supa.js'

const { data: { session } } = await supabase.auth.getSession()

if (!session) {
  window.location.href = 'login.html'
}

const email = session.user.email
const userNameEl = document.getElementById('user-name')
const candidateNameEl = document.getElementById('candidate-name')

if (userNameEl) userNameEl.textContent = email
if (candidateNameEl) candidateNameEl.textContent = email.split('@')[0]