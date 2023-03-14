gsap.registerPlugin(ScrollTrigger);

// Animate mentors avatars only for non-touch devices
if (ScrollTrigger.isTouch !== 1) {
  gsap
    .timeline({
      scrollTrigger: {
        trigger: ".about__mentors",
        start: "top 60%",
      },
    })
    .from(".about__mentors-card", {
      opacity: 0,
      duration: 0.5,
      stagger: 0.2,
    })
    .from(
      ".about__desc",
      {
        opacity: 0,
        x: 100,
      },
      "<"
    );
}
