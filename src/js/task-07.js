const rangeInput = document.querySelector("#font-size-control");

rangeInput.addEventListener("input", (event) => {
    document.getElementById('text').style.fontSize = parseFloat(event.target.value) + 'px';
});