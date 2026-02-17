const form = document.querySelector("form")
const list = document.querySelector("ul")
const item = document.getElementById("new-item")
const removed = document.getElementById("removed")
const closeAlert = document.querySelector(".warning")

try {
  form.onsubmit = (event) => {
    event.preventDefault()

    if (!item.value) {
      alert("Preencha o nome do item")
    } else {

      const newItem = document.createElement("li")

      const newCheckbox = document.createElement("input")
      newCheckbox.setAttribute("type", "checkbox")
      newCheckbox.setAttribute("name", "item")

      const newLabel = document.createElement("label")
      newLabel.setAttribute("for", "item")
      newLabel.textContent = item.value

      const newButton = document.createElement("button")

      const trash = document.createElement("img")
      trash.setAttribute("src", "assets/trash.svg")
      trash.setAttribute("alt", "Remover item")

      newButton.append(trash)

      newItem.append(newCheckbox, newLabel, newButton)
      list.append(newItem)

      item.value = ""
      item.focus()
    }
  }

} catch (error) {
  console.log(error)
  alert("Não foi possível adicionar o item")

}

list.addEventListener("click", (event) => {
  if (event.target.matches("li button img")) {
    removeItem(event.target.parentElement);
  }
});

closeAlert.addEventListener("click", () => removed.classList.add("hide"));

function removeItem(item) {
  item.parentElement.remove();
  removed.classList.remove("hide");
}


