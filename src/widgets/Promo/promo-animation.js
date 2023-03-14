// Will animate main header only for non-touch devices
if (ScrollTrigger.isTouch !== 1) {
  gsap
    .timeline()
    .from(".promo__header-span1, .promo__button", {
      opacity: 0,
      x: -1000,
      duration: 1,
    })
    .from(
      ".promo__subheader, .promo__header-span2",
      {
        opacity: 0,
        x: 1000,
        duration: 1,
      },
      "<"
    )
    .from(".promo__header-span3", {
      opacity: 0,
      x: -1000,
      duration: 1,
    });
}
