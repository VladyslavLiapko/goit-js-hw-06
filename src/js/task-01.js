const categories = document.querySelectorAll("li.item")

let output = "Number of categories:" + categories.length + "\n\n"
for (let category of categories) {
    output += "Category: " + category.querySelector("h2").textContent + "\n"
    output += "Elements: " + category.querySelectorAll("li").length + "\n\n"
}

console.log(output)
