import { supabase } from './supa.js'

document.addEventListener('DOMContentLoaded', async () => {
  console.log("URL:", window.location.href)
  console.log("total-q element:", document.getElementById("total-q"))
  const { data: { session } } = await supabase.auth.getSession()

  if (!session) {
    window.location.href = 'login.html'
  } else {
    const answers = JSON.parse(localStorage.getItem("answers") || "{}")
    const marked = JSON.parse(localStorage.getItem("marked") || "{}")
    const visited = JSON.parse(localStorage.getItem("visited") || "{}")
    const questions = JSON.parse(localStorage.getItem("questions") || "[]")

    const total = questions.length
    const visitedIds = Object.keys(visited)
    const answeredCount = Object.keys(answers).filter(id => answers[id]).length
    const markedCount = Object.keys(marked).filter(id => !answers[id]).length
    const answeredMarked = Object.keys(marked).filter(id => answers[id]).length
    const notAnswered = visitedIds.filter(id => answers[id] === undefined && !marked[id]).length
    const notVisited = total - visitedIds.length

    document.getElementById("total-q").textContent = total
    document.getElementById("answered").textContent = answeredCount
    document.getElementById("not-answered").textContent = notAnswered
    document.getElementById("marked").textContent = markedCount
    document.getElementById("answered-marked").textContent = answeredMarked
    document.getElementById("not-visited").textContent = notVisited
    document.getElementById("confirm-submit").addEventListener("click", () => {
      window.location.href = "result.html"
    })

    document.getElementById("cancel-submit").addEventListener("click", () => {
      window.location.href = "index.html"
    })
  }
})