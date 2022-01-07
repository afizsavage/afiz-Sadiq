export const updateLikeDyn = (meals, button, event) => {
  const result = meals.filter((meal) => meal.idMeal === button);
  result[0].likes++;
  const totalLikes = result[0].likes;
  event.target.parentElement.parentElement.nextElementSibling.innerHTML = `${totalLikes} Likes`;
};
