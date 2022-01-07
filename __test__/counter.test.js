/** * @jest-environment jsdom */
import { sumNumberOfMeals, sumNumberOfComments } from '../src/javascript/utils.js';

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
  test('should get the updated sum of all comments', () => {
    document.body.innerHTML = `<div class='bottom-sec'>
    <h3>Comments</h3></div>`;
    const counterText = document.querySelector('.bottom-sec h3');
    const sampleData = [
      {
        item_id: '53061',
        username: 'Fu',
        comment: 'Great',
      },
      {
        item_id: '53461',
        username: 'Fuji',
        comment: 'Great',
      },
    ];
    sumNumberOfComments(sampleData, counterText);
    expect(counterText.innerHTML).toMatch('Comments(2)');
  });
});
