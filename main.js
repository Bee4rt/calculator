const result = document.querySelector("#result");
const btns = document.querySelectorAll("button");

// functions

//clear function
function clearResult() {
  result.value = "";
}

//calculate function
function calculateResult() {
  result.value = eval(result.value);
}

//append function add number to the input += to add number not replace them
function appendValue(btnValue) {
  result.value += btnValue;
}

//delete function
function delValue(btnValue) {
  let res = result.toString().slice(0, -1);
  result.innerHTML = res;
}

///////////////////////////////////////////////////////
for (let i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function () {
    let btnValue = btns[i].textContent;
    if (btnValue === "AC") {
      clearResult();
    } else if (btnValue === "=") {
      calculateResult();
    } else {
      appendValue(btnValue);
    }
  });
}
