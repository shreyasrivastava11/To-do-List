let textBox = document.getElementById("input-box");

function adding() {
  let textValue = textBox.value;
  if (textBox.value === "") {
    alert("You must Write Something!");
  } else {
    let el = document.querySelector(".list-container");
    el.insertAdjacentHTML(
      "beforeend",
      `<li class="list-item"><input type="checkbox" id="unch" class="check-box"><span class="text-value">${textValue}</span><span class="cross"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="#5d5b5b" viewBox="0 0 256 256"><path d="M205.66,194.34a8,8,0,0,1-11.32,11.32L128,139.31,61.66,205.66a8,8,0,0,1-11.32-11.32L116.69,128,50.34,61.66A8,8,0,0,1,61.66,50.34L128,116.69l66.34-66.35a8,8,0,0,1,11.32,11.32L139.31,128Z"></path></svg></span></li>`
    );

    removing();
    togglebtn();
  }

  textBox.value = "";
}

document.querySelector(".btn").addEventListener("click", adding);

function removing() {
  const crosses = document.querySelectorAll(".cross");
  crosses.forEach((cross) => {
    cross.addEventListener("click", function (event) {
      const listItem = event.target.closest(".list-item");
      listItem.remove();
    });
  });
}

function togglebtn() {
  const check = document.querySelectorAll(".check-box");
  check.forEach((button) => {
    button.addEventListener("change", function (e) {
      const lst = e.target.closest(".list-item");
      if (e.target.checked) {
        lst.querySelector(".text-value").classList.add("tsk");
      } else {
        lst.querySelector(".text-value").classList.remove("tsk");
      }
    });
  });
}
