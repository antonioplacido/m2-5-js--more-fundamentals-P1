// Exercise 3-1
// ------------

// NO MODIFICATIONS OUTSIDE OF THE EXERCISE FOLDER (i.e. the css is read-only)

// Guidelines
// - write only one event listener
// - use a switch statement

document.getElementById("btn-list").addEventListener("click", buttonChange);

function buttonChange(event) {
  let button = event.target;
  let buttonid = button.getAttribute("id");
  //   let status = false;
  console.log(button);

  switch (buttonid) {
    case "btn-1":
      let status = false;
      console.log("btn-1.click");
      button.style.opacity = "0";
      status = true;
      console.log(status);
      return;
    case "btn-2":
      console.log("btn-2.click");
      button.style.background = "crimson";
      return;
    case "btn-3":
      console.log("btn-3.click");
      button.style.background = "lightblue";
      return;
    case "btn-4":
      console.log("btn-4.click");
      button.classList.add("jitters");
      return;
    default:
      return undefined;
  }
}
