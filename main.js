const input = document.querySelector("input");
const ul = document.querySelector("ul");
const btn = document.querySelector("button");
//------Add a new Task ------//

btn.addEventListener("click", (e) => {
  e.preventDefault();
  const newTask = document.createElement("li");
  newTask.innerText = input.value;
  ul.appendChild(newTask);
  input.value = "";
});

//------Add a new Task one more------//

// input.addEventListener("submit", (e) => {
//   e.preventDefault();
//   ul.innerHTML += `<li><div><div><span>${input.value}</span>
//   <span><input type="image" class="check" src="check.png.png" /></span>
//   <span><input type="image" class="delete" src="bin.png.png" /></span>
//   <span><input type="image" class="change" src="pencil.png.png" /></span>
// </div></div></li>`;
//   input.value = "";
//   const deleteTaskButtons = document.getElementsByClassName("remove_task");
//   for (let index = 0; index < deleteTaskButtons.length; index++) {
//     const element = deleteTaskButtons[index];
//     element.addEventListener("click", (e) => {});
//   }
// });
