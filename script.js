const container = document.getElementById('container');

// I am generating 30 cards dynamically from here
for (let i = 1; i <= 30; i++) {
    const card = document.createElement('div');
    card.classList.add('card');
    card.innerHTML = `
      <div class="topContent"></div>
      <div class="bottomContent">
          <div class="pfp"></div>
          <div class="desc">
            <div class="title"></div>
            <div class="about"></div>
          </div>
      </div>
    `;
    container.appendChild(card);
}

// Calculating the center of the container and card to locate which card is more closer to the center
const cards = document.querySelectorAll('.card');

container.addEventListener('scroll', () => {
    const containerCenter = window.innerHeight / 2;  //center of the container

    cards.forEach((card) => {
        const cardRect = card.getBoundingClientRect(); //getBoundingClientRect provides properties like height and top of the element
        const cardCenter = cardRect.top + cardRect.height / 2;  // Center of the card

        // Distance between the center of the card and the center of the container and abs for positive value
        const distance = Math.abs(containerCenter - cardCenter);

        // If the distance is less than 50px, mark the card as active 
        //rest are handled in css part 
        if (distance < 50) {
            card.classList.add('active');
        } else {
            card.classList.remove('active');
        }
    });
});
