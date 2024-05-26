var inputs = document.getElementById("input");
var text = document.querySelector(".text")

function Add() {
    if (inputs.value == "") {
        alert("Please Enter Your Task")

    } else {
        var newEle = document.createElement("ul");
        newEle.innerHTML = `${inputs.value } <button>X</button> `;
        text.appendChild(newEle);
        inputs.value = "";
        newEle.querySelector("button").addEventListener("click", remove);

        function remove() {
            newEle.remove()


        }
    }
}