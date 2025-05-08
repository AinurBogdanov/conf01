import { renderMain } from "./mainJs/renderMain";
import { initNavLinks } from "./shered/navBar";
import { updateContent } from "./shered/updateContent";

// deciding what content to show
const  curentPath = window.location.pathname;
if (curentPath === '/') {
    renderMain();
} else {
    const url = curentPath;
    const slug = curentPath.split('/').filter(Boolean).pop();
    // slug is the key word which will hint us what to show to user
    console.log(url);
updateContent(slug, url);
};

initNavLinks();
initPopstate();

function initPopstate() {
  window.addEventListener('popstate', (event) => {
    const slug = location.pathname.split('/').filter(Boolean).pop();
    const url = location.pathname;
    updateContent(slug, url); 
  });
}