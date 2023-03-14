gsap.registerPlugin(ScrollTrigger);

// Animate step cards only for non-touch devices
if (ScrollTrigger.isTouch !== 1) {
  const leftSteps = gsap.utils.toArray(".step:first-child");
  const rightSteps = gsap.utils.toArray(".step:last-child");

  leftSteps.forEach((step) => {
    gsap.from(step, {
      opacity: 0,
      x: -100,
      duration: 0.5,
      scrollTrigger: {
        trigger: step,
        start: `top 70%`,
      },
    });
  });

  rightSteps.forEach((step) => {
    gsap.from(step, {
      opacity: 0,
      x: 100,
      duration: 0.5,
      scrollTrigger: {
        trigger: step,
        start: `top 70%`,
      },
    });
  });
}
