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
    <div class="flip-card">
        <div class="flip-card-inner">
          <div class="flip-card-front">
            <img src="img_avatar.png" alt="Avatar" style="width:300px;height:300px;">
          </div>
          <div class="flip-card-back">
            <h1>John Doe</h1>
            <p>Architect & Engineer</p>
            <p>We love that guy</p>
          </div>
        </div>
      </div>
    `
    
}