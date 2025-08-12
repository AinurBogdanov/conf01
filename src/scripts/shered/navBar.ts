import { handleRouteChange } from './updateContent';
import { cleanUpScroll } from '../mainJs/initScroll';

export function initNavLinks() {
  const navLinks = document.querySelectorAll('.menu-item a');
  initHistory(navLinks);
}

export function initHistory(links: NodeListOf<Element>) {
  links.forEach((link) => {
    link.addEventListener('click', (e) => {
      e.preventDefault();

      const url = link.getAttribute('href');
      history.pushState(null, '', url);

      handleRouteChange();
      cleanUpScroll();
    });
  });
}
