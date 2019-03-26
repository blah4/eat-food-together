// When adding event cards did not switch function below change it.

function setActiveCard() {
    let cards = document.querySelectorAll('.nav-link');
    //console.log(cards);
    // cards[0].classList.remove("active");
    // cards[1].classList.add("active");

    if (cards[0].className.includes('active')) {
        cards[0].classList.remove("active");
        cards[1].classList.add("active");
    } else {
        cards[0].classList.add("active");
        cards[1].classList.remove("active");
    } 
}

export default setActiveCard;