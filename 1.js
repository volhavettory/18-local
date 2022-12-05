// const form = document.querySelector("form");
// const text = document.querySelector(".text");
// const list = document.querySelector(".list");
// const button = document.querySelector(".del");
// let array = localStorage.getItem("item")
//   ? JSON.parse(localStorage.getItem("item"))
//   : [];
// localStorage.setItem("item", JSON.stringify(array));
// const storage = JSON.parse(localStorage.getItem("item"));

// let creatLi = (note) => {
//   let li = document.createElement("li");
//   li.textContent = note;
//   list.append(li);
// };
// form.addEventListener("submit", function (event) {
//   event.preventDefault();
//   array.push(text.value);
//   console.log(text.value);
//   console.log(array);
//   localStorage.setItem("item", JSON.stringify(array));
//   creatLi(text.value);
//   text.value = "";
// });
// storage.forEach((element) => {
//   creatLi(element);
// });
// button.onclick = localStorage.clear();

// сохранение цвета
let pageColor = localStorage.getItem("color");
if (pageColor) {
  document.body.style.backgroundColor = pageColor;
  document.querySelector(`input[value='${pageColor}']`).checked = true;
}
document.querySelector("#saveButton").addEventListener("click", function () {
  const form = document.forms[0];
  let selectedColor = form.color.value;
  localStorage.setItem("color", selectedColor);
  document.body.style.backgroundColor = pageColor;
});
