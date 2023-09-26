const result = document.querySelector("#result");
const btns = document.querySelectorAll("button");

// functions

//clear function
function clearResult() {}

//calculate function
function calculateResult() {}

//append function
function appendValue(btnValue) {}

///////////////////////////////////////////////////////
for (let i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function () {
    let btnValue = btns[i].textContent;
    if (btnValue === "AC") {
      clearResult();
    } else if (btnValue === "=") {
      calculateResult();
    } else {
      appendValue();
    }
  });
}
