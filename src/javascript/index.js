import '../style.css';
import Logo from '../assets/A & S-logos_transparent.png';

const logo = document.querySelector('img');
logo.src = Logo;

const fetchMeals = async () => {
  const response = await fetch(
    'https://themealdb.com/api/json/v1/1/search.php?f=a'
  );
  const meals = await response.json();
  return meals;
};

const displayMeals = (meals) => {
  const listContainer = document.getElementById('items-list');

  let listItems = '';
  meals.meals.forEach((meal) => {
    listItems += `<li>${meal.strMeal}</li>`;
    listContainer.innerHTML = listItems;
  });
};

const load = () => {
  fetchMeals().then((meals) => {
    displayMeals(meals);
  });
};

window.onload = load;
