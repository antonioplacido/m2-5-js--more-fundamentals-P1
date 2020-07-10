// Exercise 3-2
// ------------

// NO MODIFICATIONS OUTSIDE OF THE EXERCISE FOLDER (i.e. the css is read-only)

// Hint:
// create a toggleColor function
// Because we are now going to work with the opacity and background of the buttons,
// they need to be set here. So that they are referenceable via the the style attribute.
// initialize the background color for all of the buttons in here. (for loop)

function toggleColor(event) {}

intialStatus = document.getElementById("btn-list");
document.getElementById("btn-list").addEventListener("click", buttonChange);

intialStatus.style.backgroundColor = "gold";

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
