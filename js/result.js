import {supabase} from './supa.js';

document.addEventListener('DOMContentLoaded', async () => {
    const { data: { session } } = await supabase.auth.getSession()

    if (!session) {
        window.location.href = 'login.html' 
        return;
    }

    const answers = JSON.parse(localStorage.getItem("answers") || "{}")
    const questions = JSON.parse(localStorage.getItem("questions") || "[]")
    const visited = JSON.parse(localStorage.getItem("visited") || "{}")
    let correct = 0;
    let incorrect = 0;

    questions.forEach(q =>{
        if (answers[q.id] !== undefined){
            if (answers[q.id] == q.correct) correct++;
            else incorrect++;
        }
    })

    const total = questions.length
    const marked = JSON.parse(localStorage.getItem("marked") || "{}")
    const answeredMarked = Object.keys(marked).filter(id => answers[id]).length
    const answeredCount = Object.keys(answers).filter(id => answers[id]).length
    const score = correct * 4 - incorrect
    document.getElementById("total-q").textContent = total
    document.getElementById("total-attempted").textContent = answeredCount+answeredMarked
    document.getElementById("correct-answers").textContent = correct
    document.getElementById("incorrect-answers").textContent = incorrect
    document.getElementById("score").textContent = score

    localStorage.removeItem("answers")
    localStorage.removeItem("marked")
    localStorage.removeItem("visited")
    localStorage.removeItem("questions")




});