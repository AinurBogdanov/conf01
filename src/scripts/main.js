import { renderMain } from "./mainJs/renderMain";
import { initNavLinks } from "./shered/navBar";
import { handleRouteChange } from "./shered/updateContent.mjs";

// deciding what content to show
const  curentPath = window.location.pathname;
let cleanUpScroll = () => {};

if (curentPath === '/') {
  cleanUpScroll = renderMain();
} else {
  handleRouteChange();
};

initNavLinks();
initPopstate();

function initPopstate() {
  window.addEventListener('popstate', handleRouteChange
);}