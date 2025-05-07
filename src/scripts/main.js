import { renderMain } from "./mainJs/renderMain";
import { initNavLinks } from "./navBar";
import { updateContent } from "./shered/shered";

const  curentPath = window.location.pathname;
  if (curentPath === '/') {
    renderMain();
  } else {
    const slug = curentPath.replace('/', '').replace('/', '');
    updateContent(slug);
  }

initNavLinks();
