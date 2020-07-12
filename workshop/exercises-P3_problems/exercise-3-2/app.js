// Exercise 3-2
// ------------

// NO MODIFICATIONS OUTSIDE OF THE EXERCISE FOLDER (i.e. the css is read-only)

// Hint:
// create a toggleColor function
// Because we are now going to work with the opacity and background of the buttons,
// they need to be set here. So that they are referenceable via the the style attribute.
// initialize the background color for all of the buttons in here. (for loop)

for (let i = 1; i < 5; i++) {
  const startButton = document.getElementById(`btn-${i}`);
  startButton.style.opacity = `100`;
  startButton.style.backgroundColor = `gold`;
}

function toggleColor(event) {}

intialStatus = document.getElementById("btn-list");
intialStatus.addEventListener("click", buttonChange);

function buttonChange(event) {
  let button = event.target;
  let buttonid = button.getAttribute("id");

  switch (buttonid) {
    case "btn-1":
      if (button.style.opacity > "0") {
        button.style.opacity = "0";
        console.log("dissapear!");
      } else if (button.style.opacity < 1) {
        button.style.opacity = "1";
        console.log("reappear!");
      }
      return;
    case "btn-2":
      if (button.style.background !== "crimson") {
        console.log("btn-2.click");
        button.style.background = "crimson";
      } else {
        button.style.background = "gold";
        console.log("turning back gold");
        break;
      }
      return;
    case "btn-3":
      if (button.style.background !== "lightblue") {
        console.log("btn-3.click");
        button.style.background = "lightblue";
      } else {
        button.style.background = "gold";
        console.log("turning back gold");
      }
      return;
    case "btn-4":
      console.log("btn-4.click");
      button.classList.toggle("jitters");
      return;
    default:
      return undefined;
  }
}
