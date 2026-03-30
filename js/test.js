import {supabase} from './supa.js';
import {getQuestions} from './questions.js';

let questions  = [];
let currentIndex = 0;
let currentsubject="physics";
let answers={};
let marked = {};


questions = await getQuestions();

const getSubject=()=>{
    return questions.filter(q=>q.subject=== currentsubject)
}

const renderQuestion =()=>{
    const subject = getSubject();
  
    const q = subject[currentIndex];

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
            answers[q.id] = index
            console.log("Answers:", answers)})

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
    }}
renderQuestion();
buildPalette();

const tabs = document.querySelectorAll(".tab");
tabs.forEach(tab=>{
    tab.addEventListener("click",()=>{
        tabs.forEach(t=>t.classList.remove("active"))
        tab.classList.add("active");
        currentsubject = tab.dataset.subject;
        currentIndex=0;
        renderQuestion();
        buildPalette();
    })})

const nextbtn = document.getElementById("next");
const prevbtn = document.getElementById("prev");

nextbtn.addEventListener("click",()=>{
    const subject = getSubject();
    if ( currentIndex < subject.length -1){
        currentIndex++;
        renderQuestion();
    }

})

prevbtn.addEventListener("click",()=>{
    if (currentIndex > 0){
        currentIndex--;
        renderQuestion();
    }
})

