import { involvementBaseApi } from './utils';

const updateNubmerOfLikes = async (mealId) => {
  const response = await fetch(`${involvementBaseApi}likes`, {
    method: 'POST',
    body: JSON.stringify({
      item_id: mealId,
    }),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  });
  const resMsg = await response.json();
  return resMsg;
};

export default updateNubmerOfLikes;
