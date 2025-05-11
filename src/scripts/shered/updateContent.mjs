import { navMenuHTML } from "../menuJs/renderMenu.js";
import { renderFooter } from "../footer/renderFooter.js";
import { renderMain } from "../mainJs/renderMain.js";
import  data from '../../data/products.json';
import { cleanUpScroll } from "../mainJs/initScroll.js";
import { renderAddres } from "../address/addresMain.js";

const imageMap = import.meta.glob('../../assets/images/products-images/*.{jpg,jpeg,png,webp}', {
  eager: true,
  import: 'default',
});
const resolvedImages = {};

for (const [path, value] of Object.entries(imageMap)) {
  const fileName = path.split('/').pop(); // product-image1.jpg
  resolvedImages[fileName] = value;
}
const container = document.querySelector('.content');

export function handleRouteChange() {
  const path = window.location.pathname; 
  const parts = path.split('/').filter(Boolean);

  if (!parts[0]) {
    document.querySelector('html').classList.add('_screen-scrolling');
    renderMain();
    return;
  }

  if (parts[0]) {
    document.querySelector('html').classList.remove('_screen-scrolling');
    cleanUpScroll();
  }

  if (parts[0] === 'address') {
    renderAddres();
    renderFooter(document.body);
    console.log('addres rendered')
    return
  } 
  if (parts[0] === 'catalog') {
    fetchCatalog(parts);
    console.log('render catalog')
  }  
};
  
function fetchCatalog(parts) {
  const category = parts[1];
  const subcategory = parts[2] || null;

  const endpoint = subcategory
  ? `/api/catalog/${category}/${subcategory}`
  : `/api/catalog/${category}`;

  // fetch(endpoint)
  //   .then(resp => resp.json())
  //   .then(data => {
  //     renderCatalog(data);
  //   })
  renderCatalog(data)
}
  
function renderCatalog(data) {
  container.innerHTML = navMenuHTML();

  const path = window.location.pathname; 
  const productsCont = document.querySelector('.catalog-list')

  let productsHTML = ''

  data.forEach(product => {
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
    `
  })

  const link = document.querySelector(`.catalog-nav-list a[href="${path}"]`);
  link.classList.add('active');
  
  productsCont.innerHTML = productsHTML;
  renderFooter(document.body);
}

