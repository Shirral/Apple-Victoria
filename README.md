# Apple Victoria

![mockup](assets/readme/mockup.jpg "A mockup picture for the Apple Victoria project.")

["Apple Victoria"](https://shirral.github.io/Apple-Victoria/) is a short game about picking apples created as a project meant to teach me working with Javascript and jQuery. The goal of the game is simple: fill the fruit bins with many apples as you can while maintaining the quality of the fruit! Pick the good apples, drop the bad apples to the ground - and be careful not to mix them up! Your supervisor will not be impressed if you do...

Left click or tap on an apple to pick it; right click or swipe it down to drop it to the ground. Once the tree has been stripped of apples, you will move onto the next tree. It might be filled with apples, or it might only have a few fruits. That happens! 

When you fill a bin, a new one will be brought in. You need to fill a minimum of 3.5 bins. Good luck!

## User Experience & User Interface (UX/UI)

### Site goals

The goal of the site is to deliver a short humorous interactive experience to the user. It is inspired by my time spent at an apple farm as a picker and while it's not a serious and technically correct simulation, it provides some glimpses into how a day of picking might look like, what are the main requirements set upon the pickers, and how is your progress at the end of the day judged. Because of this, it should do a decent job at satisfying some of the curiosity the user might have about this like of work, too.

### User stories

**First time visitor goals:**

* As a first time visitor, I am bored and I'm looking for some entertainment; I want to have fun.
* As a first time visitor, I have a few minutes to pass and I'm looking for something to do that won't take a long time.
* As a first time visitor, I am curious about apple picking and want to see how an apple picking simulator might work.

**Returning visitor goals:**

* As a returning visitor, I want to try to beat my previous score in the game.
* As a returning visitor, I want to try to share the game with somebody who might find it funny - perhaps someone who has worked as an apple picker at a farm before.

### Design

**Colour scheme**

Black has been chosen as the default colour of the in-game text, buttons, and shadows of several design elements. White has been used as an accent colour. As the game uses full-screen image backgrounds for all of its screens, the other leading colours have been chosen to match the colours of the background images.

The starting screen focuses on pastel yellow and warm red, matching the golden light in the orchard and the red apples:

![colour palette - starting screen](assets/readme/colours1.png "A colour palette for the interface elements of the starting screen.")

The end screen features two different shades of green - a very light yellowish green and a very dark cyan. Because the latter is almost black, it has been used to replace the black in the "GIVE IT ANOTHER GO!" button to fit with the design of the screen better: 

![colour palette - end screen](assets/readme/colours2.png "A colour palette for the interface elements of the end screen.")

The overlay with the controls instructions uses white as its background, black as the main colour of the information presented, and the same pastel yellow as the starting screen as the accent colour:

![colour palette - controls overlay](assets/readme/colours3.png "A colour palette for the interface elements of the overlay with the controls instructions.")

The main game screen is a little different as it showcases hand-drawn images of the apple tree, the apples, and the apple bin. The design goal of these is to give the player accurate information about their progress (changing colours of the apple bin, going from colourless through oragne and yellow to green when it's full) and to create a challenge of quickly telling apart different kinds of apples - good and bad - many of which might look similar at a first glance, but which show clear signs of being rotten upon closer inspection. While I tried to provide as varied colours for the different kinds of apples as possible, I was sticking to the shades found in different kinds of apples in real life.

![colours used for the apples and apple bins](assets/readme/bins-apples.png "Colours used for the apples and for the apple bins.")

The background was made to visually represent a tree that is being picked, including the animation representing the player moving on to the next tree filled with new apples, but the main focus of the player's atention should be on the apples themselves. For this reason, the background features muted shades of green that don't distract from the bright colours of the apples.

**Typography**

The website features two fonts:

* **Sedan SC** - a Garalde font used for the h1 headings and buttons, 
* **Josefin Sans** - a sans-serif font used for any other text.

Sedan SC is a serif font that conveys the feelings of grandeur and refinement; it was perfect for the project logo, the announcement of the player's victory or defeat, the clock reminding the player of the inexorable passage of time, and the call-to-action buttons.

In contrast, Josefin Sans is a rounded sans-serif font that invokes friendliness. It is albo easy to read. It is used to convery the instructions about the gameplay to the player, as well as the detailed information about their performance.

Both fonts are served by Google Fonts. Garamond has been provided as a fallback font for Sedan SC, as it's also a Garalde typeface; Arial has been provided as fallback for Josefin Sans as the most rounded of the web safe sans-serif fonts currently available.

**Imagery**

The imagery of the project revolves around one theme: apples. Opening the page with the game, the user is greeted by a full-screen background picture of an apple orchard during the picking season with a bin filled with freshly picked apples - this is to let them know immediately what the game will be about. The colours are pleasant, warm, and inviting.

The end screen is fresh and crisp, featuring an image of a thick apple leafage with apples growing among them. It provides a fitting background for the information about the player's performance in the orchard.

The main game screen, once more, is a bit different from the rest. While the starting screen and the end screen serve the function of providing the player with information about the game, this screen is where the game actually happens. The function of the visual elements is not just to look nice; they need to provide very specific information to the player. For this reason, I needed full control over what the visual elements are going to look like. All the images there, including the animated images showing the controls on the overlay, are hand-drawn and kept in the same cartoonish visual style. It's meant to be simple and fun.

**Wireframes**

As for this project I did not need to cooperate with other developers, I did not see the need to use digital tools to make "proper" wireframes. I find it much more efficient to sketch out my ideas on paper. While I could had redone them with digital tools later to make them look pretty - and it is something I plan on doing in the future when I need to communicate my ideas to others clearly in the planning stage - in this case, that would had been a waste of time.

Below are the sketches made in the planning stage of working on the project, along with some early notes - please excuse the lined paper, sadly I had no plain paper available at the time.

![wireframes](assets/readme/wireframes.png "Initial sketches from the planning stage of the project work.")
![wireframes](assets/readme/wireframes2.png "Initial sketches from the planning stage of the project work.")

At the very beginning of the project work I intented to build a more advanced simulator including the elements and gameplay known from visual novel games. I wanted to create a coherent story around the main apple picking part, including a cast of characters, several different endings, and twists that can affect the gameplay. Fortunately, it was pointed out to me that the scope of that idea might had been a bit too broad for my very first Javascript project, and that in order to make sure I finish before the deadline, it might be good to just focus on the main gameplay itself. Here is a screenshot of the skeleton of the visual-novel style screen I intended to use:

![visual novel game style screen design](assets/readme/prototype1.png "A skeleton of the visual novel game style screen design.")

Early prototype of the picking screen:

![early prototype of the picking screen](assets/readme/prototype2.png "Early prototype of the picking screen.")

## Features

### Responsive design

The website responds to a wide variety of screen sizes. Individual elements of each page have been given their own media queries featuring breakpoints adjusted as needed for the element to look good on a particular screen instead of picking a few set breakpoints and ignoring the screens in between which might need additional adjustments.

![responsive design](assets/readme/responsive.png "Comparison on the main game screen on different screen sizes.")

Moreover, a different set of controls has been prepared for mobile devices and pointer devices: apples are picked with a left click and dropped with a right click on the devices using a computer mouse or touchpads, while on the devices with touchscreens the same actions are done through tapping and swiping down. The right set of controls is displayed, depending on the device.

![game controls instructions overlay](assets/readme/modals.png "Comparison on the game controls instructions overlay on different screen sizes.")

### Start screen

The start screen introduces the player to the game and provides them with the information on what they need to do in order to beat it. It features a simple structure fit for the purpose: the name of the project at the top, an easy to read section with text on a lighter background, and a button which brings the user to the main game screen once it is clicked. Behind it all is a  full-screen background image of an apple orchard on a sunny Autumn day.

![start screen](assets/readme/start-screen.png "The starting screen.")

### Main game screen

* **Controls instructions overlay:** the first thing the player sees once they are presented with the main game screen is an overlay explaining the controls of the game. It features animated gifs showing the controls visually and textual descriptions, different for pointer devices and for touch devices. Below the instructions is a button that starts the game.

![controls instructions overlay](assets/readme/controls.png "Controls instructions overlay.")

* **Timer:** On the top of the main game screen, there is a clock showing in-game time. It starts running once the game starts, updating by 15 minutes every 5 seconds. The in-game time represents a typical working day for the pickers at an apple farm: starting at 8:00 and finishing at 16:00. Of course, sitting in front of the screen and clicking on apples the entire day would be extremely daunting, to the time was sped up to fit the entire day of apple picking within about 2,5 minutes of gameplay. When the timer hits 16:00, the game ends and the player is brought to the end screen.

![timer](assets/readme/timer.png "In-game clock.")

* **Randomly generated apples:** The apples generate on the main game screen in a different way every time the user starts the game or picks/drops all the apples from the current tree. There are six kinds of apples - three good, three bad - generating with a similar probability. Every apple gets assigned a random position within the area reserved for the apple generation; the number of apples generating within a single batch is also randomized between 5-40. It reflects the reality of an apple orchard where one tree might be filled with lovely fruits while the next one might be nearly barren; one apple might be picture-perfect and the next one - half-rotten.

  ![randomly generated apples](assets/readme/apples.png "Randomly generated apples.")

  The apples can be either **picked** or **dropped**. Both actions remove the apple object from the DOM; picking it updates the variables responsible for measuring the player's performance.

  <center><img src="assets/readme/apple-pick-drop.gif" alt="Picking and dropping apples."></center>

* **Apple bin:** The apple bin serves as a visual representation of the player's progress. The bin picture is updated as the player picks more and more apples, showing how full the current bin is. When the bin gets filled, it's coloured fully green and an animation is run that moves it off the screen; then, a "new" empty bin is brought in from the other side of the screen. This indicates that the player has successfully finished picking a full bin of apples and is now starting to fill another bin.

  <center><img src="assets/readme/bin.gif" alt="Apple bin updating with the player's progress."></center>

* **Apple tree background:** Similarly to the apple bin image, the picture of the apple tree in the background is animated out of the screen and back into the screen from the other side once the player has picked or dropped all the apples on the screen. It visually represents the apple picker moving on to the next tree.

  <center><img src="assets/readme/tree-bg.gif" alt="Apple tree background animation."></center>

### End screen

* **Game outcome section:** The first and main bit of information the player sees when the time runs out and the game finishes. It is shown on the very top of the screen, in big letters, to give the player immediate feedback on the outcome of their efforts - whether they won ("APPLE VICTORIA!") or lost ("APPLE DEFEAT!").

  ![game outcome section](assets/readme/outcome-section.png "Game outcome section.")

* **Outcome text section:** A more detailed breakdown of the player's performance, including the information on the amount of apple bins they managed to pick and the percentage of the apples picked that was rotten. Based on these two, the flavour text - the supervisor's evaluation - is displayed. There are several different outcomes possible for the player to get.

  ![outcome text section](assets/readme/outcome-text.png "Outcome text section.")

* **Score section:** This is where the player's score is displayed. If they lost, it will always be 0. If they won, it will show the amount of apples they managed to pick.

  ![score section](assets/readme/score.png "Score section.")

* **Try again button:** A button that restarts the game, bringing the player back to the main game screen, if they wish to give it another go and better their score.

  ![try again button](assets/readme/tryagain-button.png "Try again button.")

### Future features

I would like to continue the development of the project to eventually bring it to the form I initially imagined. In particular, I would like to add the following features:

* **A storyline with a cast of characters and several different endings:** I would like the game to be story-driven, featuring a visual novel-style gameplay (before each work day starts and when it finishes), and the main apple-picking bit to serve more as a minigame that determines the further story developments rather than the main bit of the game.

* **Gameplay spanning over several days/weeks:** The player would start the game as a new picker who isn't yet proficient in the art of apple picking. The difficulty of the game would be set high enough for it to be physically impossible for the player to gather enough apples on the first day; they would need to learn tips and tricks from the other pickers in order to succeed. The game would span over a week or two - the trial period after which the picker's performance is evaluated. If they have learned to pick fast enough, with enough attention to detail - they win. If not - they get sent to the packhouse to spend the rest of the season in misery (they lose).

* **Power-ups:** A variety power-ups that make the picking easier or faster - some of them being the "white hat" techniques, like teaming up with another picker (one of the game characters) or leaving for the orchard early and claiming a better row to pick in (one that features trees with less bad apples - it's a thing in real-file apple-picking!), and some of them being "black hat" tricks which will help you, but might get you sacked if you get caught using them - like kicking the trees to drop all of the remaining apples all at once or hiding a layer of bad apples on the very bottom of the bin where the supervisors aren't likely to spot them. The power-ups could be learned from the in-game characters through talking to them during the visual novel-style part of the game and then used in the apple picking bit.

* **Supervisor inspections:** Throughout the picking day, the player character would get randomly visited by the supervisor who would inspect the contents of their current bin, and provide feedback. If they catch the player using any of the "forbidden" power-ups, or filling the bin with too many bad apples, they might issue a warning. Too many of these and the game ends sooner with the player character getting fired.

## Testing

### Validator Testing

* **HTML:**

  The initial testing has revealed a `<span>` tag that was not closed properly and the lack of a space character between the "id" and "class" attributes in two divs of the end screen. This has been fixed.

  The validator has also thrown a warning about the empty heading in the end screen that gets filled with the information on the player's victory or defeat through Javascript at the end of the game.

  It has also shown errors relating to the missing `alt` attribute for the image tags. I initially didn't see the purpose of adding it - the project is a game that is relies on visual imagery and the speed of reaction; the images don't fill any of the functions that normally call for using the attribute in web projects. I have added the attribute in the end, as there is no harm in that and it might be useful to be able to tell the images apart in case they fail to load.

  The second round of testing only showed the warning about the empty heading.

  [W3C validator](https://validator.w3.org/) was used.

* **CSS:**

  The validator did not find any errors.
  
  Warnings were shown about the vendor extensions I used to ensure that the styling I'm using will work on all the major browsers: `-webkit-user-select`, `-ms-user-select`, `-ms-overflow-style` and `::-webkit-scrollbar`.

  [W3C Jigsaw validator](https://jigsaw.w3.org/css-validator/) was used.

* **JS:**

  The validator has found one unnecessary semicolon at the end of a function definition. The semicolon was removed.

  [JQuery Validator](https://www.utilities-online.info/jquery-validator) was used.

* **Performance & best practices:**

  While [Lighthouse]() was satisfied with the page load of the project (all of the statistics in the green zone, ranging between 90-100% on both desktop and mobile device evaluation), it was less impressed when I evaluated the project using its Timespan mode so that the whole project and its interactivity would be assessed. Best Practices were rated 8/8, but the Performance was rated 14/22 (yellow zone).

  After I implemented some of the suggested changes (compressing the background images into the WebP format, )

