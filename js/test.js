
import {getQuestions} from './questions.js';

let questions  = [];
let currentIndex = 0;
let currentsubject="physics";
let answers={};
let marked = {};
let visited = {};
let selected={};

const saveToStorage = () => {
    localStorage.setItem("answers", JSON.stringify(answers))
    localStorage.setItem("marked", JSON.stringify(marked))
    localStorage.setItem("visited", JSON.stringify(visited))
    localStorage.setItem("questions", JSON.stringify(questions))
}
questions = await getQuestions();

const savedAnswers = localStorage.getItem("answers")
const savedMarked = localStorage.getItem("marked")
const savedVisited = localStorage.getItem("visited")
// const savedAnsAndVisited = localStorage.getItem("questions")

if (savedAnswers) answers = JSON.parse(savedAnswers)
if (savedMarked) marked = JSON.parse(savedMarked)
if (savedVisited) visited = JSON.parse(savedVisited)
// Questions fetch ke baad ye add karo
const getSubject=()=>{
    return questions.filter(q=>q.subject=== currentsubject)
}

const renderQuestion =()=>{
    const subject = getSubject();
    const q = subject[currentIndex];

    
    visited[q.id] = true;

    document.getElementById("question-number").textContent = `Question ${currentIndex+1}:`
    document.getElementById("question-text").textContent = q.question;


    const alloptions = document.getElementById("options")
    alloptions.innerHTML="";

    q.options.forEach((option,index)=>{
        const label = document.createElement("label");
        label.classList.add("option")
        label.innerHTML=`<input type="radio" name="option" data-index="${index}" />
        <span>${option}</span>`

        if (answers[q.id] !== undefined && answers[q.id] === index){
            label.querySelector("input").checked = true;}

        label.querySelector("input").addEventListener("change", () => {
            selected[q.id] = index
    //         console.log("Answers:", answers)})
    //         console.log("q.id:", q.id)
    // console.log("q.id type:", typeof q.id)
    // console.log("answers after save:", JSON.stringify(answers))
            buildPalette();})
        if (selected[q.id] !== undefined && selected[q.id] === index) {
        label.querySelector("input").checked = true}

        alloptions.appendChild(label); })
    
    


}
const buildPalette =()=>{
    const palette = document.getElementById("palette-grid");
     palette.innerHTML = ""  // clear karo pehle
    const subject = getSubject();
    for( let i=0; i<subject.length; i++){
        const btn = document.createElement("button");
        btn.textContent = i+1;
        btn.classList.add("palette-btn", "not-visited")
        palette.appendChild(btn);
        btn.addEventListener("click",()=>{
            const subject = getSubject();
            currentIndex = i;
            renderQuestion();
            buildPalette();
        })

    btn.classList.remove("not-visited", "answered", "marked", "marked-answered","not-answered");

    if (marked[subject[i].id] && answers[subject[i].id] !== undefined) {
    btn.classList.add("answered-marked")  // blue
} else if (marked[subject[i].id]) {
    btn.classList.add("marked")           // purple
} else if (answers[subject[i].id] !== undefined) {
    btn.classList.add("answered")         // green
} else if (visited[subject[i].id]) {
    btn.classList.add("not-answered")     // orange
} else {
    btn.classList.add("not-visited")      // gray
}
    if (i === currentIndex) {
        btn.style.border = "1px solid black";
}

    }}
renderQuestion();
buildPalette();
saveToStorage();



// Phir render karo
renderQuestion()
buildPalette()

const tabs = document.querySelectorAll(".tab");
tabs.forEach(tab=>{
    tab.addEventListener("click",()=>{
        tabs.forEach(t=>t.classList.remove("active"))
        tab.classList.add("active");
        currentsubject = tab.dataset.subject;
        currentIndex=0;
        renderQuestion();
        buildPalette();
        saveToStorage();
    })})

const nextbtn = document.getElementById("next");
const prevbtn = document.getElementById("prev");

nextbtn.addEventListener("click",()=>{
    const subject = getSubject();
    if ( currentIndex < subject.length -1){
        currentIndex++;
        renderQuestion();
        buildPalette();
    }

})

prevbtn.addEventListener("click",()=>{
    if (currentIndex > 0){
        currentIndex--;
        renderQuestion();
        buildPalette();
    }
})
const saveAndNext = () => {
    const subject = getSubject()
    const q = subject[currentIndex]
    if (selected[q.id] !== undefined) {
        answers[q.id] = selected[q.id]
    }
    if (currentIndex < subject.length - 1) currentIndex++
    renderQuestion()
    buildPalette()
    saveToStorage();
}

const clearResponse = () => {
    const subject = getSubject()
    const q = subject[currentIndex]
    delete answers[q.id]
    delete selected[q.id]
    delete marked[q.id]
    renderQuestion()
    buildPalette()
    saveToStorage();
}

const save_markbtn = () => {
    const subject = getSubject()
    const q = subject[currentIndex]
    if (selected[q.id] !== undefined) {
        answers[q.id] = selected[q.id]
    }
    marked[q.id] = true;
    if (currentIndex < subject.length - 1) currentIndex++
    renderQuestion()
    buildPalette()
    saveToStorage()}

const markForReview = () => {
    const subject = getSubject()
    const q = subject[currentIndex]
    marked[q.id] = true
    delete selected[q.id]
    delete answers[q.id]
    if (currentIndex < subject.length - 1) currentIndex++
    renderQuestion()
    buildPalette()
    saveToStorage();
} 

    document.getElementById("save-next").addEventListener("click", saveAndNext)
    document.getElementById("clear").addEventListener("click", clearResponse)
    document.getElementById("save-mark").addEventListener("click", save_markbtn)
    document.getElementById("mark-next").addEventListener("click", markForReview)


    document.getElementById("submit-btn").addEventListener("click", () => {
        saveToStorage();
        window.location.href = "confirmation.html"
    })
    




