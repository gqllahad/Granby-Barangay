let getStart = document.getElementById("get-start");

const scrollElements = document.querySelectorAll(".scroll-reveal");

getStart.addEventListener("click", () => {
    const target = document.getElementById("hero");

    target.scrollIntoView({
        behavior: "smooth", 
        block: "start"
    })
});

// Scrolling reveal
function elementInView(el, offset = 0) {
  const elementTop = el.getBoundingClientRect().top;
  return elementTop <= (window.innerHeight || document.documentElement.clientHeight) - offset;
}

function displayScrollElement(el) {
  el.classList.add("active");
}

function hideScrollElement(el) {
  el.classList.remove("active");
}

function handleScrollAnimation() {
  scrollElements.forEach(el => {
    if (elementInView(el, 100)) {
      displayScrollElement(el);
    } else {
      hideScrollElement(el);
    }
  });
}

window.addEventListener("scroll", () => {
  handleScrollAnimation();
});

handleScrollAnimation();

document.addEventListener("DOMContentLoaded", () => {
    const btn = document.getElementById("ctaBtn");

    btn.addEventListener("click", () => {
        alert("Button clicked!");
    });
});


