const cardContainer = document.querySelector('.places__list');

const removeCard = (evt) => {
    evt.target.closest('.card').remove();
}


const getCardTemplate = (cardData, removeCard) => {
    const cardTemplate = document.querySelector('#card-template').content;
    const cardElement = cardTemplate.querySelector('.card').cloneNode(true);
    const deleteButton = cardElement.querySelector('.card__delete-button');
    const cardImage = cardElement.querySelector('.card__image');
    deleteButton.addEventListener('click', removeCard);
    cardImage.src = cardData.link;
    cardImage.alt = cardData.name;
    return cardElement;
}

const renderCards = () => {
    initialCards.forEach((cardData) => {
        cardContainer.append(getCardTemplate(cardData, removeCard));
    });
}

renderCards();
