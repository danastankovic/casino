//toggle mobile menu function
function toggleActive() {
  var overlay = document.querySelector("#overlay");
  overlay.classList.toggle("open");
}

window.onload = function initFunc() {
  document
    .querySelector("#toggle-button")
    .addEventListener("click", toggleActive);
  //close mobile menu
};

var hideOverlay = document.getElementById("close-overlay");
hideOverlay.onclick = function() {
  toggleActive();
};

// DROPDOWN MENU

function toggleClass(elem, className) {
  if (elem.className.indexOf(className) !== -1) {
    elem.className = elem.className.replace(className, "");
  } else {
    elem.className = elem.className.replace(/\s+/g, " ") + " " + className;
  }

  return elem;
}

document
  .querySelector(".overlay-menu a")
  .addEventListener("click", function(event) {
    event.preventDefault();
  });

function toggleMenuDisplay(e) {
  const dropdown = e.currentTarget.parentNode;
  const menu = dropdown.querySelector(".menu");
  toggleClass(menu, "hide");
}

function handleOptionSelected(e) {
  toggleClass(e.target.parentNode, "hide");

  //trigger custom event
  document.querySelector(".dropdown .title").dispatchEvent(new Event("change"));
}

//get elements
const dropdownTitle = document.querySelector(".dropdown .title");

//bind listeners to these elements
dropdownTitle.addEventListener("click", toggleMenuDisplay);
