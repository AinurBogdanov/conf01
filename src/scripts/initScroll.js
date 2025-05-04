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
    }, 800);
  }

  document.addEventListener('wheel', (e) => {
    if (isScrolling) return;

    const activeScreen = screens[currentScreen];
    const scrollable = activeScreen.classList.contains('screen-scroll-scrollable')
    ? activeScreen
    : null;

    console.log(scrollable);// not found 
    if (scrollable) {
      const scrollTop = scrollable.scrollTop;
      const scrollHeight = scrollable.scrollHeight;
      const clientHeight = scrollable.clientHeight;

      const atTop = scrollTop === 0;
      const atBottom = scrollTop + clientHeight >= scrollHeight - 1;
      
      // if (e.deltaY > 0 && atBottom) {
      //   e.preventDefault();
      //   scrollToScreen(currentScreen + 1);
      // } else 
      if (e.deltaY < 0 && atTop) {
        e.preventDefault();
        scrollToScreen(currentScreen - 1);
      }
    } else {
      e.preventDefault();
      if (e.deltaY > 0) {
        scrollToScreen(currentScreen + 1);
      } else {
        scrollToScreen(currentScreen - 1);
      }
    }

  }, { passive:false});
};
