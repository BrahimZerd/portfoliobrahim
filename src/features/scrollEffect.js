

export default function showElements () {
const scrollElements = document.querySelectorAll('.js-scroll');
  scrollElements.forEach((el) => {
    el.style.opacity = 0
  });



  const elementInView = (el) => {
    const elementTop = el.getBoundingClientRect().top;
    return (
      elementTop <= (window.innerHeight || document.documentElement.clientHeight)
    );
  };

  const displayScrollElement = (element) => {
    element.classList.add("scrolled");
    element.style.opacity = 1;
  };
  



  const hideScrollElement = (element) => {
    element.classList.remove("scrolled");
  };
  const handleScrollAnimation = () => {
    scrollElements.forEach((el) => {
      if (elementInView(el, 100)) {
        displayScrollElement(el);
      } else {
        hideScrollElement(el);
      }
    })
  }

  window.addEventListener('scroll', () => {
    handleScrollAnimation();
  })
};