export {};

declare global {
  interface Window {
    onYmapsLoad?: () => void;
  }
  var ymaps: typeof import('yandex-maps');
  // var ymaps: any;
}
