const footerHTML = `
  <div class="margin-top156"></div>
  <div class="footer-wrap">
    <div class="wrap">
      <footer class="footer">
        <div class="footer-logo"></div>
        <div class="foot">
          <div class="footer-sitemap">Кондитерская</div>
          <div class="footer-sitemap">Кухня</div>
          <div class="footer-sitemap">Пекарня</div>
          <div class="footer-sitemap">фуршетноу меню</div>
          <div class="footer-sitemap">Напитки</div>
          <div class="footer-sitemap info">
            <a href="#">Адреса магазинов</a>
            <a href="#">Условия доставки</a>
            <a href="#">Клубная программа</a>
            <a href="#">Мобильное приложение</a>
          </div>
          <div class="footer-sitemap info padding-left">
            <a href="#">Обратная связь</a>
            <a href="#">Контакты</a>
            
              <a href="#">+7 495 183 87 58</a>
              <a href="#">salesmsk@wolkonsky.ru</a>
        
          </div>
        </div>

        <div class="footer-social">
          <a class="social-vk" href="#">
            <svg class="svg-icon">
              <use xlink:href="#sym-social-vk"></use>
            </svg>
          </a>
          <a class="footer-social-wk" href="#">
            <svg class="svg-icon">
              <use xlink:href="#sym-social-tg"></use>
            </svg>
          </a>
          <a class="footer-social-wha" href="#">                  
              <img src="./src/assets/images/wha2.svg" alt="">
          </a>
        </div>
        <div class="footer-links-cont">
          <div class="footer-links">
            <div class="footer-links-pay">
              <img src="./src/assets/images/footer-images/pay.png" alt="img">
              <img class="sbp" src="./src/assets/images/footer-images/sbp.png" alt="img">
            </div>
            <div class="footer-adtional">
              <div class="rights">© 2025 «Волконский» | Все права защищены.</div>
              <div><a href="#">Политика конфиденциальности</a></div>
              <div><a href="#">Пользовательское соглашение</a></div>
              <div><a href="#">Правила программы лояльности</a></div>
              <div><a href="#">Прейскурант</a></div>
            </div>
          </div>
        </div>
      </footer>
    </div>    
  </div>
`
export function renderFooter(location) {
  if ( !document.querySelector('.footer-wrap')) {
    location.insertAdjacentHTML("beforeend", footerHTML);
  }
}