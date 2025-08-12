import { initSwiper, initSecondSwiper } from './InitSwiper';
import { initScroll } from './initScroll';
import { renderFooter } from '../footer/renderFooter.ts';

export function renderMain() {
  const content = document.querySelector('.content');
  const mainHTML = `     
    <div class="screen-scroll ">
      <div class="promo">
        <div class="wrap">
          <div class="swiper-container">
            <div class="swiper-wrapper">
              <div class="swiper-slide">
                <div class="promo_link">
                  <a href="#" class="btn">Подробнее</a>
                  <div class="promo_img">
                    <img src="./src/assets/images/slide-image1.jpg" alt="">
                  </div>
                </div>
              </div>

              <div class="swiper-slide">
                <div class="promo_link">
                  <a href="#" class="btn">Подробнее</a>
                  <div class="promo_img">
                    <img src="./src/assets/images/slide-image2.jpg" alt="">
                  </div>
                </div>
              </div>

              <div class="swiper-slide">
                <div class="promo_link">
                  <a href="#" class="btn">Подробнее</a>
                  <div class="promo_img">
                    <img src="./src/assets/images/slider-image3.png" alt="">
                  </div>
                </div>
              </div>
            </div>
            <div class="swiper-pagination"></div>
          </div>
        </div>
      </div>
    </div>

    <div class="screen-scroll">
      <div class="main-categories">
        <div class="wrap">
          <div class="main-label">
            <div class="main-lable-icon">
                <img src="./src/assets/images/lable-icon-inside.svg" alt="">
            </div>
            Категории
            <div class="main-categories__paginator swiper-pagination-fraction">
              <!-- <span class="swiper-pagination-current"></span> -->
              <!-- <span class="swiper-pagination-total"></span> -->
            </div>
          </div>

          <div class="swiper-container-main main-categories-slider">
            <div class="swiper-wrapper">

              <div class="swiper-slide">
                <div class="main-category">
                  <a href="#">
                    <h2 class="main-cartegory-title">Пекарня</h2>
                  </a>
                  <a href="#" class="main-subcategory">
                    <div class="main-subcategory-title">
                      Сладкая выпечка 
                      <div class="main-subcategory-count">13</div>
                      <div class="main-subcategory-img">
                        <img src="./src/assets/images/menu-slider-images/bakeary1.jpg" alt="image">
                      </div>
                    </div>  
                  </a>
                  <a href="#" class="main-subcategory">
                    <div class="main-subcategory-title">
                      Киши
                      <div class="main-subcategory-count">13</div>
                      <div class="main-subcategory-img">
                        <img src="./src/assets/images/menu-slider-images/bakeary2.jpg" alt="image">
                      </div>
                    </div>  
                  </a>
                  <a href="#" class="main-subcategory">
                    <div class="main-subcategory-title">
                      Пироги и пирожки
                      <div class="main-subcategory-count">13</div>
                      <div class="main-subcategory-img">
                        <img src="./src/assets/images/menu-slider-images/bakeary3.jpg" alt="image">
                      </div>
                    </div>  
                  </a>
                  <a href="#" class="main-subcategory">
                    <div class="main-subcategory-title">
                      Сэндвичи
                      <div class="main-subcategory-count">13</div>
                      <div class="main-subcategory-img">
                        <img src="./src/assets/images/menu-slider-images/bakeary4.png" alt="image">
                      </div>
                    </div>  
                  </a>
                  <a href="#" class="main-subcategory">
                    <div class="main-subcategory-title">
                      Хлеб
                      <div class="main-subcategory-count">13</div>
                      <div class="main-subcategory-img">
                        <img src="./src/assets/images/menu-slider-images/bakeary5.jpg" alt="image">
                      </div>
                    </div>  
                  </a>
                </div>
              </div>
              <div class="swiper-slide">
                <div class="main-category">
                  <a href="#">
                    <h2 class="main-cartegory-title">Торты</h2>
                  </a>
                  <a href="#" class="main-subcategory">
                    <div class="main-subcategory-title">
                      Заказные торты
                      <div class="main-subcategory-count">13</div>
                      <div class="main-subcategory-img">
                        <img src="./src/assets/images/menu-slider-images/cake1.jpg" alt="image">
                      </div>
                    </div>  
                  </a>
                  <a href="#" class="main-subcategory">
                    <div class="main-subcategory-title">
                      Готовые торты
                      <div class="main-subcategory-count">13</div>
                    </div>  
                  </a>
                </div>
              </div>
              <div class="swiper-slide">
                <div class="main-category">
                  <a href="#">
                    <h2 class="main-cartegory-title">Кондитерская</h2>
                  </a>
                  <a href="#" class="main-subcategory">
                    <div class="main-subcategory-title">
                      Пирожные
                      <div class="main-subcategory-count">13</div>
                      <div class="main-subcategory-img">
                        <img src="src\assets\images\menu-slider-images\confectionary1.jpg" alt="image">
                      </div>
                    </div>  
                  </a>
                  <a href="#" class="main-subcategory">
                    <div class="main-subcategory-title">
                      Десерты
                      <div class="main-subcategory-count">13</div>
                      <div class="main-subcategory-img">
                        <img src="src\assets\images/menu-slider-images/confectionary2.webp" alt="image">
                      </div>
                    </div>  
                  </a>
                </div>
              </div>
              <div class="swiper-slide">
                <div class="main-category">
                  <a href="#">
                    <h2 class="main-cartegory-title">Кухня</h2>
                  </a>
                  <a href="#" class="main-subcategory">
                    <div class="main-subcategory-title">
                      Горячие блюда
                      <div class="main-subcategory-count">13</div>
                      <div class="main-subcategory-img">
                        <img src="src\assets\images\menu-slider-images\kuhna1.jpg" alt="image">
                      </div>
                    </div>  
                  </a>
                  <a href="#" class="main-subcategory">
                    <div class="main-subcategory-title">
                      Завтраки
                      <div class="main-subcategory-count">13</div>
                      <div class="main-subcategory-img">
                        <img src="src\assets\images\menu-slider-images\kuhna2.jpg" alt="image">
                      </div>
                    </div>  
                  </a>
                  <a href="#" class="main-subcategory">
                    <div class="main-subcategory-title">
                      Салаты
                      <div class="main-subcategory-count">13</div>
                      <div class="main-subcategory-img">
                        <img src="src\assets\images\menu-slider-images\kuhna3.jpg" alt="image">
                      </div>
                    </div>  
                  </a>
                  <a href="#" class="main-subcategory">
                    <div class="main-subcategory-title">
                      Супы
                      <div class="main-subcategory-count">13</div>
                      <div class="main-subcategory-img">
                        <img src="src\assets\images\menu-slider-images\kuhna4.jpg" alt="image">
                      </div>
                    </div>  
                  </a>
                </div>
              </div>
              <div class="swiper-slide">
                <div class="main-category">
                  <a href="#">
                    <h2 class="main-cartegory-title">Фуршетное меню</h2>
                  </a>
                  <a href="#" class="main-subcategory">
                    <div class="main-subcategory-title">
                      Канкапе и салаты  
                      <div class="main-subcategory-count">13</div>
                      <div class="main-subcategory-img">
                        <img src="src\assets\images\menu-slider-images\fur1.jpg" alt="image">
                      </div>
                    </div>  
                  </a>
                  <a href="#" class="main-subcategory">
                    <div class="main-subcategory-title">
                      Шашлыки 
                      <div class="main-subcategory-count">13</div>
                      <div class="main-subcategory-img">
                        <img src="src\assets\images\menu-slider-images\fur2.jpg" alt="image">
                      </div>
                    </div>  
                  </a>
                  <a href="#" class="main-subcategory">
                    <div class="main-subcategory-title">
                      Круассаны и сэндвичи  
                      <div class="main-subcategory-count">13</div>
                      <div class="main-subcategory-img">
                        <img src="src\assets\images\menu-slider-images\fur3.jpg" alt="image">
                      </div>
                    </div>  
                  </a>
                  <a href="#" class="main-subcategory">
                    <div class="main-subcategory-title">
                      Десертный стол  
                      <div class="main-subcategory-count">13</div>
                      <div class="main-subcategory-img">
                        <img src="src\assets\images\menu-slider-images\fur4.jpg" alt="image">
                      </div>
                    </div>  
                  </a>
                  <a href="#" class="main-subcategory">
                    <div class="main-subcategory-title">
                      Брускетты
                      <div class="main-subcategory-count">13</div>
                      <div class="main-subcategory-img">
                        <img src="src\assets\images\menu-slider-images\fur5.jpg" alt="image">
                      </div>
                    </div>  
                  </a>
                </div>
              </div>
              <div class="swiper-slide">
                <div class="main-category">
                  <a href="#">
                    <h2 class="main-cartegory-title">Предзаказ за 72 часа</h2>
                  </a>
                  <a href="#" class="main-subcategory">
                    <div class="main-subcategory-title">
                      Пирожки на заказ
                      <div class="main-subcategory-count">13</div>
                    </div>  
                  </a>
                  <a href="#" class="main-subcategory">
                    <div class="main-subcategory-title">
                      Каравай на заказ
                      <div class="main-subcategory-count">13</div>
                    </div>  
                  </a>
                  <a href="#" class="main-subcategory">
                    <div class="main-subcategory-title">
                      Кулебяки на заказ
                      <div class="main-subcategory-count">13</div>
                    </div>  
                  </a>
                  <a href="#" class="main-subcategory">
                    <div class="main-subcategory-title">
                      Пироги на заказ
                      <div class="main-subcategory-count">13</div>
                    </div>  
                  </a>
                </div>
              </div>
              <div class="swiper-slide">
                <div class="main-category">
                  <a href="#">
                    <h2 class="main-cartegory-title">Напитки</h2>
                  </a>
                  <a href="#" class="main-subcategory">
                    <div class="main-subcategory-title">
                      Напитки 
                      <div class="main-subcategory-count">13</div>
                      <div class="main-subcategory-img">
                        <img src="./src/assets/images/menu-slider-images/drinks1.jpg" alt="image">
                      </div>
                    </div>  
                  </a>
                </div>
              </div>
              <div class="swiper-slide">
                <div class="main-category">
                  <a href="#">
                    <h2 class="main-cartegory-title">Заказные торты, предзаказ за 48 часов</h2>
                  </a>
                  <a href="#" class="main-subcategory">
                    <div class="main-subcategory-title">
                      Заказные торты, предзаказ за 48 часов
                      <div class="main-subcategory-count">1</div>
                      <div class="main-subcategory-img">
                        <img src="./src/assets/images/menu-slider-images/bakeary1.jpg" alt="image">
                      </div>
                    </div>  
                  </a>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="screen-scroll screen-scroll-scrollable">
      <div class="wrap">
        <div class="full-wrap">

          <h1 class="about-us-title">
            Волконский 
          </h1>

          <div class="row">
            <p class="description">
              Первая в России сеть традиционных кафе-кондитерских
            </p>
          </div>

          <div class="image-gradient-cont">
            <img class="coffee-man-img" src="./src/assets/images/about-us-img/coffee-man.jpg" alt="image">
          </div>
          <h2 class="moto">Вкусно и стиль жизни</h2>

          <div class="images-row">
            <img src="./src/assets/images/about-us-img/third-slide2.jpg" alt="image">
            <img src="./src/assets/images/about-us-img/third-slide3.jpg" alt="image">
          </div>
          <div class="margin-top-68"></div>

          <div class="secrert-container">
            <div class="secret-heading">
              <h3 class="secret">В чём секрет нашей продукции?</h3>
            </div>
            <div class="secret-description">
              <p class="description-text">С первого дня мы работаем так, чтобы название Волконский для наших Гостей стало синонимом слова «качество». Отборные натуральные ингредиенты  и высокий профессионализм небезразличных людей стали прочным фундаментом нашего бизнеса. </p>
              <p class="description-text margin-top-68">Но Волконский – это не просто бизнес. Мы гарантируем – каждый багет и круассан, все наши продукты, проходят через руки наших мастеров. Эти люди вкладывают в работу тепло и искреннюю любовь к тому, что они делают. У нашего бизнеса, как  и у нашего хлеба, есть душа! Сутки от замеса до выпекания – живое тесто медленно набирает вкус и аромат. Долгий цикл приготовления и непривычно короткий срок хранения – именно так мы поддерживаем то качество, которое так ценят наши Гости.</p>
              <p class="description-text margin-top-68">Благодаря фанатично увлеченной своим делом команде и скрупулезному отношению к полученному результату Волконский уже многие годы ассоциируется в сознании наших гостей с тем местом, где они могут найти по-настоящему качественный и натуральный продукт, а также теплую атмосферу и высококлассный сервис.</p>
            </div>
          </div>
          <div class="margin-top-104"></div>
          <div class="image-fullwidth-left">
            <div class="image-gradient">
              <img src="./src/assets/images/about-us-img/big-image.jpg" alt="" class="big-image">
            </div>
          </div>
          <div class="values-flexbox margin-top-104">
            <div class="values-image">
              <img src="./src/assets/images/about-us-img/third-slide4.jpg" alt="">
            </div>

            <div class="values-text">
              <p class="our-values-title">Наши ценности</p>
              <div class="margin-top-104"></div>
              <h3 class="traditions">Традиции</h3>
              <p class="description-text">Волконский – одна из немногих российских компаний, долгие годы поддерживающих и развивающих старинные гастрономические традиции, как французские, так и русские. Симфония вкуса, которую мы создаем каждый день, состоит из муки, родниковой воды, натуральных заквасок, и конечно, ручного труда наших мастеров.   Это простой рецепт нашего успеха.</p>
            </div>
          </div>  
        </div>
      </div>

      <div class="margin-top-104"></div>
  
    </div>
  `;
  content.innerHTML = mainHTML;

  initSwiper();
  initSecondSwiper();
  const footerLocation = document.querySelector('.screen-scroll-scrollable');
  renderFooter(footerLocation);
  initScroll();
}
