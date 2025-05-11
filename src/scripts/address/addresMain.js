import Choices from "choices.js";
import 'choices.js/public/assets/styles/choices.min.css';
import choiceData from '../../data/choiceData.json';
import { loadYandexMaps } from "./map";

export function renderAddres() {
  const addressHTML = `
    <div class="wrap">
      <div class="breadcrumbs">
        <a href="#">ГЛАВНАЯ СТРАНИЦА</a> • АДРЕССА КОФЕ
      </div>
      <div class="page-heading">
        <h1>Адреса кафе</h1>
      </div>

      <div class="address">
        <div class="address-row">
          <div class="toggle-btns">
            <div class="tabs-toggler btn _active">На карте</div>
            <div class="tabs-toggler btn btn-bordered">Списком</div>
          </div>
          <div class="address-filter-metro">
            <div class="control-lable"><span>Поиск метро</span></div>
            <select name="select" id="metro_select">
            </select>
          </div>
        </div>
        <div class="map-container">
          <div class="map" id="ymap">
          </div>
        </div>
      </div>
    </div>
  `;
  const container = document.querySelector('.content')
  container.innerHTML = addressHTML; 
  initSelect();
  loadYandexMaps();
}


function initSelect() {
  const metroSelect = document.querySelector('#metro_select');
  
  const choices = new Choices(metroSelect, {
    choices: choiceData.metro_stations,
    searchEnabled: false,
    placeholder: true,
    shouldSort: false,
    // shouldCloseDropdown: false,
    callbackOnCreateTemplates: function(template) {
      return {
        choice: function(classNames, data) {
          return template(`
            <div class="custom-choice"
            data-choice ${data.disabled ? 'data-choice-disabled aria-disabled="true"' : 'data-choice-selectable'} data-id="${data.id}" ">
            <div style="background-color:${data.customProperties.color};"
              class="metro-icon" alt="${data.label}"></div>         
              <span>${data.label}</span>
            </div>
          `);
        },
        item: function(classNames, data) {
          return template(`
            <div class="${classNames.item} custom-choice" data-item data-id="${data.id}" data-value="${data.value}" ${data.active ? 'aria-selected="true"' : ''} ${data.disabled ? 'aria-disabled="true"' : ''}>
              <div style="background-color: ${data.customProperties.color};"
              class="metro-icon" alt="${data.label}"></div>         
              <span>${data.label}</span>
            </div>
          `);
        }
      };
    }
  });
}
