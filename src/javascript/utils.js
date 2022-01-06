export const involvementBaseApi =
  'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/PkMZGTl9u9KsKd12uG0G/';

export const mealsAPI = 'https://themealdb.com/api/json/v1/1/search.php?f=f';

export const fetcher = async (endpoint) => {
  const response = await fetch(`${involvementBaseApi}${endpoint}`);
  const data = await response.json();
  return data;
};

export const sumNumberOfMeals = (meals, counterText) => {
  counterText.innerHTML = `Meals(${meals.length})`;
};
