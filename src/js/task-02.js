const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];


let allLiRefs = []


for (const ingredient of ingredients) {
  let liRef = document.createElement("li")
  liRef.innerHTML = ingredient

  allLiRefs.push(liRef)
}

let ulRef = document.querySelector("ul#ingredients")

ulRef.append(...allLiRefs)