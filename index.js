
const element = document.getElementById("btn");

const inputTest = document.getElementById("test");

function myFunction() {
    if (inputTest.value == "jeanlou") {
        alert("edouard cayard");
    }
    else{
        alert("ERROR");
    };
}


element.addEventListener("click", myFunction);