
const element = document.getElementById("allo");

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