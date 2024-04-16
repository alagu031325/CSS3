# Animations

## Transform

### translate/ translateX / translateY function 

- translateX moves the element either towards left or right - if we use percent it bases the percent on the size of the div - if 50% moves towards right of the width of the element itself - and a negative number moves it towards left
- translateY moves it up or down - we can use other units like rem - negative value moves it up and positive value move it down 
- we can also use shorthand 'translate' function to combine both values

### rotate/ rotateX/ rotateY function

- rotateX will flip the card from top to bottom - bottom part coming towards you and top part moving away from you - once we get to 90% - the card will disappear because we are at a eye level with that flat top and once we get to 180% the card if fully flipped
- rotateY will flip from left side to right side - right side of the image will be in the left if we rotate 180deg
- rotateZ will rotate clockwise with a positive number - and a negative value will rotate it counter clockwise - it is just the same as rotate

### scale/ scaleX/ scaleY function

- scaleX will grew only on left and right - if 120% - it will grew 120% of the width of the element only towards the horizontal plane
- scaleY will grew only on top and the bottom 
- scale - we can give both X and Y value and it will shrink instead of growing

### skew/ skewX/ skewY function

- skewX - gives a leaning box(sides are tilted) - negative value leans towards right - positive value leans towards left
- skewY - gives a leaning top line if positive deg specified, it's top line leans downward or leans pointing upward if negative deg
- skew is a short hand notation - leans on both left and right and leans on the top line aswell

## Transitions

- we can specify the property to which these transitions should apply and how long the duration of transition to take and the delay before which these transitions can start using the shorthand notation

## Animations

- We should first name our animations, and we can provide the duration, delay and timing function similar to transition
- To repeat the iteration we can also provide animation-iteration-count
- We need to apply keyframes to define the animation - then only animation properties will apply
 