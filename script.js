const gridParent = document.querySelector('.gridContainer')

// digits for cards
const cardNumbers = [];

while (cardNumbers.length < 8) {
    let randomNumber = Math.floor(Math.random() * 18) * 1;
    if(!cardNumbers.includes(randomNumber)) cardNumbers.push(randomNumber)
}

// double the digits
cardNumbers.push(...cardNumbers);

for (let i = 0; i < cardNumbers.length; i++) {
    const newCard = document.createElement('div');
    newCard.textContent.createElement('div')
    
    newCard.innerHTML = `
    <div class='flip-card-inner'>
    <div class=''>
    `
    
}