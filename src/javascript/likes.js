import { involvementBaseApi } from './utils';


export const updateNubmerOfLikes = async (mealId) => {
  const response = await fetch(`${involvementBaseApi}likes`, {
    method: 'POST',
    body: JSON.stringify({
      item_id: mealId,
    }),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  });
};

export const updateLikeDyn = (meals, button, event) => {
  const result = meals.filter((meal) => meal.idMeal === button);
  result[0].likes++;
  const totalLikes = result[0].likes;
  event.target.parentElement.parentElement.nextElementSibling.innerHTML = `${totalLikes} Likes`;
};
