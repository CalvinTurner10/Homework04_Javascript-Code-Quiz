function show(one) {
    const firstPage = document.getElementById(one);
    if (!one) {
        alert("New Page");
        return;
    }
}
const pages = document.getElementsByClassName("page");
for (let i = 0; i < pages.length; i++) {
    pages[i].style.display = "none";
}
one.style.display = "block";

document.getElementById("start-btn").addEventListener("click", function show() {
    const pages2 = document.getElementsByClassName("pages");
    for (let i = 0; i < pages.length; i++) {
        pages[i].style.display = "none";
        two.style.display = "block"
    }
});

var questions1 = document.getElementsByClassName("questions-1");
addQuestionsListener(questions1, three);

var questions2 = document.getElementsByClassName("questions-2");
addQuestionsListener(questions2, four);

var questions3 = document.getElementsByClassName("questions-3");
addQuestionsListener(questions3, five);

var questions4 = document.getElementsByClassName("questions-4");
addQuestionsListener(questions4, six);

var questions5 = document.getElementsByClassName("questions-5");
addQuestionsListener(questions5, seven);

function addQuestionsListener(questions2, pageElement) {
    for (let i = 0; i < 4; i++) {
        let questions = questions2[i];
        questions.addEventListener("click", function show() {
            const pages4 = document.getElementsByClassName("page");
            for (let i = 0; i < pages.length; i++) {
                pages[i].style.display = "none";
                pageElement.style.display = "block"
            }
        });
    }
}
document.getElementById("form").onsubmit = function () { submitForm() }

function submitForm() {
    for (let i = 0; i < pages.length; i++) {
        pages[i].style.display = "none";
        eight.style.display = "block"
    };
}



