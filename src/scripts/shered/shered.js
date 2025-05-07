import { renderMenuHTML } from "../menuJs/renderMenu.js";
import { renderFooter } from "../footer/renderFooter.js";

export function updateContent(slug) {
  const content = document.querySelector('.content');
  const templates = {
    catalog: renderMenuHTML()
  };
  
  content.innerHTML = templates[slug] || alert('no content was found');
  
  renderFooter(document.body);
};
