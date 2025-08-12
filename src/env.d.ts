/// <reference types="vite/client" />

// Для импортов .vue (если используете Vue)
declare module '*.vue' {
  import { DefineComponent } from 'vue';
  const component: DefineComponent<{}, {}, any>;
  export default component;
}
