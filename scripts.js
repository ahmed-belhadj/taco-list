const addTaco = document.querySelector(".add-taco");
const tacoList = document.querySelector(".tacos");
const tacos = JSON.parse(localStorage.getItem("tacos")) || [];

function handleAddTaco(event) {
  event.preventDefault();
  const text = this.querySelector("[name=taco]").value;
  const taco = {
    text,
    done: false
  };
  tacos.push(taco);
  renderTacoList(tacos, tacoList);
  localStorage.setItem("tacos", JSON.stringify(tacos));
  this.reset();
}
function renderTacoList(items = [], itemList) {
  itemList.innerHTML = items
    .map((item, i) => {
      return `<li>
      <input type="checkbox" data-index=${i} id="taco${i}" ${
        item.done ? "checked" : ""
      }/>
      <label for="taco${i}">${item.text}</label></li>`;
    })
    .join("");
}

function handleToggleTaco(event) {
  if (!event.target.matches("input")) {
    return;
  }
  const index = event.target.dataset.index;
  tacos[index].done = !tacos[index].done;
  localStorage.setItem("tacos", JSON.stringify(tacos));
  renderTacoList(tacos, tacoList);
}

addTaco.addEventListener("submit", handleAddTaco);
tacoList.addEventListener("click", handleToggleTaco);
renderTacoList(tacos, tacoList);
