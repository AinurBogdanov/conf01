import Choices from "choices.js";
import 'choices.js/public/assets/styles/choices.min.css';
import choiceData from '../../data/choiceData.json';

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
        console.log(data)
        console.log()
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
        console.log(data.value)
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

document.addEventListener('click', function (event) {
  const dropdown = document.querySelector('.choices');
  const isInside = dropdown && dropdown.contains(event.target);

  if (!isInside) {
    event.stopPropagation();
    event.preventDefault(); // Предотвратить закрытие
  }
}, true);