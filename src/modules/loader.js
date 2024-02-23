const loaderDiv = document.getElementById("loading");

function displayLoader() {
  loaderDiv.classList.add("display");

  setTimeout(() => {
    loaderDiv.classList.remove("display");
  }, 3000);
}

function hideLoader() {
  loaderDiv.classList.remove("display");
}

export { displayLoader, hideLoader };
