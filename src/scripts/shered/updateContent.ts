import { navMenuHTML } from '../menuJs/renderMenu.js';
import { renderFooter } from '../footer/renderFooter.js';
import { renderMain } from '../mainJs/renderMain.js';
import data from '../../data/products.json';
import { cleanUpScroll } from '../mainJs/initScroll';
import { renderAddres } from '../address/addresMain';
import { Product } from '../types/products.js';

const imageMap = import.meta.glob(
  '../../assets/images/products-images/*.{jpg,jpeg,png,webp}',
  {
    eager: true,
    import: 'default',
  }
);
const resolvedImages: { [K: string]: any } = {};

for (const [path, value] of Object.entries(imageMap)) {
  const fileName = path.split('/').pop(); // product-image1.jpg
  if (fileName) {
    resolvedImages[fileName] = value;
  }
}
const container = document.querySelector('.content');

export function handleRouteChange() {
  const path = window.location.pathname;
  const urlPath: string[] = path.split('/').filter(Boolean);
  const html = document.querySelector('html');

  if (!urlPath[0] && html) {
    html.classList.add('_screen-scrolling');
    renderMain();
    return;
  }

  if (urlPath[0] && html) {
    html.classList.remove('_screen-scrolling');
    cleanUpScroll();
  }

  if (urlPath[0] === 'address') {
    renderAddres();
    renderFooter(document.body);
    console.log('addres rendered');
    return;
  }
  if (urlPath[0] === 'catalog') {
    fetchCatalog(urlPath);
    // console.log('render catalog');
  }
}

function fetchCatalog(urlPath: string[]) {
  renderCatalog(data);
}

function renderCatalog(data: Product[]) {
  const path = window.location.pathname;
  let productsHTML = '';

  if (container) {
    console.log('menu rendered');
    container.innerHTML = navMenuHTML();
  }

  data.forEach((product) => {
    productsHTML += `
    <div class="catalog-product">
    <a href="${product.image}">
          <div class="product-image">
            <img src="${resolvedImages[product.image]}" alt="${product.title}">
          </div>
          <p class="product-title">${product.title}</p>
          <div class="product-price">
            <div class="price">
              ${product.price}
            </div>
          </div>
        </a>
          <div class="product-counter">
            <div class="counter">
              <div class="counter-minus"></div>
              <div class="counter-text">1 ${product.unit}</div>
              <div class="counter-plus"></div>
            </div>
          </div>
          <div class="catalog-product-button">
            <a href="#" class="btn btn-bordered">В корзину</a>
          </div>
      </div>
    `;
  });

  const link = document.querySelector(`.catalog-nav-list a[href="${path}"]`);
  if (link) {
    link.classList.add('active');
  }
  const productsCont = document.querySelector('.catalog-list');
  if (productsCont) {
    productsCont.innerHTML = productsHTML;
  }
  renderFooter(document.body);
}
