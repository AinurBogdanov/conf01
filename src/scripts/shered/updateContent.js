import { renderMenuHTML } from "../menuJs/renderMenu.js";
import { renderFooter } from "../footer/renderFooter.js";
import { renderMain } from "../mainJs/renderMain.js";
import { initHistory } from "./navBar.js";


export function updateContent(slug, url) {
  console.log('updated content')
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

  const navLinks = document.querySelectorAll('.catalog-nav a');
  initHistory(navLinks);
  console.log('menu links were initialased');


  //mark as active

  const link = document.querySelector(`.catalog-nav-list a[href="${url}"]`);

  link.classList.add('active');


  renderFooter(document.body);
};

