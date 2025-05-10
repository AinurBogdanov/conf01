import Choices from "choices.js";
import 'choices.js/public/assets/styles/choices.min.css';
import choiceData from '../../data/choiceData.json';

const stations = choiceData.metro_stations.map(station => ({
  value: station.value,
  label: station.label,
  icon: station.icon
}));

const metroSelect = document.querySelector('#metro_select');
// const defaultSelectedValue = metroSelect.querySelector('[selected]').value;

const choices = new Choices(metroSelect, {
  choices: stations,
  searchEnabled: true,
  placeholder: true,
  // shouldSort: true, // Включаем сортировку
  // sorter: (a, b) => {
  //   if (a.value === defaultSelectedValue) return -1;
  //   if (b.value === defaultSelectedValue) return 1;
    
  //   return a.label.localeCompare(b.label);
  // },
  choiceTemplate: (choice) => {
    return `
      <div class="custom-choice">
        <img src="../../assets/images/metro-images/metro-image-${choice.value}" alt="${choice.label}" class="metro-icon">
        <span>${choice.label}</span>
      </div>
    `
  }
});

