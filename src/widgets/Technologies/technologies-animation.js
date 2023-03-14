gsap.registerPlugin(ScrollTrigger);

// Animate technology badges only for non-touch devices
if (ScrollTrigger.isTouch !== 1) {
  gsap
    .timeline({
      scrollTrigger: {
        trigger: ".technologies__list",
        start: "top 60%",
      },
    })
    .from(".technologies__item", {
      opacity: 0,
      y: 100,
      duration: 0.5,
      stagger: 0.2,
    });
}
