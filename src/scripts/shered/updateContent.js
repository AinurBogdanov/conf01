import { renderMenuHTML } from "../menuJs/renderMenu.js";
import { renderFooter } from "../footer/renderFooter.js";
import { renderMain } from "../mainJs/renderMain.js";

export function updateContent(slug, url) {
  const content = document.querySelector('.content');
  if (url === '/') {
    renderMain();
    return;
  };

  const templates = {
    pekarnya: renderMenuHTML(),
    torty: renderMenuHTML(),
    konditerskaya: '',
    kuhnya: '',
    ['fur-shet']: '',
    ['predzakaz-72h']: '',
    ['napitki']: '',
    ['zakaznye-torty-48h']: ''
  };
  
  if (templates[slug] === '') {
    content.innerHTML = templates[slug];
  } else if (!templates[slug]) {
    console.log('falsy value was given');
    return
  } 

  content.innerHTML = templates[slug];
  
  //mark as active

  const link = document.querySelector(`.catalog-nav-list a[href="${url}"]`);

  link.classList.add('active');


  renderFooter(document.body);
};
