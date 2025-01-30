const cardContainer = document.querySelector('.places__list');

const removeCard = (evt) => {
    evt.target.closest('.card').remove();
}


const getCardTemplate = (cardData, removeCard) => {
    const cardTemplate = document.querySelector('#card-template').content;
    const cardElement = cardTemplate.querySelector('.card').cloneNode(true);
    const deleteButton = cardElement.querySelector('.card__delete-button');
    deleteButton.addEventListener('click', removeCard);
    cardElement.querySelector('.card__image').src = cardData.link;
    cardElement.querySelector('.card__image').alt = cardData.name;
    return cardElement;
}


initialCards.forEach((cardData) => {
    cardContainer.append(getCardTemplate(cardData, removeCard));
});