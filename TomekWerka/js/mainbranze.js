///////////////////////////////////////////////////////////
// Animated jobs

(() => {
  const words = [
    "handlowej",
    "usługowej",
    "e-commerce",
    "dropshipping",
    "zdrowotnej",
    "beauty",
    "finansowej",
    "ubezpieczeniowej",
  ];
  let i = 1;
  const selected = document.querySelector("#words");

  setInterval(() => {
    if (selected.style.opacity === "0") {
      selected.style.opacity = 1;
      selected.textContent = words[i];
      i = (i + 1) % words.length;
    } else {
      selected.style.opacity = 0;
    }
  }, 1500);
})();
