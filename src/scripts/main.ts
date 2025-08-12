import { renderMain } from './mainJs/renderMain';
import { initNavLinks } from './shered/navBar';
import { handleRouteChange } from './shered/updateContent';

// deciding what content to show
const curentPath = window.location.pathname;

if (curentPath === '/') {
  renderMain();
} else {
  handleRouteChange();
}

initNavLinks();
initPopstate();

function initPopstate() {
  window.addEventListener('popstate', handleRouteChange);
}
