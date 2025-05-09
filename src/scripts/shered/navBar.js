import { updateContent } from "./updateContent";

export function initNavLinks() {
  const navLinks = document.querySelectorAll('.menu-item a');
  initHistory(navLinks);
  console.log('header navLinks were initialazed');
};

export function initHistory(links) {
  links.forEach((link) => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
 
            const url = link.getAttribute('href');
      const slug = url.split('/').filter(Boolean).pop();
 
      history.pushState({ slug }, '', url);
      updateContent(slug, url);
    });
  });
}
