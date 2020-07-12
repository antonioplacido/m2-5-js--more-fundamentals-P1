// Exercise 3-3
// ----------

// NO MODIFICATIONS OUTSIDE OF THE EXERCISE FOLDER (i.e. the css is read-only)

// HINT:
// to remove the 'jitters' class, check the length of the classList.

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

  let togglestate = false;

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
      togglestate = true;
      console.log(togglestate);
      return;
    case "reset":
      for (let i = 1; i < 5; i++) {
        const startButton = document.getElementById(`btn-${i}`);
        startButton.style.opacity = `100`;
        startButton.style.backgroundColor = `gold`;
        // startButton.classList.toggle("jitters");
        if (i === 4) {
          startButton.classList.toggle("jitters");
        }
      }
    default:
      return undefined;
  }
}
