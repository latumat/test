
const element = document.getElementById("allo");

const inputTest = document.getElementById("test");

var database = []

function myFunction() {
    if (inputTest.value == "jeanlou") {
        alert("edouard cayard");
    }
    else if (inputTest.value == "john") {
        alert("fkng loser");
    }
    else{
        alert("ERROR");
    };

    database.push(inputTest.value);

    console.log(database)
}


element.addEventListener("click", myFunction);