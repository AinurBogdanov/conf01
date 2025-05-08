import { renderMenuHTML } from "../menuJs/renderMenu";
import { renderFooter } from "../footer/renderFooter";
import { updateContent } from "./updateContent";

export function initNavLinks() {
  const links = document.querySelectorAll('.menu-item');
  
  links.forEach((link) => {
    link.addEventListener('click', (e) => {
      e.preventDefault();

      const url = link.querySelector('a').getAttribute('href');
      
      const slug = url.split('/').filter(Boolean).pop();

      history.pushState({ slug }, '', url);

      updateContent(slug, url);
    });
  });
};

