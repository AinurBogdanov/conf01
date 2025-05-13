// 6da9318b-b941-4543-8438-2c5dc690c064\

export function loadYandexMaps() {
  const API_KEY = '07d3b38a-38e5-40d9-82c6-c6e51eaa0054'
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
    const bounds = [[55.4899, 37.3193], [56.0097, 38.0801]];
    
  try {
    const map = new ymaps.Map('ymap', {
    center: [55.751574, 37.573856],
    zoom: 12,
    controls: ['zoomControl', 'typeSelector'],
  });

  // map.setLocation({
  //    bounds: [[55.4899, 37.3193], [56.0097, 38.0801]]
  //   });

  const placemark = new ymaps.Placemark([55.785169, 37.564042], {
    hintContent: 'Адресс кафе',
    balloonContent: 'Волконский'
  }, {
    preset: 'islands#icon',
    iconColor:'#25A4A1' 

  });

  const customPlaceMark = new ymaps.Placemark([55.765713, 37.591088], {
    hintContent: 'Адресс кафе',
    balloonContent: 'Волконский'
  }, {
    iconLayout: 'default#image',
    iconImageHref: '/public/images/map/location-pin1.png',
    iconImageSize: [50, 50],
    iconImageOffset: [-15, -15]
  }

  );

  customPlaceMark.events
    .add('mouseenter', function (e) {
        e.get('target').options.set('iconImageHref', '/public/images/map/location-mark.png');
    })
    .add('mouseleave', function (e) {
        e.get('target').options.set('iconImageHref', '/public/images/map/ location-pin1.png');
    })

  map.events.add('boundschange', function (event) {
    const newBounds = map.getBounds();
    const newCenter = map.getCenter();

    // Проверяем, выходит ли центр за допустимые границы
    if (
      newCenter[0] < bounds[0][0] || newCenter[0] > bounds[1][0] ||
      newCenter[1] < bounds[0][1] || newCenter[1] > bounds[1][1]
    ) {
      map.setCenter([55.751574, 37.573856]);
    }
  });
  
  
  // map.behaviors.disable('scrollZoom');
  map.options.set('minZoom', 11);
  map.options.set('maxZoom', 20);
  
  
  map.geoObjects.add(placemark);
  map.geoObjects.add(customPlaceMark);
  } catch (error) {
  console.error('Ошибка создания карты:', error);
  }
  });
}
