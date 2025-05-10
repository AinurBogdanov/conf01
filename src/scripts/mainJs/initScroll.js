let currentCleanUp = null;

export function initScroll() {
  const screens = document.querySelectorAll('.screen-scroll');
  const totalScreens = screens.length;
  let isScrolling = false;
  
  if (!screens.length) return;

  let currentScreen = Array.from(screens).findIndex(screen => {
    const rect = screen.getBoundingClientRect();
    return rect.top <= window.innerHeight / 2 &&  rect.bottom >= window.innerHeight / 2;
  });
  
  if (currentScreen === -1) currentScreen = 0;

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
  const wheelHandler = (e) => {
    console.log('wheel')
    const isScrollingPage = document.querySelector('html._screen-scrolling') !== null;
    if (isScrolling || !isScrollingPage) return;

    const activeScreen = screens[currentScreen];
    const scrollable = activeScreen.classList.contains('screen-scroll-scrollable')
    ? activeScreen
    : null;
    
    if (scrollable) {
      const scrollTop = scrollable.scrollTop;
      const scrollHeight = scrollable.scrollHeight;
      const clientHeight = scrollable.clientHeight;

      const atTop = scrollTop === 0;
      const atBottom = scrollTop + clientHeight >= scrollHeight - 1;
      
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
    };
  };

  document.addEventListener('wheel', wheelHandler, { passive:false});

  function cleanUpScroll() {
    document.removeEventListener('wheel', wheelHandler)
  };

  currentCleanUp = cleanUpScroll;

  return cleanUpScroll;
};

export function cleanUpScroll() {
  if (currentCleanUp) currentCleanUp();
  currentCleanUp = null;
}
