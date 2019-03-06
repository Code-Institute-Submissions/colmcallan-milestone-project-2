# BrainGame



>This a game testing your memory and patience. You being the game by pressing start if you want to get familiar with how it works, if you feel you've mastered your memory, reset the game and use click on "strict off" to enable the strick mode, where once you make a mistake. It starts all over again. 
## UX

The purpose of this project is to create a static **(front-end only)** website aimed at entertaining users of all ages. I have built it using the languages I have learned so far - HTML, CSS, JavaScript and jQuery. The target audiences for this website are people of all ages who love a challenge, adults who like to keep their brain working efficiently and also children to help with their development skills. I let my four year old son try it and after a few tantrums he got the hang of it and enjoys it.

**In order for the target audience to achieve these things when visiting my website, I incorporated the following:**
- A nice and simple visual display to make the site easy on the eye for all visitors
- Side note to the above: After researching the physical simon game, I had tried to create a side by side comparison to how the game looked. It worked fantastically at a desktop/laptop scale, however when taken to a phone and tested, it was discovered to be very difficult to tap on the colours and as such it was scrapped and the current design took place. (reference wireframe below)
- Easy functionality when playing the game, to allow younger children play at ease
- A "Instructions" section to educate all users on how the game works
- A start button to start the game once the user decides to begin
- A reset button that once pressed, will reset the users score to 0
- Strict mode - this makes the game more difficult as the pattern will not be repeated if the user guesses incorrectly
- A counter in the middle of the buttons which will show the user which round they are on
- Side note to the above: Originally I built a console that hosted the buttons and score counter however again, this function looked amazing on desktop/laptop scales however didn't translate too well when used on a phone sized device. 
- I used the SWAL jQuery (from SweetAlert) to aid with the visual aspect of the game from a notification purpose as the standard notification with github/bootsrap wasn't really appealing to the eye. 

 ### Wireframe Mockups
 
 These can be found at the following links below:

-https://github.com/colmcallan/milestone-project-2/blob/master/assets/images/wireframe1.jpg
-https://github.com/colmcallan/milestone-project-2/blob/master/assets/images/wireframe2.jpg

### Original Design On Mobile

This can be found at the below link:

-https://github.com/colmcallan/milestone-project-2/blob/master/assets/images/original.PNG 

## Features Of The Game

### Gamebuttons
The gamebuttons are only filled in when the game selects its pattern and the user follows suit by pressing the correct pattern. I found this to be a little bit different however still easy to follow and see for the user. 

### Instructions
This button opens a modal which provides the user with all of the information they need on how to play the game and how the game works.This is styled to suit the color pallete of my page and stand out. 

### Start 
This button allows the user to start the game when they are ready to play, instead of the game starting automatically when the webpage loads.

### Strict Mode
This button turns on and off the strict mode feature within the game. It gives the user the option to make the game more difficult. Once strict mode is enabled, the pattern will not be repeated if the user guesses the pattern incorrectly.

### Reset
This button gives the user the ability to reset the game at any time and will immediately reset the round count to 0.

### Counter
There is a counter set directly in the middle between all of the gamebuttons which shows which round the user is currently on. I have added a nice feature that allows the number to fade down from the top when the round number changes.

## Technologies Used

- **HTML5** - This was used as the layout to fully build the website
- **CSS** - This was used to style the website 
- **[Bootstrap](https://getbootstrap.com/docs/3.3/)** - This was used to get the layout up and running quickly and also use grids to help with the responsive design[Again, the initial wireframe it aided the layout on desktop/laptop but didn't favour the smaller devices]
- **[JavaScript](https://www.javascript.com/)** - This was used to build the functionality of the game
- **[JQuery](https://jquery.com/)** - This was also used to build the functionality of the game and contribute to the fade effect on the round counter

## Testing

I have tested this game across multiple screen sizes. The only difficulty/bug to report was from the design shown in my first wireframe. After feedback and trial and error, i chose a much more simple design aspect and it was alot more fluid. 
There is a known issue with iPhones running iOS that it won't auto play a sound unless the user interacts first to which it will then play the sound. 
**Devices Used:**
- Samsung Galaxy S9 – Android 8.0
- Samsung Galaxy S7 - Android 8.0
- Samsung Galaxy S6 – Android  7.0
- iPhone 8 – iOS 11.4-iOS 12.4
- iPhone XS MAX - iOS 11.4-12.4-iOS 13 (BETA)
- HP Laptop 15-bs0xx – Windows 10
- iPad Air  – iOS 12.4
- Microsoft Surface 1 Laptop - Windows 10

**Browsers Used:**
- Chrome 
- Firefox
- Microsoft Edge
- Safari

### Issues/Bugs
A big issue I realised after playing the game for a little while was when the game automatically started when the webpage loaded. I implemented the start button to combat this issue and I think it makes a difference to the overall performance of the game. Also, when I implemented the SWAL notifications, they would remain on screen for too much time and this resulted in the user missing the next sequence generated by the game. This was resolved through feedback from users and tweaking the default time given by SweetAlert for its notificactions. 

### Validation
HTML file passed validation testing at https://validator.w3.org/nu/#textarea <br>
CSS file passed validation testing at https://jigsaw.w3.org/css-validator/validator <br>
JS file passed validation testing at https://jshint.com/ and https://www.piliapp.com/javascript-validator/

## Deployment
My website is currently deployed on Github Pages - 

I was able to deploy the website here by going to my repository in which all the files are saved, clicking on settings at the top and scrolling down to the heading GitHub Pages. Underneath the heading there is a source and I chose master branch from the dropdown which allows you to host the website on GitHub Pages.

## Credits

### Media Content
- [freeCodeCamp](https://www.freecodecamp.org/) - Simon sounds used in the game.
- [SweetAlert](https://sweetalert.js.org) - I used some of these stylish alerts in my game.

### Acknowledgements
- [Code Institute](https://www.codeinstitute.net/)
- Daniel Eden - I used his [animate.css](https://daneden.github.io/animate.css/) library which allowed me to add the fade effect on the round counter.
- https://www.w3schools.com/ - Helped alot when it came to the syntax of using the CSS properties for the buttons. 
- [Bootstrap](https://getbootstrap.com/docs/3.3/javascript/#modals) - I used the modal on Bootstrap to implement the information into the how to play button.


