export function initScroll() {
  let currentScreen = 0;
  const screens = document.querySelectorAll('.screen-scroll');
  const totalScreens = screens.length;
  let isScrolling = false;
  
  function scrollToScreen(index) {
    if (index < 0 || index >= totalScreens) return;

    isScrolling = true;
    currentScreen = index;
    window.scrollTo({
      top: screens[index].offsetTop,
      behavior: 'smooth',
    });
    setTimeout(() => {
      isScrolling = false;
    }, 1000);
  }

  document.addEventListener('wheel', (e) => {
    if (isScrolling) return;

    if (e.deltaY > 0) {
      scrollToScreen(currentScreen + 1);
    } else {
      scrollToScreen(currentScreen - 1);
    }
  })
}
