import '../style.css';
import Logo from '../assets/A & S-logos_transparent.png';
import { mealsAPI, sumNumberOfMeals, fetcher, writeToAPI } from './utils';
import { updateLikeDyn } from './likes';
import { addComment } from './comments';

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

const displayComments = (comments, parentEle) => {
  let listItems = '';
  comments.forEach((comment) => {
    listItems += `<li><span>${comment.creation_date}<span>
    <span>${comment.username}:</span> <span>${comment.comment}</span></li>`;
    parentEle.innerHTML = listItems;
  });
};

const createDetailsPopup = (object) => {
  const today = new Date();
  const dd = String(today.getDate()).padStart(2, '0');
  const mm = String(today.getMonth() + 1).padStart(2, '0');
  const yyyy = today.getFullYear();
  body.classList.add('disScroll');
  const modal = document.createElement('div');
  modal.id = 'modal';
  const modalContent = `  <article>
  <button id='modal-icon'></button>
    <div class='top-sec'>
    <img src=${object.strMealThumb} />
    <h2>${object.strMeal}</h2>
    <div class='cat'><span>Category</span> <span>${object.strCategory}</span></div>
    <div class='ori'><span>Origin</span> <span>${object.strArea}</span></div>
    </div>
    <div class='bottom-sec'>
    <h3>Comments</h3>
    <ul id='comments'></ul>
    <h4>Add a comment</h4>
    </div>
    <form>
  <fieldset>
    <div class="input-container">
      <input id="name" type="text" name="name" placeholder="Your name" required />
    </div>
    <textarea
      id="message"
      name="message"
      placeholder="Your Insight"
      maxlength="500"
      required
    ></textarea>
    <div class="submit-container">
      <span></span>
      <button id="submit-btn" class="button" type="submit">
        Comment
      </button>
    </div>
  </fieldset>
</form>
    </div>
  </article>`;
  modal.innerHTML = modalContent;
  mainSection.appendChild(modal);
  const submitButton = document.getElementById('submit-btn');
  const name = document.getElementById('name');
  const comment = document.getElementById('message');
  const listElement = document.getElementById('comments');
  fetcher(`comments?item_id=${object.idMeal}`).then((comments) => {
    displayComments(comments, listElement);
  });
  const closeButton = document.getElementById('modal-icon');
  closeButton.addEventListener('click', () => {
    body.classList.remove('disScroll');
    modal.remove();
  });
  submitButton.addEventListener('click', (event) => {
    const today = `${mm}-${dd}-${yyyy}`;
    event.preventDefault();
    addComment(object.idMeal, name.value, comment.value);
    listElement.innerHTML += `<li><span>${today}<span>
    <span>${name.value}:</span><span>${comment.value}</span></li>`;
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
    <div class='cmtbtn-sec'><button class='button' id=${meal.idMeal} type='button'>Comments</button></div> </div></li>`;
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
      updateLikeDyn(meals, button.id, event);
      writeToAPI({ item_id: button.id }, 'likes');
    });
  });
  console.log(meals[0]);
};
const load = () => {
  fetchMeals().then((meals) => {
    appendMealToMealsArray(meals);
  });
  fetcher('likes').then((likes) => {
    displayMeals(likes, mealsArray);
  });
};
window.onload = load;