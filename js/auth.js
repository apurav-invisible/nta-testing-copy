import { supabase } from './supa.js'

const { data: { session } } = await supabase.auth.getSession()

if (!session) {
  window.location.href = 'login.html'
}

// Check karo sessionStorage mein flag hai ya nahi
const loggedIn = document.cookie.includes("loggedIn=true")
if (!loggedIn) {
  await supabase.auth.signOut()
  window.location.href = 'login.html'
}

const email = session.user.email
document.getElementById('user-name').textContent = `user :- ${email}`
proceed.addEventListener('click', () => {
  console.log('Proceed button clicked')})