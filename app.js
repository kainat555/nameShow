

let button = document.querySelector("button");
let input = document.querySelector("input");
let output = document.querySelector("h1");

button.addEventListener("click", function () {
    output.innerText = input.value.toUpperCase().slice(0, 1) + input.value.toLowerCase().slice(1);
    input.value = "";
});

input.addEventListener("keyup", () => {
    if (input.value.length > 7) {
        button.disabled = true;
    }
    else {
        button.disabled = false;
    }
})
