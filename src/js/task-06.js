const textRef = document.querySelector("#validation-input");

const correctNumOfSymbols = textRef.getAttribute('data-length');

textRef.addEventListener("blur", () => {
    if (("" + textRef.value).length != correctNumOfSymbols) {
        textRef.classList = ["invalid"]
    } else {
        textRef.classList = ['valid']
    }
});