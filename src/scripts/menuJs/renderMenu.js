import menuData from '../../data/menuList.json' assert { type: 'json'};
import { renderFooter } from '../footer/renderFooter';


const menuCategoryHTML = `
  <li>
    <div class="catalog-nav-category">Пекарня</div>
    <ul class="catalog-nav-list">
      <li>
        <a href="#" class="active">Все</a>
      </li>
      <li>
        <a href="#">Сладкая выпечка</a>
      </li>
      <li>
        <a href="#">Киши</a>
      </li>
      <li>
        <a href="#">Пироги и пирожки</a>
      </li>
      <li>
        <a href="#">Сендвичи</a>
      </li> 
      <li>
        <a href="#">Хлеб</a>
      </li> 
    </ul>
  </li>
`;

export function renderMenuHTML() {
  // const contentBox = document.querySelector('.content');
  // contentBox.innerHTML = menuHTML;

  // const catalogNavList = document.querySelector('.catalog-nav-list');

  let navCatalogHTML = '';

  menuData.menu.forEach((category) => {
    let subcategories = '';

    category.subcategories.forEach((subcategory) => {
      subcategories += `
      <li>
        <a href="#">${subcategory.title}</a>
      </li>
      `
    });

    navCatalogHTML += `
      <li>
        <div class="catalog-nav-category">${category.title}</div>
        <ul class="catalog-nav-list">
        ${subcategories}
        </ul>
      </li>
    `
  })

  const menuHTML = `    
  <div class="wrap">
    <div class="breadcrumbs">
      <a href="#">Главная страница</a> 
      • Пекарня
    </div>

    <div class="catalog">
      <div class="page-heading">
        <h1></h1>
      </div>
      <div class="catalog-nav">
        <ul class="catalog-nav-list nav-list-root">
          ${navCatalogHTML}
        </ul>
      </div>

      <div class="catalog-list">
      </div>

      <div class="catalog-more">
        <a href="#" class="btn btn-red">
          Ещё товары
        </a>
      </div>
    </div>
  </div>
  `;
  // catalogNavList.innerHTML = navCatalogHTML;

  return menuHTML;
}