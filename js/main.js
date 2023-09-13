'use strict';

const listItems = document.querySelector('.items');
const item = document.querySelectorAll('.item');
const titleItem = listItems.querySelectorAll('h2');
const listContents = listItems.querySelectorAll('.props__list');

document.querySelector('.ads').remove();

item[2].querySelector('.item__title').replaceWith(titleItem[4]);
item[4].querySelector('.props__list').before(titleItem[5]);
item[5].querySelector('.props__list').before(titleItem[2]);

titleItem[3].textContent = 'This и прототипы объектов';

item[3].querySelector('.props__list').replaceWith(listContents[4]);
item[4].querySelector('.content').append(listContents[3]);

listContents[0]
    .querySelector('li:nth-child(3)')
    .after(listContents[2].querySelector('.props__item_four'));

listContents[5].querySelectorAll('.props__item_two').forEach((node) => {
  listContents[2].append(node);
});

listItems.prepend(item[3]);
listItems.prepend(item[2]);
listItems.prepend(item[1]);
