import '../style.css';
import Logo from '../assets/A & S-logos_transparent.png';

const logo = document.querySelector('img');
logo.src = Logo;

const fetchMeals = async () => {
  const response = await fetch(
    'https://themealdb.com/api/json/v1/1/search.php?f=m'
  );
  const meals = await response.json();
  return meals;
};

const displayMeals = (meals) => {
  const listContainer = document.getElementById('items-list');

  let listItems = '';
  meals.meals.forEach((meal) => {
    listItems += `<li><div class="card"> <img class='card-image' src=${meal.strMealThumb} alt=${meal.strMeal}/>
    <div class='card-header'><span class='meal-name'>${meal.strMeal}</span> <span><button class='like-icon' type='button'></button></span></div> </div></li>`;
    listContainer.innerHTML = listItems;
  });
  console.log(meals.meals[0]);
};

const load = () => {
  fetchMeals().then((meals) => {
    displayMeals(meals);
  });
};

window.onload = load;
