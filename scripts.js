const addTaco = document.querySelector(".add-taco");
const tacoList = document.querySelector(".tacos");
const tacos = [];

function handleAddTaco(event) {
  event.preventDefault();
  const text = this.querySelector("[name=taco]").value;
  const taco = {
    text,
    done: false
  };
  tacos.push(taco);
  renderTacoList(tacos, tacoList);
  this.reset();
}
function renderTacoList(items = [], itemList) {
  tacoList.innerHTML = items
    .map((item, i) => {
      return `<li><label for="">${item.text}</label></li>`;
    })
    .join("");
}
addTaco.addEventListener("submit", handleAddTaco);
