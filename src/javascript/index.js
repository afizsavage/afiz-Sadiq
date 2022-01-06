import '../style.css';
import Logo from '../assets/A & S-logos_transparent.png';

const logo = document.querySelector('img');
logo.src = Logo;
const mainSection = document.querySelector('main');
const fetchMeals = async () => {
  const response = await fetch(
    'https://themealdb.com/api/json/v1/1/search.php?f=m'
  );
  const meals = await response.json();
  return meals;
};

const createDetailsPopup = (object) => {
  //body.classList.add('disScroll');
  const modal = document.createElement('div');
  modal.id = 'modal';
  const modalContent = `  <article>
    <h3>${object.idMeal}</h3>
    <p></p>
    <footer>
      <div>
        <button>See live</button>
        <button>See Source</button>
      </div>
      <div id="navigate">
        <button>Previous project</button>
        <button>Next project</button>
      </div>
    </footer>
  </article>`;
  modal.innerHTML = modalContent;
  mainSection.appendChild(modal);
  /* const closeButton = document.getElementById('modal-icon'); */
  /* closeButton.addEventListener('click', () => {
    body.classList.remove('disScroll');
    modal.remove();
  }); */
};

function addEvtListenerToButtons(buttons, projectObject) {
  buttons.forEach((button) => {
    button.addEventListener('click', () => {
      createDetailsPopup(projectObject);
    });
  });
}

const displayMeals = (meals) => {
  const listContainer = document.getElementById('items-list');

  let listItems = '';
  let buttons;
  meals.meals.forEach((meal) => {
    listItems += `<li><div class="card"> <img class='card-image' src=${meal.strMealThumb} alt=${meal.strMeal}/>
    <div class='card-header'><span class='meal-name'>${meal.strMeal}</span> <span><button class='like-icon' type='button'></button></span></div>
    <div class='cmtbtn-sec'><button type='button'>Comments</button></div> </div></li>`;
    listContainer.innerHTML = listItems;
    buttons = document.querySelectorAll('.cmtbtn-sec > button');
    addEvtListenerToButtons(buttons, meal);
  });
};

const load = () => {
  fetchMeals().then((meals) => {
    displayMeals(meals);
  });
};

window.onload = load;
