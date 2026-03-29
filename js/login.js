import { supabase } from './supa.js'


const { data: { session } } = await supabase.auth.getSession()
const redirectByRole = (role) => {
  if (role === 'admin') {
    window.location.href = 'admin.html'
  } else {
    window.location.href = 'instruction.html'
  }
}
if (session) {
  const role = session.user.user_metadata.role
  redirectByRole(role)
}

const loginform = document.getElementById("login-form")
const msg = document.getElementById("necessary")

loginform.addEventListener("submit", async (e) => {
  e.preventDefault()
  const username = document.getElementById("username").value
  const password = document.getElementById("password").value

  msg.textContent = "Logging in..."
  msg.style.color = "gray"

  const { data, error } = await supabase.auth.signInWithPassword({
    email: username,
    password: password
  })

  if (error) {
    msg.textContent = "Login failed: " + error.message
    msg.style.color = "red"
  } else {
    document.cookie = `loggedIn=true; path=/`
    const role = data.user.user_metadata.role
  
    msg.textContent = "Login successful! Redirecting..."
    msg.style.color = "green"

    setTimeout(() => {
      redirectByRole(role)
    }, 1000)
  }
})