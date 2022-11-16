

window.addEventListener("scroll", e => {
   document.body.style.cssText += `--scrollTop: ${this.scrollY}px`;
});

gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

ScrollSmoother.create({
   wrapper: ".wrapper",
   content: ".content",
});

window.onload = function () {
   let preload = document.querySelector(".preloader");
   preload.style.opacity = "0";
   setTimeout(() => {
      document.body.classList.remove("lock");
      preload.remove();
   }, 2000);
}