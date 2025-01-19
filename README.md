# Task A where scrolling is implemented

#Live demo
(https://scroll-effect-implementation.pages.dev/)

# Brief summary of what I did
1. First of all a container is defined where we can render the cards dynamically

2. That contaienr has height of 100vh and overflow in y axis is scroll and scroll bar is hidden 

3. After the cards are rendered we need to find the card that is center to the screen or container
   1. for that calculate center of container and center of card
   2. calculate distance between them and if its less than 50px we declare it active by giving class name active
      Also dont forget to use absolute function to get postive distance
   3. and we apply required css to that active class
   
4. to make the card stay in middle when scrolling we have css property called
    scroll-snap-type: [axis][strcitness];
    axis is y cause we will be scrolling in y axis and strictness is mandatory 
