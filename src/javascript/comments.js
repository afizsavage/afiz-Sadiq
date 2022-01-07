import { writeToAPI } from './utils';
export const addComment = (itemId, name, comment) => {
  writeToAPI(
    {
      item_id: itemId,
      username: name,
      comment: comment,
    },
    'comments'
  );
};