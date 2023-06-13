//////////////////////////////////////////////////
//// Aktualny rok
// const yearEl = document.querySelector(".year");
// const currentYear = new Date().getFullYear();
// yearEl.textContent = currentYear;
/////////////////////////////////////////////////
// Mobilna nawigacja menu

const btnNavEl = document.querySelector(".btn-mobile-nav");
const headerEl = document.querySelector(".header");

btnNavEl.addEventListener("click", function () {
  headerEl.classList.toggle("nav-open");
});

// Mobilna nav
const allLinks = document.querySelectorAll(".smooth:link");
allLinks.forEach(function (link) {
  link.addEventListener("click", function (e) {
    e.preventDefault();
    const href = link.getAttribute("href");

    // Scroll back to the top
    if (href === "#")
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    // Scroll to other links
    if (href !== "#" && href.startsWith("#")) {
      const sectionEl = document.querySelector(href);
      sectionEl.scrollIntoView({
        behavior: "smooth",
      });
    }
    // Close mobile navigation
    if (link.classList.contains("main-nav-link"))
      headerEl.classList.toggle("nav-open");
  });
});
///////////////////////////////////////////////////////////
// Sticky navigation

const sectionHeroEl = document.querySelector(".section-hero");

const obs = new IntersectionObserver(
  function (entries) {
    const ent = entries[0];
    if (ent.isIntersecting === false) document.body.classList.add("sticky");
    else document.body.classList.remove("sticky");
  },
  {
    // In the viewport
    root: null,
    threshold: 0,
    rootMargin: "-90px",
  }
);
obs.observe(sectionHeroEl);

///////////////////////////////////////////////////////////
// Animated jobs

// (() => {
//   const words = [
//     "handlowej",
//     "usługowej",
//     "e-commerce",
//     "dropshipping",
//     "zdrowotnej",
//     "beauty",
//     "finansowej",
//     "ubezpieczeniowej",
//   ];
//   let i = 0;
//   const selected = document.querySelector("#words");
//   setInterval(() => {
//     selected.textContent = words[i];
//     i = (i + 1) % words.length;
//   }, 1500);
// })();

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
  setInterval(()=> {
    if(selected.style.opacity === '0'){
      selected.style.opacity = 1;
      selected.textContent = words[i];
      i = (i + 1) % words.length;
    }else{
      selected.style.opacity = 0;
    }
  }, 2000)
})();
