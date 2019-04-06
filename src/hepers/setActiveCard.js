// When adding event cards did not switch function below change it.

function setActiveCard(card) {
    let cards = document.querySelectorAll('.nav-link');
    if(card === 'join') {
        cards.length === 0 ? console.log()  : cards[1].classList.remove("active");
        cards.length === 0 ? console.log()  : cards[0].classList.add("active");
    } 
    if (card === 'create') {
        cards.length === 0 ? console.log()  : cards[0].classList.remove("active");
        cards.length === 0 ? console.log()  : cards[1].classList.add("active");
    }    
}

export default setActiveCard;