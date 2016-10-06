# Navigation Definitions
## The top navigation on the desktop resolutions acts like so:
1. Anchored top bar, shows without a background color, as a part of the hero component
2. After scrolling down and passing the 400px mark, the scrolling navigation menu is activated
3. The scrolling menu only shows when the user starts scrolling up. Show animation is: Slide down (from top) 300ms
4. The menu should disappear, using a Slide Up 300ms animation, when the user scrolls down
5. The scrolling menu should be canceled and hidden when the user scrolls up higher than 200px (passing the 200px line upwards) if the menu is already shown, it should disappear displaying the slide up animation


## Secondary navigation bar:
1. Shows on specific pages that require secondary navigation
2. Sticks to the top bar
3. Displays indication for selected page (top bar loses its indication when the secondary bar is active)


## The mobile resolution navigation starts from 1024 and down:
1. Mobile resolution navigation bar has a blue background (not transparent)
2. Mobile navigation is always sticky
3. Always shows, regardless of scroll


## Secondary navigation - mobile:
1. Shows on specific pages that require secondary navigation
2. Sticks to top bar
3. Disappears on scroll down, using slide up 300ms animation
4. Show on scroll up, using slide down 300ms animation
