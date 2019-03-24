// When adding event cards did not switch function below change it.

function setActiveCard() {
    let cards = document.querySelectorAll('.nav-link');
    //console.log(cards);
    cards[0].classList.remove("active");
    cards[1].classList.add("active");
}

export default setActiveCard;