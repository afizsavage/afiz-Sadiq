import '../style.css';
import Logo from '../assets/A & S-logos_transparent.png';
import { mealsAPI, sumNumberOfMeals } from './utils';
import { updateNubmerOfLikes, updateLikeDyn, fetchLikes } from './likes';
const logo = document.querySelector('img');
const counterText = document.getElementById('count');
const body = document.querySelector('body');
logo.src = Logo;
const mainSection = document.querySelector('main');
let likeBtns;
const mealsArray = [];
const fetchMeals = async () => {
  const response = await fetch(mealsAPI);
  const meals = await response.json();
  return meals;
};
const appendMealToMealsArray = (meals) => {
  meals.meals.forEach((meal) => {
    mealsArray.push(meal);
  });
};
const createDetailsPopup = (object) => {
  body.classList.add('disScroll');
  const modal = document.createElement('div');
  modal.id = 'modal';
  const modalContent = `  <article>
  <button id='modal-icon'></button>
    <div class='top-sec'>
    <img src=${object.strMealThumb} />
    <h3>${object.strMeal}</h3>
    <div class='cat'><span>Category</span> <span>${object.strCategory}</span></div>
    <div class='ori'><span>Origin</span> <span>${object.strArea}</span></div>
    </div>
    <div>
    </div>
  </article>`;
  modal.innerHTML = modalContent;
  mainSection.appendChild(modal);
  const closeButton = document.getElementById('modal-icon');
  closeButton.addEventListener('click', () => {
    body.classList.remove('disScroll');
    modal.remove();
  });
};
const displayMeals = (likes, meals) => {
  const listContainer = document.getElementById('items-list');
  let listItems = '';
  let commentButtons;
  sumNumberOfMeals(meals, counterText);
  meals.forEach((meal, index) => {
    meal.likes = likes[index].likes;
  });
  meals.forEach((meal) => {
    listItems += `<li><div class="card"> <img class='card-image' src=${meal.strMealThumb} alt=${meal.strMeal}/>
    <div class='card-header'><span class='meal-name'>${meal.strMeal}</span> <span><button id=${meal.idMeal} class='like-icon' type='button'></button></span></div>
    <div class='like-cont'> <span>${meal.likes} Likes</span></div>
     <div class='cmtbtn-sec'><button id=${meal.idMeal} type='button'>Comments</button></div> </div></li>`;
    listContainer.innerHTML = listItems;
  });
  likeBtns = document.querySelectorAll('.like-icon');
  commentButtons = document.querySelectorAll('.cmtbtn-sec button');
  commentButtons.forEach((button, index) => {
    button.addEventListener('click', () => {
      createDetailsPopup(meals[index]);
    });
  });
  console.log(commentButtons);
  likeBtns.forEach((button) => {
    button.addEventListener('click', (event) => {
      updateNubmerOfLikes(button.id);
      updateLikeDyn(meals, button.id, event);
    });
  });
  console.log(meals[0]);
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