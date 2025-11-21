import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

// SECTION REVEAL (services, about, contact)
gsap.utils.toArray(".gsap-reveal").forEach((section) => {
  gsap.from(section, {
    opacity: 0,
    y: 60,
    duration: 1,
    ease: "power3.out",
    scrollTrigger: {
      trigger: section,
      start: "top 80%",              // when top of section hits 80% viewport height
      toggleActions: "play none none reverse",
    },
  });
});

// CARD STAGGER IN SERVICES
gsap.from(".card", {
  scrollTrigger: {
    trigger: ".services",
    start: "top 75%",
    // markers: true, // uncomment to debug
  },
  y: 40,
  opacity: 0,
  duration: 0.7,
  ease: "power2.out",
  stagger: 0.15,
});

window.addEventListener("load", () => {
  const loader = document.getElementById("loader");
  setTimeout(() => {
    loader.classList.add("hide");
  }, 1700);
});
