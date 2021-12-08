function show(one){
    const firstPage = document.getElementById(one);
    if (!one){
        alert("New Page");
        return;
    }
}
const pages = document.getElementsByClassName("page");
for (let i = 0; i < pages.length; i++){
    pages[i].style.display = "none";
}
one.style.display = "block";

document.getElementById("start-btn").addEventListener("click", function show(){
    const pages2 = document.getElementsByClassName("pages");
    for (let i = 0; i < pages.length; i++){
        pages[i].style.display = "none";
        two.style.display = "block"}});

var questions1 =docuemnt.getElementsByClassName("questions-1");
addQuestionListener(questions1, three);

var questions1 =docuemnt.getElementsByClassName("questions-1");
addQuestionListener(questions2, four);

var questions1 =docuemnt.getElementsByClassName("questions-1");
addQuestionListener(questions3, five);

var questions1 =docuemnt.getElementsByClassName("questions-1");
addQuestionListener(questions4, six);

var questions1 =docuemnt.getElementsByClassName("questions-1");
addQuestionListener(questions5, seven);

function addQuestionListener(questions2, pageElement){
    for (let i = 0; i < 4; i++){
        let question = questions2[i];
        question.addEventListener("click", function show(){
            const pages4 = document.getElementsByClassName("page");
            for ( let i =0; i < pages.length; i++){
                pages[i].style.display = "none";
                pageElement.style.display = "block"}});
            }
        }
document.getElementById("form").onsubmit = function () {submitForm()}

function submitForm(){
    for (let i =0; i < pages.length; i++){
        pages[i].style.display = "none";
        eight.style.display = "block"};
    }

   

