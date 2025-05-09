import { navMenuHTML } from "../menuJs/renderMenu.js";
import { renderFooter } from "../footer/renderFooter.js";
import { renderMain } from "../mainJs/renderMain.js";
import { initHistory } from "./navBar.js";
import  data from '../../data/products.json';

const imageMap = import.meta.glob('../../assets/images/products-images/*.{jpg,jpeg,png,webp}', {
  eager: true,
  import: 'default',
});
const resolvedImages = {};

for (const [path, value] of Object.entries(imageMap)) {
  const fileName = path.split('/').pop(); // product-image1.jpg
  resolvedImages[fileName] = value;
}

export function handleRouteChange() {
  const path = window.location.pathname; 
  const parts = path.split('/').filter(Boolean);



  if (parts[1] === 'pekarnya' && !parts[2]) {
    document.querySelector('html').classList.remove('_screen-scrolling');

    const category = parts[1];
    const subcategory = parts[2] || null;
  
    fetchDataAndRender(category, subcategory);
  }

  const link = document.querySelector(`.catalog-nav-list a[href="${path}"]`);

  link.classList.add('active');
};
  
function fetchDataAndRender(category, subcategory) {
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
  const container = document.querySelector('.content');
  container.innerHTML = navMenuHTML();

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

  productsCont.innerHTML = productsHTML;
  renderFooter(document.body);
}  

  // const content = document.querySelector('.content');
  // if (url === '/') {
  //   renderMain();
  //   return;
  // };

  // const templates = {
  //   pekarnya: renderMenuHTML(),
  //   torty: renderMenuHTML(),
  //   konditerskaya: renderMenuHTML(),
  //   kuhnya: renderMenuHTML(),
  //   ['fur-shet']: renderMenuHTML(),
  //   ['predzakaz-72h']: renderMenuHTML(),
  //   ['napitki']: renderMenuHTML(),
  //   ['zakaznye-torty-48h']: renderMenuHTML()
  // };
  
  // if (templates[slug] === '') {
  //   content.innerHTML = templates[slug];
  // } else if (!templates[slug]) {
  //   console.log('falsy value was given');
  //   return
  // } 

  // content.innerHTML = templates[slug];

  // const navLinks = document.querySelectorAll('.catalog-nav a');
  // initHistory(navLinks);


  //mark as active

  // const link = document.querySelector(`.catalog-nav-list a[href="${url}"]`);

  // link.classList.add('active');


  // renderFooter(document.body);


