// 6da9318b-b941-4543-8438-2c5dc690c064\

function loadYandexMaps() {
  const API_KEY = '6da9318b-b941-4543-8438-2c5dc690c064'
  const script = document.createElement('script');

  script.src = `https://api-maps.yandex.ru/2.1/?apikey=${API_KEY}&lang=ru_RU&onload=onYmapsLoad`;

  script.async = true;

  window.onYmapsLoad = () => {
    createMap();
    delete window.onYmapsLoad;
  };

  document.head.appendChild(script);
}

function createMap() {
 ymaps.ready(() => {
    try {
      const map = new ymaps.Map('map', {
        center: [55.751574, 37.573856], // Москва
        zoom: 12,
        controls: ['zoomControl', 'typeSelector']
      });

      // Добавляем метку
      const placemark = new ymaps.Placemark([55.751574, 37.573856], {
        hintContent: 'Кремль',
        balloonContent: 'Московский Кремль'
      }, {
        preset: 'islands#redDotIcon'
      });

      map.geoObjects.add(placemark);
      
      console.log('Карта успешно создана');
      
    } catch (error) {
      console.error('Ошибка создания карты:', error);
    }
  });
}


// if (window.ymaps) {
//   console.log('API Яндекс.Карт уже загружен');
//   initMap();
// } else {
//   console.log('Загружаем API Яндекс.Карт...');
//   loadYandexMaps();
// }

// function loadYandexMaps() {
//   const script = document.createElement('script');
//   script.src = 'https://api-maps.yandex.ru/2.1/?apikey=6da9318b-b941-4543-8438-2c5dc690c064&lang=ru_RU';
//   script.onload = () => {
//     console.log('API успешно загружен! Версия:', ymaps.version);
//     initMap();
//   };
//   script.onerror = () => console.error('Ошибка загрузки API!');
//   document.head.appendChild(script);
// }

// function initMap() {
//   ymaps.ready(() => {
//     console.log('API готов к использованию');
//     new ymaps.Map('map', {
//       center: [55.76, 37.64],
//       zoom: 10
//     });
//     console.log('Карта создана!');
//   });
// }