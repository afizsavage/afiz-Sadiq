import '../style.css';
import Logo from '../assets/A & S-logos_transparent.png';

import { mealsAPI, involvementBaseApi } from './utils';
import { updateNubmerOfLikes, updateLikeDyn } from './likes';

const logo = document.querySelector('img');
logo.src = Logo;
let likeBtns;

const mealsArray = [];

const fetchMeals = async () => {
  const response = await fetch(mealsAPI);
  const meals = await response.json();
  return meals;
};

const fetchLikes = async () => {
  const response = await fetch(`${involvementBaseApi}likes`);
  const likes = await response.json();
  return likes;
};

const appendMealToMealsArray = (meals) => {
  meals.meals.forEach((meal) => {
    mealsArray.push(meal);
  });
};

const displayMeals = (likes, meals) => {
  const listContainer = document.getElementById('items-list');
  let listItems = '';

  meals.forEach((meal, index) => {
    meal.likes = likes[index].likes;
  });

  meals.forEach((meal) => {
    listItems += `<li><div class="card"> <img class='card-image' src=${meal.strMealThumb} alt=${meal.strMeal}/>
    <div class='card-header'><span class='meal-name'>${meal.strMeal}</span> <span><button id=${meal.idMeal} class='like-icon' type='button'></button></span></div>
    <div class='like-cont'> <span>${meal.likes} Likes</span></div>
     <div class='cmtbtn-sec'><button type='button'>Comments</button></div> </div></li>`;
    listContainer.innerHTML = listItems;
  });

  likeBtns = document.querySelectorAll('.like-icon');

  likeBtns.forEach((button) => {
    button.addEventListener('click', (event) => {
      updateNubmerOfLikes(button.id);
      updateLikeDyn(meals, button.id, event);
    });
  });
};

const load = () => {
  fetchMeals().then((meals) => {
    appendMealToMealsArray(meals);
  });
  fetchLikes().then((likes) => {
    displayMeals(likes, mealsArray);
  });
};

window.onload = load;
