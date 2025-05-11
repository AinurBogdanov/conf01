const footerHTML = `
  <div class="margin-top156"></div>
  <div class="footer-wrap">
    <div class="wrap">
      <footer class="footer">
      <div class="foot">
      <div class="footer-logo"></div>
          <div class="footer-sitemap">
          <a href="#">Кондитерская</a>
          </div>
          <div class="footer-sitemap"><a href="#">Кухня</a></div>
          <div class="footer-sitemap"><a href="#">Пекарня</a></div>
          <div class="footer-sitemap"><a href="#">фуршетноу меню</a></div>
          <div class="footer-sitemap"><a href="#">Напитки</a></div>
          <div class="footer-sitemap info">
            <div><a href="#">Адреса магазинов</a></div>
            <div><a href="#">Условия доставки</a></div>
            <div><a href="#">Клубная программа</a></div>
            <div><a href="#">Мобильное приложение</a></div>
          </div>
          <div class="footer-sitemap info padding-left"> 
              <div><a href="#">Обратная связь</a></div>
              <div><a href="#">Контакты</a></div>
              
              <div><a href="#">+7 495 183 87 58</a></div>
              <div><a href="#">salesmsk@wolkonsky.ru</a></div>
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
              <img src="/images/footer-images/wha2.svg" alt="">
          </a>
        </div>
        <div class="footer-links-cont">
          <div class="footer-links">
            <div class="footer-links-pay">
              <img src="/images/footer-images/pay.png" alt="img">
              <img class="sbp" src="/images/footer-images/sbp.png" alt="img">
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
  let isFooter =  document.querySelector('.footer-wrap');
  if ( isFooter ) {
    isFooter.remove();
  }
  location.insertAdjacentHTML("beforeend", footerHTML);
  
  const btn = document.querySelector('.footer-social-wha');
  const img = btn.querySelector('img');
  
  btn.addEventListener('mouseover', () => {
    img.src = '/images/footer-images/wha3.svg';
  });
  btn.addEventListener('mouseout', () => {
    img.src = '/images/footer-images/wha2.svg';
  });
}