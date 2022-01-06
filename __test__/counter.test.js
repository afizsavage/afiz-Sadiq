/** * @jest-environment jsdom */
import { sumNumberOfMeals } from '../src/javascript/utils.js';

describe('Sum the number of meals from api', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  test('should get the sum of all meals', () => {
    document.body.innerHTML = `<li><a id="count" href="#meals">
    Meals</a></li>`;
    const counterText = document.getElementById('count');

    const sampleData = [
      { idMeal: '52802', likes: 127 },
      { idMeal: '52802', likes: 127 },
    ];

    sumNumberOfMeals(sampleData, counterText);

    expect(counterText.innerHTML).toMatch('Meals(2)');
  });
});
