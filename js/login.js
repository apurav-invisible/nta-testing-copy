import {supabase} from './supa.js'

const loginform = document.getElementById("login-form")
const msg = document.getElementById("necessary")
loginform.addEventListener("submit", async(e) =>{
    e.preventDefault()
    const username= document.getElementById("username").value
    const password = document.getElementById("password").value
    
    msg.textContent = "Logging in..."
    msg.style.color = "gray"

    const {data, error} = await supabase.auth.signInWithPassword({
        email: username,
        password: password
    })

    if (error){
        msg.textContent = "Login failed: " + error.message
        msg.style.color ="red"
    } else {
        const role = data.user.user_metadata.role
        console.log("User role:", role)
        msg.textContent = "login successful! Redirecting..."
        msg.style.color = "green"
        
        if (role === "admin") {
        window.location.href = "admin.html"
        } else {
        window.location.href = "index.html"
}
    }

})
